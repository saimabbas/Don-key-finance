import { IStrategy, IProtocol, IProtocolCell, IActionCell } from "interfaces";
import { useRef } from "react";
import { generateGradientImage, uuidv4 } from "../../helpers/helpers";
import { api } from "../../services/api";

const saveStrategy = async (strategy: IStrategy) => {
  const { id, ...rest } = strategy;
  rest.actionCells = rest.actionCells.map((item) => ({ ...item, vertex: null }));
  rest.protocolCells = rest.protocolCells.map((item) => ({ ...item, vertex: null }));
  const json = JSON.stringify(rest);

  const result = await api.put("/api/v1/strategies", { id, json });
  console.log(result);
};



const formatImageData = (base64: string) => {
  let data = "";
  // Converts format of data url to cell style value for use in vertex
  let semi = base64.indexOf(";");

  if (semi > 0) {
    data =
      base64.substring(0, semi) +
      base64.substring(base64.indexOf(",", semi + 1));
  }
  return data;
}


// const second = uuidv4();
export const useGraphState = ({ strategy, getGraph, getProtocol }: {
  strategy: IStrategy, getGraph: any,
  getProtocol: (name: string) => IProtocol
}) => {
  console.log(strategy);
  const stateRef = useRef(strategy);

  const findProtocolCellById = (id: string) => {
    const index = stateRef.current.protocolCells.findIndex(
      (item) => item.protocolId === id
    );
    return stateRef.current.protocolCells[index];
  };

  const addProtocolToGraph = (cell: IProtocolCell) => {
    const graph = getGraph();
    const parent = graph.getDefaultParent();
    let newVertex = {};
    const base64 = getProtocol(cell.protocol).base64;

    let data = formatImageData(base64)
    graph.getModel().beginUpdate();
    try {
      newVertex = graph.insertVertex(
        parent,
        null,
        "",
        cell.x,
        cell.y,
        cell.w,
        cell.h,
        "resizable=0;shape=image;image=" + data + ";"
      );
    } finally {
      // Updates the display
      graph.getModel().endUpdate();
    }
    cell.vertex = newVertex;
  };

  const addActionToGraph = (cell: IActionCell) => {
    let selectedProtocol = findProtocolCellById(cell.nextProtocolCellId);

    const previousCell = findProtocolCellById(cell.prevProtocolCellId);
    console.log(selectedProtocol);
    //get action image
    //@ts-ignore

    const graph = getGraph();
    const parent = graph.getDefaultParent();

    const prevObj = getProtocol(previousCell.protocol);
    const selectedObj = getProtocol(selectedProtocol.protocol);

    const vertexStyleAction =
      "shape=image;strokeWidth=2;fillColor=#4F4F4F;strokeColor=black;resizable=0;" +
      "gradientColor=#313130;fontColor=white;fontStyle=0;spacingTop=12;image=" +
      formatImageData(generateGradientImage(prevObj.edgeColor, selectedObj.edgeColor));

    const x = cell.x;
    const y = cell.y;

    const actionVertex = graph.insertVertex(
      parent,
      null,
      "",
      x,
      y,
      105,
      47,
      vertexStyleAction
    );

    //get selected cell edge color
    const protocol = getProtocol(previousCell.protocol);
    const lastCellProtocolEdge = protocol.edgeColor;
    const selectedCellProtocolEdge = getProtocol(selectedProtocol.protocol)
      .edgeColor;

    graph.getModel().beginUpdate();
    graph.model.setValue(actionVertex, cell.actionName);
    try {
      //TODO: SHOULD STORE EDGES
      graph.insertEdge(
        parent,
        null,
        "",
        actionVertex,
        selectedProtocol.vertex,
        "strokeWidth=3;endArrow=block;" +
        "endSize=2;endFill=1;strokeColor=" +
        selectedCellProtocolEdge +
        ";rounded=1;edgeStyle=orthogonalEdgeStyle"
      );
      graph.insertEdge(
        parent,
        null,
        "",
        previousCell.vertex,
        actionVertex,
        "strokeWidth=3;endArrow=block;" +
        "endSize=2;endFill=1;strokeColor=" +
        lastCellProtocolEdge +
        ";rounded=1;edgeStyle=orthogonalEdgeStyle"
      );
    } finally {
      // Updates the display
      graph.getModel().endUpdate();
    }
    cell.vertex = actionVertex;
  };

  const insertProtocol = (name: string) => {
    const lastCell =
      stateRef.current.protocolCells.length > 0
        ? stateRef.current.protocolCells[
        stateRef.current.protocolCells.length - 1
        ]
        : null;
    const newCell = {
      protocolId: uuidv4(),
      protocol: name,
      lastProtocol: lastCell?.protocol,
      x: (lastCell?.x || 0) + 150,
      y: 150,
      w: 110,
      h: 110,
      isAction: false,
      buru: false,
      vertex: null,
    };
    addProtocolToGraph(newCell);
    stateRef.current.protocolCells.push(newCell);
    saveStrategy(stateRef.current);
    return newCell;
  };

  const insertAction = async (prevCellId: string, nextCellId: string, actionName: string) => {
    const protocolcell = findProtocolCellById(prevCellId);
    const nextProtocolcell = findProtocolCellById(nextCellId);
    const protocol = getProtocol(protocolcell.protocol);
    const nextProcotol = getProtocol(nextProtocolcell.protocol);

    const res = await api.get(`/api/v1/protocols?protocol_id=${protocol.id}&nextprotocol_id=${nextProcotol.id}`);

    const cell: IActionCell = {
      vertex: null,
      prevProtocolCellId: prevCellId,
      nextProtocolCellId: nextCellId,
      y: 350,
      isAction: true,
      x: protocolcell.x + 80,
      imageUrl: res.data.data,
      actionName
    };

    addActionToGraph(cell);
    stateRef.current.actionCells.push(cell);
    saveStrategy(stateRef.current);
    return cell;
  };

  const restoreGraphFromState = () => {
    stateRef.current.protocolCells.forEach((cell) => {
      addProtocolToGraph(cell);
    });

    stateRef.current.actionCells.forEach((cell) => {
      addActionToGraph(cell);
    });
  };

  const getActionCells = () => {
    return stateRef.current.actionCells;
  };
  const getProtocolCells = () => {
    return stateRef.current.protocolCells;
  };
  return {
    restoreGraphFromState,
    insertAction,
    insertProtocol,
    getActionCells,
    getProtocolCells,
  };
};
