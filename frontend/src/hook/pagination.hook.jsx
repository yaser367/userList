import React, { useEffect, useState } from "react";
import axios from "axios";


const usePagination = (endPoint, pageIndex) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lists, setLists] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setError(true);
    let cancel;
    axios
      .get(endPoint + pageIndex, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLists((prevList) => {
          return [...prevList, ...res.data.results.map((b) => b)];
        });
        setHasMore(res.data.results.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [pageIndex]);
  return {
    loading,
    error,
    lists,
    hasMore,
  };
};

export default usePagination;
