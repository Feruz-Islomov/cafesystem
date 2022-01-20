import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const AdminChart = ({ allday1 }) => {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setOptions({
      chart: {
        background: "rgb(29, 27, 65);",
        foreColor: "#216e93",
      },
      xaxis: {
        categories: [
          "stol1",
          "stol2",
          "stol3",
          "stol4",
          "stol5",
          "stol6",
          "stol7",
          "stol8",
          "stol9",
          "stol10",
        ],
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      fill: {
        color: ["orange"],
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: `$All table total: ${allday1.reduce((a, c) => a + c, 0)}`,
        align: "center",
        margin: 20,
        offSetY: 20,
        style: {
          fontSize: "25px",
        },
      },
    });
  }, [allday1]);
  useEffect(() => {
    setSeries([
      {
        name: "Population",
        data: allday1,
      },
    ]);
  }, [allday1]);

  return (
    <div>
      {<h1>All tables today: ${allday1.reduce((a, c) => a + c, 0)}</h1>}
      <Chart
        options={options}
        series={series}
        type="bar"
        height="300"
        width="400"
      />
    </div>
  );
};

export default AdminChart;
