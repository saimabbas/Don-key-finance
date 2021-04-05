import React, { useState } from "react";
import { useCallback } from "react";
import { tuplify } from "../helpers/tuplify";
import { isObject , isUndefined, isNull, isNaN} from "lodash";

export const useInputState = (val?: string) => {
  const [state, setState] = useState(val);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if(isUndefined(e) || isNull(e) || isNaN(e)){
      return;
    }
    if(!isObject(e)){
      setState(e);
    }else {
      setState(e.target.value);
    }
    
  }, []);

  return tuplify(state, onChange);
};
