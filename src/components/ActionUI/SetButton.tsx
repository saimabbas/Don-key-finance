import React from "react";
import {useGraphMethods} from "../GraphProvider/GraphProvider";
export const SetButton = ({  action }: {action: string}) => {

    const {insertAction} = useGraphMethods();

    const handleClick = () => {
        
        insertAction(action);

    };

    return (
        <button onClick={handleClick} className="setbtn">
            Set
        </button>
    );
};
