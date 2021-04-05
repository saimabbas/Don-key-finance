import { api } from "helpers/api";
import { useEffect, useState } from "react";

const isDefined = (val: any[]) => {
    let info = true;
    for (let i = 0; i < val.length; i++) {
        const item = val[i];
        if (!item) {
            info = false;
            break;
        }
    }
    return info;
};

export const useGet = <T>(
    url: string,
    defaultVal: T,
    dependsOn: any[] = []
) => {
    const [state, setState] = useState<T>(defaultVal);

    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const fetchData = async () => {
        setError(null);
        setLoading(true);
        try {
            const res = await api.get(url);

            setState(res.data);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (dependsOn.length === 0 || isDefined(dependsOn)) {
            fetchData();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependsOn);

    return { data: state, error: error, loading, refetchData: fetchData };
};
