import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import useGlobal from "./redux/index";
import DataTable from "./pages/dataTable/index.js";
import "./App.css";
let itemToShow = 0;
let paginatedArray = [];

function App() {
  const [globalState, globalActions] = useGlobal();
  const [isDataLoading, setIsDataLoading] = useState(true);

  const loadMoreData = () => {
    itemToShow = itemToShow + 5;
    getDataFromApi(itemToShow);
  };

  const getDataFromApi = (_start) => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_start=${_start}&_limit=5`
      )
      .then((res) => {
        paginatedArray.push(...res.data);

        globalActions.updateTableData(paginatedArray);
        setIsDataLoading(false);
      });
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getDataFromApi(itemToShow);
  }, []);

  const deleteRow = (valueToRemove) => {
    const filteredItems = globalState.tableData.filter(
      (item) => item.id !== valueToRemove
    );
    globalActions.updateTableData(filteredItems);
  };

  return (
    <>
      <div className="main-container">
        {isDataLoading ? (
          <div className="loader-container">
            <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
          </div>
        ) : (
          <>
            <DataTable deleteRow={deleteRow} />
            <div
              className="load-more-button"
              onClick={() => {
                loadMoreData();
              }}
            >
              Load More
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
