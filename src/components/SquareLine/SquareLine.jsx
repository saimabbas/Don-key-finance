
const createArrayOfSize = (size) => {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(i);
    }
    return arr;
  };

export const SquareLine = ({ count = 9, color = "red" }) => {
    return (
      <div className="d-inline-flex">
        {createArrayOfSize(count).map(() => {
          return (
            <div
              className="squareline_square"
              style={{ backgroundColor: color }}
            />
          );
        })}
      </div>
    );
  };