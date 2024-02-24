import React from "react";
import "./style.css";

export default function Table() {
  return (
    <div className="table-container">
      <div className="table-header">
        <p className="table-header-cell cell">S.No</p>
        <p className="table-header-cell cell">Name</p>
        <p className="table-header-cell cell">Contribution</p>
        <p className="table-header-cell cell">Dues</p>
        <p className="table-header-cell cell">Settled</p>
      </div>
      {data.map((row, index) => (
        <div className="table-row" key={`table-row-${index}`}>
          <p className="table-row-cell cell">{row["S.No"]}</p>
          <p className="table-row-cell cell">{row["Name"]}</p>
          <p className="table-row-cell cell">{row["Contribution"]}</p>
          <p className="table-row-cell cell">{row["Dues"]}</p>
          <p className="table-row-cell cell">{row["Settled"]}</p>
        </div>
      ))}
    </div>
  );
}

const data = [
  {
    "S.No": 1,
    Name: "John Marshallmellow Deacosta",
    Contribution: 100,
    Dues: 50,
    Settled: "pending",
  },
  {
    "S.No": 2,
    Name: "Emily",
    Contribution: 150,
    Dues: 0,
    Settled: "settled",
  },
  {
    "S.No": 3,
    Name: "Michael",
    Contribution: 75,
    Dues: 100,
    Settled: "pending",
  },
  {
    "S.No": 4,
    Name: "Sarah",
    Contribution: 200,
    Dues: 25,
    Settled: "pending",
  },
  {
    "S.No": 5,
    Name: "David",
    Contribution: 125,
    Dues: 75,
    Settled: "pending",
  },
  {
    "S.No": 6,
    Name: "Olivia",
    Contribution: 50,
    Dues: 150,
    Settled: "pending",
  },
  {
    "S.No": 7,
    Name: "Daniel",
    Contribution: 100,
    Dues: 50,
    Settled: "pending",
  },
  {
    "S.No": 8,
    Name: "Emma",
    Contribution: 75,
    Dues: 100,
    Settled: "pending",
  },
  {
    "S.No": 9,
    Name: "Ethan",
    Contribution: 150,
    Dues: 0,
    Settled: "settled",
  },
  {
    "S.No": 10,
    Name: "Ava",
    Contribution: 200,
    Dues: 25,
    Settled: "pending",
  },
  {
    "S.No": 11,
    Name: "Mia",
    Contribution: 125,
    Dues: 75,
    Settled: "pending",
  },
  {
    "S.No": 12,
    Name: "Jackson",
    Contribution: 50,
    Dues: 150,
    Settled: "pending",
  },
  {
    "S.No": 13,
    Name: "Sophia",
    Contribution: 100,
    Dues: 50,
    Settled: "pending",
  },
  {
    "S.No": 14,
    Name: "William",
    Contribution: 75,
    Dues: 100,
    Settled: "pending",
  },
  {
    "S.No": 15,
    Name: "Oliver",
    Contribution: 150,
    Dues: 0,
    Settled: "settled",
  },
  {
    "S.No": 16,
    Name: "Chloe",
    Contribution: 200,
    Dues: 25,
    Settled: "pending",
  },
  {
    "S.No": 17,
    Name: "Daniel",
    Contribution: 125,
    Dues: 75,
    Settled: "pending",
  },
  {
    "S.No": 18,
    Name: "Sophie",
    Contribution: 50,
    Dues: 150,
    Settled: "pending",
  },
  {
    "S.No": 19,
    Name: "Lucas",
    Contribution: 100,
    Dues: 50,
    Settled: "pending",
  },
  {
    "S.No": 20,
    Name: "Amelia",
    Contribution: 75,
    Dues: 100,
    Settled: "pending",
  },
];
