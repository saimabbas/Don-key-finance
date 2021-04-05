import { api } from "helpers/api";
import { useCallback, useState } from "react";

export const usePut = <T>(url: string) => {
   
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const put = useCallback(async (data: T) => {
      setError(null);
      setLoading(true);
      try {
        const res = await api.put(url, data);
        return res;
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }, [url]);

    return {  error, sending: loading, put };
}