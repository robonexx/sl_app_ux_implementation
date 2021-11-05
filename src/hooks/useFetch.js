import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setTimeout(() => {
      const fetchData = async () => {
        setIsLoading(true);

        try {
          const res = await fetch(url, { signal: controller.signal });
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          const json = await res.json();

          setIsLoading(false);
          setData(json);
          setError(null);
        } catch (err) {
          setIsLoading(false);
          setError('Could not fetch data');
          console.log(err.message);
        }
      };

      fetchData();
    }, 1000);
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};
