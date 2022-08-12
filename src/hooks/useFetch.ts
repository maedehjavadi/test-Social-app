import { useCallback, useEffect, useState } from "react";
import { LinksData } from "../types/socialLinks/socialMedias";

const useFetch = (url: string, isRefreshing?: boolean) => {
  const [isPending, setIsPending] = useState<boolean>(true);
  const [data, setData] = useState<LinksData[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  const getData = useCallback(() => {
    setTimeout(async () => {
      await fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data from server");
          } else {
            setRefresh(true);
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 900);
    setRefresh(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [data, getData]);

  return { data, refresh, isPending };
};

export default useFetch;
