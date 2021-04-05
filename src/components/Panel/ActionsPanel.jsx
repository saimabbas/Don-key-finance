import React from "react";

export const ActionsPanel = ({
    lastprotocol,
    protocol,
    onSelect = () => {},
}) => {
    const { actions } = protocol;

    return (
        <div className="p-4">
            <h3 style={{ fontSize: 23 }}>Select Action</h3>
            <div className="row mt-4">
                {actions &&
                    actions.length > 0 &&
                    actions.map((action) => {
                        return (
                            <div className="col-4">
                                <button
                                    onClick={() => onSelect(action.name)}
                                    className="panel-action-btn"
                                >
                                    <div
                                        className="panel-action-btn-bg"
                                        style={{
                                            background: `linear-gradient(to right, ${lastprotocol.edgeColor}, ${protocol.edgeColor})`,
                                        }}
                                    />
                                    {action.icon ? (
                                        <span
                                            className="d-inline-block mr-2"
                                            style={{ width: 15 }}
                                        >
                                            <img
                                                className="img-fluid"
                                                src={action.icon}
                                            />
                                        </span>
                                    ) : null}
                                    {action.description}{" "}
                                </button>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
