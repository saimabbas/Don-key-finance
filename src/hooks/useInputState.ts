import { useCallback, useState } from "react"

export const useInputState = (val: string) => {
    const [state, setState] = useState(val)

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement> | string) => {
        if(typeof e === "string"){
            return setState(e);
        }
        setState(e.target.value);
    }, [])

    return [state, onChange] as const
}