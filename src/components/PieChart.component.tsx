import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export interface IPieChartProps {
  data: Record<string, string>;
  dataLenght: number;
}

export const PieChartComponent: React.FC<IPieChartProps> = (props) => {
  const defaultData = { a: 9, b: 20, c: 30, d: 8, e: 12 };

  // Create our data
  const { data = defaultData } = props;
  const entries = Object.entries(data);

  // create a reference of the HTML element where we'll display our chart
  const divRef = useRef<HTMLDivElement>(null);

  // set the color scale
  let randomColors: string[] = [];
  for (let i = 0; i < props.dataLenght; i++) {
    randomColors = [
      ...randomColors,
      "#" + Math.floor(Math.random() * 16777215).toString(16),
    ];
  }
  const color = d3.scaleOrdinal().range(randomColors);

  const drawChart = () => {
    // set the dimensions and margins of the graph
    const width = 450,
      height = 450,
      margin = 40;

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    const radius = Math.min(width, height) / 2 - margin;

    // append the svg object to the div referenced by 'divRef'
    const svg = d3
      .select(divRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Compute the position of each group on the pie:
    const pie = d3.pie().value(function (d: any) {
      return d[1];
    });
    //@ts-ignore
    const data_ready = pie(entries);

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll("whatever")
      .data(data_ready)
      .join("path")
      //@ts-ignore
      .attr("d", d3.arc().innerRadius(0).outerRadius(radius))
      // .attr('fill', function (d:any) { return (color(d.data[1])) })
      //@ts-ignore
      .attr("fill", (d: any) => color(d.data[1]))
      .attr("stroke", "#ccc")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);
  };

  useEffect(drawChart, []);

  return (
    <>
      <h3>Représentation des quantités sur les produits.</h3>
      <div className="Chart">
        <div ref={divRef}> </div>
        <div>
          {entries.map((_) => (
            <span className="legend">
              <div
                style={{ backgroundColor: `${color(_[0])}` }}
                className="chart_color"
              ></div>{" "}
              <span>{_[0]} ({_[1]})</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
