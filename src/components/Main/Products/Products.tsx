import React from "react";
import {
  ProductsContainer,
  ProductsH1,
  ProductsH2,
  ProductsH3,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
} from "./Products.styles";

interface ProductsProps {
  heading: string;
  data: any;
}

function Products({ heading, data }: ProductsProps) {
  const Fade = require("react-reveal/Fade");

  return (
    <ProductsContainer>
      <Fade bottom>
        <ProductsH1>{heading}</ProductsH1>
        <ProductsH3>SO FAST, SO HOT, SO FRESH!</ProductsH3>
      </Fade>

      <ProductWrapper>
        {data.map((product: any, idx: number) => {
          return (
            <ProductCard key={idx}>
              <ProductsH2>{product.step}</ProductsH2>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
}

export default Products;
