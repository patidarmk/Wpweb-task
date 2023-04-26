//The api you have procided is not working with react due to cross Origin Resourse Sharing (CORS),
// so i used which i have please consider

import "./App.css";
import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import Products from "./Products";
import Pagination from "./Pagination";
import ViewData from "./ViewData";
import Categories from "./Categories";

function App() {
  let PageSize = 5;

  const [id, setId] = useState();
  const showDetails = (id) => {
    setId(id);
    setViewActive(1);
  };

  const closeView = () => {
    setViewActive(0);
  };

  const [fetchData, setFetchData] = useState("products");
  const [url, setUrl] = useState("https://fakestoreapi.com/products?limit=5");

  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isViewActive, setViewActive] = useState(0);
  const [searchByName, setSearchByName] = useState("");
  const [searchByCategories, setSearchByCategories] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [istoggle, setToggle] = useState(0);

  const [pagination, setPagination] = useState({
    startIndex: 1,
    totalPage: 4,
  });

  const onPageClick = (page) => {
    setCurrentPage(page);
    let limit = 5 * page;
    setUrl(`https://fakestoreapi.com/products?limit=${limit}`);
    setPagination({
      totalPage: 4,
      startIndex: 5 * (page - 1) + 1,
    });
    setData(data.filter((item) => item.id >= 5 * (page - 1) + 1));
  };

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  const fetchCategories = () => {
    return fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  useEffect(() => {
    fetchInfo();
    fetchCategories();
  }, [url]);

  return (
    <div className="App">
      <div className="categories">
        <a onClick={() => setToggle(0)}>Products</a>
        <a onClick={() => setToggle(1)}>Categories</a>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search by Name"
          onChange={(e) => setSearchByName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="search By Categories"
          onChange={(e) => setSearchByCategories(e.target.value)}
        ></input>
      </div>
      <div></div>
      {istoggle === 0 && (
        <Products
          data={data}
          searchByName={searchByName}
          searchByCategories={searchByCategories}
          showDetails={showDetails}
          currentPage={currentPage}
        />
      )}

      <div className="viewData">
        <ViewData
          id={id}
          data={data}
          isViewActive={isViewActive}
          closeView={closeView}
        />
      </div>
      {istoggle === 1 && <Categories data={categories} />}
      {istoggle === 0 && (
        <Pagination
          totalPage={pagination.totalPage}
          onPageClick={onPageClick}
        />
      )}
    </div>
  );
}
export default App;