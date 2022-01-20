import React from "react";
import Chart from "react-apexcharts";

const MonthChart = ({ sumdata }) => {
  const dateofSum = sumdata.map((val) => val.createdAt.split("T")[0]);
  const amountofSum = sumdata.map((val) => val.dailyRevenue);
  // const daily = sumdata.map((val) => val.dailyRevenue);
  const thestate = {
    series: [
      {
        name: "Summa",
        data: amountofSum,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"],
        },
      },
      xaxis: {
        labels: {
          rotate: -45,
        },
        categories: dateofSum,
        tickPlacement: "on",
      },
      yaxis: {
        title: {
          text: "Summa",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100],
        },
      },
    },
  };

  return (
    <div>
      {/* {<h1>Overall: $ {daily.reduce((a, c) => a + c, 0)}</h1>} */}
      <Chart
        options={thestate.options}
        series={thestate.series}
        type="bar"
        height="300"
        width="400"
      />
    </div>
  );
};

export default MonthChart;
