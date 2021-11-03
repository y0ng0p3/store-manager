import React, { useRef, useEffect, } from 'react'
import * as d3 from 'd3'
import { useProductStore } from 'stores';

export interface IScatterPlotProps {
  
}

export const ScatterPlotComponent: React.FC<IScatterPlotProps> = (props) => {
  const { products } = useProductStore()

  const maxPrice = d3.max(products, (d) => d.price!);

  const divRef = useRef<HTMLDivElement>(null);

  const margin = { top: 10, right: 30, bottom: 30, left: 60 };
  const width = 460 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  // set the color scale
  let randomColors: string[] = [];
  for (let i = 0; i < 1000; i++) {
    randomColors = [
      ...randomColors,
      "#" + Math.floor(Math.random() * 16777215).toString(16),
    ];
  }
  const color = d3.scaleOrdinal().range(randomColors);

  const drawGraph = () => {
    const svg = d3
      .select(divRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Add X axis
    var x = d3
      .scalePoint()
      .domain(products.map((_) => _.name))
      .range([0, width]);

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3
      .scaleLinear()
      .domain([0, (maxPrice || 0) + 100])
      .range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // Add dots
    svg
      .append("g")
      .selectAll("dot")
      .data(products)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return x(d.name)!;
      })
      .attr("cy", function (d) {
        return y(d.price);
      })
      .attr("r", function (d) {
        return d.quantity_in_stock * 0.05;
      })
      .style("fill", "#69b3a2");
  };

  useEffect(drawGraph, []);

  return (
    <>
      <h3>Représentation des produits sur les prix et les quantité.</h3>
      <div className="Chart">
        <div ref={divRef}> </div>
        <div>
          {products.map((_) => (
            <span className="legend">
              <div
                className="chart_color"
              ></div>{" "}
              <span>
                {_.name} ({_.price})
              </span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
