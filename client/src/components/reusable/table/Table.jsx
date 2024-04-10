import PropTypes from "prop-types";
import React from "react";
import "./style.css";

/**
 * Table component.
 * @param {Object} props - The props object.
 * @param {Array<object>} props.data - table data.
 * @param {Function} props.onRowClick - function to get the row data
 * @returns {JSX.Element} The table component.
 */
function Table({ data, onRowClick }) {
  // &#8377; Rupee symbol

  return (
    <div className="table-container">
      {/* LARGE SCREEN */}
      <div className="large-screen">
        {/* Table Header */}
        <div className="table-header">
          {/* blank image space to align with body image column */}
          <div className="table-header-img" />

          {Object.keys(data[0]).reduce((initialArray, objectKey, index) => {
            if (objectKey.includes("image")) return initialArray;
            return [
              ...initialArray,
              <p
                key={`table-header-cell-${index}`}
                className="table-header-cell cell"
              >
                {objectKey}
              </p>,
            ];
          }, [])}
        </div>
        {/* Table Body holds rows*/}
        {data.map((row, index) => (
          <div
            className="table-row"
            key={`table-row-${index}`}
            onClick={() => {
              onRowClick(row);
            }}
          >
            <img
              loading="lazy"
              className="table-cell-img"
              src={
                row[
                  Object.keys(row).filter((key) => {
                    // console.log(key, row, row[key.includes("image")]);
                    return key.includes("image");
                  })
                ]
              }
              alt=""
            />

            {/* Not required but to eliminate a property, we are using this logic*/}
            {Object.keys(row).reduce((initialArray, objectKey, index) => {
              if (objectKey.includes("image")) return initialArray;
              return [
                ...initialArray,
                <p
                  key={`table-row-cell-${index}`}
                  className="table-row-cell cell"
                >
                  {row[objectKey]}
                </p>,
              ];
            }, [])}
          </div>
        ))}
      </div>

      {/* SMALL SCREEN */}
      <div className="small-screen">
        {data.map((item, index) => (
          <div
            className="table-item"
            key={`group-page-table-item-${index}`}
            onClick={() => {
              onRowClick(item);
            }}
          >
            <img
              className="table-item-img"
              src="/profile_imgs/image-1.jpeg"
              alt=""
              loading="lazy"
            />
            <div
              className="table-item-body"
              key={`group-page-table-item-body-${index}`}
            >
              {Object.keys(item).map((key, index) => (
                <div
                  className="group-page-table-item-body-row"
                  key={`group-page-table-item-body-row-${key}`}
                >
                  <div className="table-item-body-label group-page-table-item-body-row-cell">
                    <p>{key}</p>
                  </div>
                  <div className="table-item-body-body-value group-page-table-item-body-row-cell">
                    <p>{item[key]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.array,
  onRowClick: PropTypes.func,
};

export default Table;
