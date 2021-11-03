import React, { useState } from "react";
import { ProductItemComponent, NewProductComponent } from "components";
import { useProductStore } from "stores";
export interface IProductListingProps {}

export const ProductListingPage: React.FC<IProductListingProps> = () => {
  const { products } = useProductStore();
  return (
    <div className="product__listing">
      <NewProductComponent />
      {products.map((_) => (
        <ProductItemComponent key={_.id} product={_} />
      ))}
    </div>
  );
};
