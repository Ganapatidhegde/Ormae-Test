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
  const editTitle = (e, updatedContent) => {
    e.currentTarget.innerText = updatedContent;
  };

  return (
    <div className="table-container">
      <div className="row-container center flex table-heading title-font">
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
            {tableHeaderData.map((col, index, key) => (
              <>
                {index !== 3 ? (
                  <div
                    onClick={(event) => {
                      index === 2 &&
                        editTitle(event, "This is the changed content");
                    }}
                    key={key}
                    id="titleId"
                    className={`text-align-center title-field ${
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
