import { PublicStore } from "@/lib/store";
import { useEffect, useState } from "react";



export default function useFetch(endpoint: string){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function handleCall(endpoint: string){
        setLoading(true);
   
        PublicStore.get(endpoint)
        .then((response) => setData(response))
        .catch((e) => setError(e))
        .finally(() => setLoading(false))
    }

    useEffect(() => {

        handleCall(endpoint);    

    },[endpoint]);

    const refetch = (newendpoint?: string) => {
        handleCall((newendpoint ? newendpoint : endpoint)); 
    }

    return { data, loading, error, refetch };
}