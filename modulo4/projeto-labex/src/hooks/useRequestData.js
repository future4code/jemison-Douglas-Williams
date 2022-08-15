import {useEffect, useState} from 'react';
import axios from 'axios';


export function useRequestData(url) {
    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState("");

    useEffect(() => {
        setIsLoading(true);
        axios.get(url)
        .then((response) => {
        setIsLoading(false)
        setData(response.data.trips)
        }).catch((error) => {
        setIsLoading(false)
        setIsError(error)
        console.log(error.response.data)
        })}, [url])

    return [data, isLoading, isError];
}