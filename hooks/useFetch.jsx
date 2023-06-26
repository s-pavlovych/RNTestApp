import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1');
            // console.log(JSON.stringify(response, null, 2));
            const albums = await response.json();
            // console.log(albums);
            setData(albums);
            // setData(response.data.data);
            // console.log(response.data.data)
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is Error');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        fetchData();
    };
    return { data, isLoading, error, refetch };
};

export default useFetch;
