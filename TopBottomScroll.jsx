import React, { useRef } from "react";
import useFetch from "../custom-hook/useFetch";

const TopBottomScroll = () => {
  const bottomRef = useRef(null);
  const { data, loading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  if (loading) {
    return (
      <div className="w-screen h-screen text-4xl flex justify-center items-center">
        Loading data! Wait kro
      </div>
    );
  }
  function handleTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function handleBottom() {
    if (bottomRef.current)
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="flex flex-col justify-center items-center my-4">
      <button className="btn-primary" onClick={handleBottom}>
        Go to Bottom
      </button>
      <div className="data-constainer flex flex-col justify-center items-center my-2">
        {data && data.products && data.products.length ? (
          data.products.map((dataItem) => (
            <p key={dataItem.title} className="py-1 text-sm">
              {dataItem.title}
            </p>
          ))
        ) : (
          <p>no data found</p>
        )}
      </div>
      <button className="btn-primary" onClick={handleTop} ref={bottomRef}>
        Go to Top
      </button>
    </div>
  );
};

export default TopBottomScroll;
