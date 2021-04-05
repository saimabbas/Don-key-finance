/* eslint-disable react-hooks/exhaustive-deps */
import { filter, findIndex } from "lodash";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import factory from "mxgraph";
import { useSetRef, useToggle } from "../../hooks";
import { uuidv4 } from "../../helpers/helpers";
import { useGraphState } from "./useGraphState";
const mx = factory({
  mxBasePath: "",
});

function mxVertexToolHandler() {
  mx.mxVertexHandler.apply(this, arguments);
}
mxVertexToolHandler.prototype = new mx.mxVertexHandler();
mxVertexToolHandler.prototype.constructor = mxVertexToolHandler;

mxVertexToolHandler.prototype.domNode = null;

const GraphContext = createContext(null);

export const GraphProvider = ({ children, openPanel, protocols, strategy }) => {
  const [getSelectedCell, setSelectedCell] = useSetRef({});

  const getProtocol = (name) => {
    const index = findIndex(protocols, (item) => item.name === name);
    if (index === -1) {
      return null;
    }
    return protocols[index];
  };

  const [isActionConfigOpen, openActionBar, hideActionBar] = useToggle();

  const graphRef = useRef(null);
  const divRef = useRef(null);

  const getGraph = useCallback(() => {
    return graphRef.current;
  }, []);
  const {
    getActionCells,
    getProtocolCells,
    insertProtocol,
    insertAction: insertinGraph,
    restoreGraphFromState,
  } = useGraphState({ getGraph, strategy, getProtocol });

  const getActionForCellId = useCallback((cellId) => {
    return filter(getActionCells(), function (n) {
      return n.vertex?.id === cellId;
    })[0];
  }, []);

  const getProtocolForCellId = useCallback((cellId) => {
    return filter(getProtocolCells(), function (n) {
      return n.vertex?.id === cellId;
    })[0];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProtocolByName = useCallback((protocol) => {
    return filter(getProtocolCells(), function (n) {
      return n.vertex?.id === protocol;
    })[0];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getActionConfigStyle = useCallback(() => {
    if (!isActionConfigOpen) {
      return {};
    }
    const _selectedCell = getSelectedCell();
    if (!_selectedCell) {
      return {};
    }

    const action = getActionForCellId(_selectedCell.id);
    if (!action) {
      return {};
    }
    let left = 0;
    let top = 0;
    console.log(action);
    left = action.x + action.vertex.geometry.width / 2 + 5;
    top = action.y + action.vertex.geometry.height + 100;
    return {
      top,
      left,
      transform: `translateX(-50%)`,
      display: "block",
    };
  }, [isActionConfigOpen]);

  const isProtocol = useCallback((cellId) => {
    const action = filter(getActionCells(), function (n) {
      return n.vertex?.id === cellId;
    })[0];

    if (!action) {
      const protocol = filter(getProtocolCells(), function (n) {
        return n.vertex?.id === cellId;
      })[0];

      if (protocol) {
        return true;
      }

      return false;
    } else {
      return false;
    }
  }, []);

  const closePanel = useCallback(() => {
    openPanel(null);
  }, []);

  const getSelectedProtocol = () => getProtocolForCellId(getSelectedCell().id);
  const insertProtocolAndOpenPanel = useCallback((protocol) => {
    const graph = getGraph();
    const cell = insertProtocol(protocol);

    setSelectedCell(cell.vertex);
    openPanel(protocol);
    const selectionModel = graph.getSelectionModel();
    selectionModel.setCell(cell.vertex);
  }, []);
  const handleDrop = useCallback((name) => {
    insertProtocolAndOpenPanel(name);
  }, []);

  const resetGraph = useCallback(() => {
    let graph = getGraph();
    graph.removeCells(graph.getChildVertices(graph.getDefaultParent()));
  });

  const getPrevProtocol = () => {
    return getProtocolCells()[
      getProtocolCells().findIndex(
        (item) => item.protocolId === getSelectedProtocol().protocolId
      ) - 1
    ];
  }

  const insertAction = useCallback((actionName = "ActionName") => {
    const selectedProtocol = getSelectedProtocol();
    const prevProtocol = getPrevProtocol();
   
    insertinGraph(prevProtocol.protocolId, selectedProtocol.protocolId, actionName);
  }, []);
  useEffect(() => {
    const container = divRef.current;

    const graph = new mx.mxGraph(container);
    graphRef.current = graph;
    graph.setEnabled(true);
    graph.setAllowDanglingEdges(false);
    graph.setDisconnectOnMove(false);
    graph.setCellsMovable(false);
    graph.addMouseListener({
      mouseDown: function (sender, evt) {
        let cell = evt.getCell();
        if (cell != null) {
          setSelectedCell(cell);
          closePanel();
          const protocol = getProtocolForCellId(cell.id);
          console.log(cell, protocol);
          const aIsPRotocol = isProtocol(cell.id);
          if (aIsPRotocol) {
            openPanel(protocol.protocol);
          } else {
            closePanel();
            openActionBar(getSelectedCell().id);
          }
        } else {
          closePanel();
          hideActionBar();
        }
      },
      mouseMove: function (sender, evt) {
        mx.mxLog.debug("mouseMove");
      },
      mouseUp: function (sender, evt) {
        mx.mxLog.debug("mouseUp");
      },
    });

    graph.addListener("size", function () {
      // Adds animation to edge shape and makes "pipe" visible
      graph.view.states.visit(function (key, state) {
        if (graph.model.isEdge(state.cell)) {
          state.shape.node
            .getElementsByTagName("path")[0]
            .removeAttribute("visibility");
          state.shape.node
            .getElementsByTagName("path")[0]
            .setAttribute("stroke-width", "6");
          state.shape.node
            .getElementsByTagName("path")[0]
            .setAttribute("stroke", "lightGray");
          state.shape.node
            .getElementsByTagName("path")[1]
            .setAttribute("class", "flow");
        }
      });
    });

    graph.createHandler = function (state) {
      if (state != null && this.model.isVertex(state.cell)) {
        return new mxVertexToolHandler(state);
      }

      return mx.mxGraph.prototype.createHandler.apply(this, arguments);
    };

    // graph.getModel().beginUpdate();
    // try {
    //   insertProtocolAndOpenPanel("BY");
    // } finally {
    //   // Updates the display
    //   graph.getModel().endUpdate();
    // }

    mx.mxEvent.addListener(container, "drop", function (evt) {
      if (graph.isEnabled()) {
        evt.stopPropagation();
        evt.preventDefault();

        const protocol = evt.dataTransfer.getData("protocol");
        console.log(protocol);
        handleDrop(protocol);
      }
    });
    mx.mxEvent.addListener(container, "dragover", function (evt) {
      if (graph.isEnabled()) {
        evt.stopPropagation();
        evt.preventDefault();
      }
    });
    restoreGraphFromState();
  }, []);

  const graphMethods = {
    getActionCells,
    getProtocolByName,
    getSelectedCell,
    getSelectedProtocol,
    insertAction,
    insertProtocol: insertProtocolAndOpenPanel,
    getActionConfigStyle,
    getProtocol,
    resetGraph,
    divRef,
  };

  return useMemo(
    () => (
      <GraphContext.Provider value={graphMethods}>
        <div ref={divRef} className="graph-wrapper"></div>
        {children}
      </GraphContext.Provider>
    ),
    [getActionConfigStyle, children]
  );
};

export const useGraphMethods = () => {
  const graphMethods = useContext(GraphContext);
  return graphMethods;
};
