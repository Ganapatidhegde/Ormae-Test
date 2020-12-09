import React from "react";
import useGlobal from "../../redux";
import "./style.css";

function DataTable(props) {
  const [globalState] = useGlobal();
  const tableHeaderData = globalState.tableHeaderData;
  const data = globalState.tableData;

  const onDeleteClick = (rowData) => {
    props.deleteRow(rowData.id);
  };

  return (
    <div className="table-container">
      <div className="row-container center flex table-heading">
        {tableHeaderData.map((col, key) => (
          <div
            key={key}
            className={`text-align-center ${
              key === 0 || key === 1 ? "width-10" : "width-35"
            }`}
          >
            {col.heading}
          </div>
        ))}
      </div>

      <div>
        {data.map((item, key) => (
          <div key={key} className="row-container center flex">
            {tableHeaderData.map((col, index) => (
              <>
                {index !== 3 ? (
                  <div
                    className={`text-align-center ${
                      index === 0 || index === 1 ? "width-10" : "width-35"
                    }`}
                  >
                    {item[col.property]}
                  </div>
                ) : (
                  <div className="text-align-center width-35">
                    <a target="_blank" href={item.url}>
                      <img src={item[col.property]} alt="Thumbnail Image" />
                    </a>
                  </div>
                )}
              </>
            ))}
            <div
              onClick={() => {
                onDeleteClick(item);
              }}
            >
              <div className="delete-button">Delete</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataTable;
