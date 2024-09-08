import React from "react";
import { useState, useEffect } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchData(url) {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, loading };
};

export default useFetch;
