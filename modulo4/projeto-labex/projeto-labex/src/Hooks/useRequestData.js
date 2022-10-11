import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (url) => {
    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [ booleanState, setBooleanState] = useState(false);
  
    useEffect(() => {
      setIsLoading(true);
      axios
        .get(url)
        .then((response) => {
          setIsLoading(false);
          setData(response.data);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err)
          console.log(error);
        });
    }, [booleanState]);
  
    return [data, isLoading, error, booleanState, setBooleanState];
  };
  
  export default useRequestData;
  