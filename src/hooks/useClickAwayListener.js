import { useCallback, useEffect, useRef } from "react";

export const useClickAwayListener = ({ onClickAway } = {}) => {
    const clickFromInside = useRef(false);
    const onMouseDown = useCallback(() => {
        clickFromInside.current = true;
    }, []);
    const clickAway = useCallback(() => {
        if (!clickFromInside.current) {
            onClickAway && onClickAway();
        }
        clickFromInside.current = false;
    }, [onClickAway]);
    useEffect(() => {
        document.body.addEventListener("click", clickAway);
        return () => {
            document.body.removeEventListener("click", clickAway);
        };
    }, [clickAway]);

    return { onMouseDown };
};
