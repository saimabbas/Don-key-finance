export const TableEditDeleteCell = ({
    onEdit,
    onDelete,
}: {
    onEdit: () => void;
    onDelete: () => void;
}) => {
    return (
        <div
            style={{ fontSize: 10, height: "100%" }}
            className="d-flex  justify-content-around"
        >
            <div
                onClick={onEdit}
                className="cursor-pointer d-flex align-items-center"
            >
                <i className="fa fa-pencil-alt" />
            </div>
            <div
                onClick={onDelete}
                className="cursor-pointer d-flex align-items-center"
            >
                <i className="fa fa-trash-alt" />
            </div>
        </div>
    );
};
