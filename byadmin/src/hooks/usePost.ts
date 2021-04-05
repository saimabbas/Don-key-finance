import { api } from "helpers/api";
import { useCallback, useState } from "react";

export const usePost = <T>(url: string) => {
   
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const post = useCallback(async (data: T) => {
      setError(null);
      setLoading(true);
      try {
        const res = await api.post(url, data);
        return res;
      } catch (e) {
        setError(e);
        throw e;
      } finally {
        setLoading(false);
      }
    }, [url]);

    return {  error: error, sending: loading, post };
}