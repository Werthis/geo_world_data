import { useState, useEffect } from "react";
import { csv } from "d3-fetch";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    csv(url)
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name !== null) {
          console.log(err.message);
        }
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
