import { PublicStore } from "@/lib/store";
import { useCallback, useEffect, useState } from "react";

export default function useFetch<T>(endpoint: string){
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState();

    const handleCall = useCallback((endpoint: string) => {
        setLoading(true);
   
        PublicStore.get<T>(endpoint)
        .then((response) => setData(response))
        .catch((e) => setError(e))
        .finally(() => setLoading(false))
    },[])

    useEffect(() => {

        handleCall(endpoint);    

    },[endpoint]);

    const refetch = useCallback((newendpoint?: string) => {
        handleCall((newendpoint ? newendpoint : endpoint)); 
    },[endpoint])

    return { data, loading, error, refetch };
}