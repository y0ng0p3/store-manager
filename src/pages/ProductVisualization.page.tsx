import { ScatterPlotComponent } from 'components'
import { PieChartComponent } from 'components/PieChart.component'
import React, { useState, } from 'react'
import { useProductStore } from 'stores'

export interface IProductVisualizationProps {

}

export const ProductVisualizationPage: React.FC<IProductVisualizationProps> = () => {
  const { products } = useProductStore()
  let data = {};
  products.forEach(
    (_) =>
      (data = { ...data, [_.name]: _.quantity_in_stock })
  );
  return (
    <div className='visualizer'>
      <PieChartComponent data={data} dataLenght={products.length} />
      <ScatterPlotComponent />
    </div>
  );
}
