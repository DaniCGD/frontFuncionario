import { useState, useEffect } from 'react';

export function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controller, setController] = useState(null)

    useEffect(() => {
        const abortController = new AbortController();
        setLoading(true);
        setController(abortController)
        fetch(url, { signal: abortController.signal })//URL de la carga de ingresos acumulados del mes
            .then((response) => response.json())    
            .then((data) => setData(data))
            .catch((error) => {
                if(error.name === "AbortError"){
                    console.log("Request cancelled")
                }
                setError(error)
            })
            .finally(() =>setLoading(false));
        return () => abortController.abort();
    },[]);

    const handleCancelRequest = () => {
        if (controller){
            controller.abort();
            setError("Request")
        }
        abortController.abort();
    }

    return {data, loading, error}
}