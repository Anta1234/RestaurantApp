import React, { useState } from "react";
import Plot from "react-plotly.js";

function Product() {
  const sample = [
    {
      category: "M",
      values: [33, 0, 5, 13, 10],
      types: [
        "MR TAKA RAMEN",
        "SWAY LOUNGE",
        "CIRCLE LINE QUEENS",
        "SUBWAY",
        "EL MANANTIAL BAKERY"
      ]
    },
    {
      category: "B",
      values: [42, 17, 12, 17, 10],
      types: [
        "EL SAZON DE OLGA RESTAURANT",
        "FORDHAM RESTAURANT",
        "FINIX CAFE & JUICE BAR",
        "DELFINI",
        "CARIBE RESTAURANT"
      ]
    }
  ];

  const [data, setData] = useState([]);

  function handleClick(e) {
    sample.forEach((each) => {
      if (each.category === e.target.id) {
        setData({ values: each.values, types: each.types });
      }
    });
  }

  return (
    <div>
      <div>
        <button onClick={handleClick} id="M">
          Manhattan
        </button>
        <button onClick={handleClick} id="B">
          Bronx
        </button>
      </div>
      <Plot
        data={[
          {
            type: "bar",
            x: data.types,
            y: data.values
          }
        ]}
        layout={{ width: 800, height: 500, title: "Interactive Graph" }}
      />
    </div>
  );
}
export default Product;
