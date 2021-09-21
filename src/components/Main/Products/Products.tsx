/* eslint-disable react/no-array-index-key */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { ProductTypes } from 'types/main.types';
import products from 'assets/videos/products.mp4';
import {
  ProductsContainer,
  ProductsH1,
  ProductsH2,
  ProductsH3,
  ProductWrapper,
  VideoWrapper,
  ProductVideo,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
} from './Products.styles';

interface ProductsProps {
  heading: string;
  data: ProductTypes[];
}

function Products({ heading, data }: ProductsProps) {
  const Fade = require('react-reveal/Fade');

  return (
    <ProductsContainer>
      <Fade bottom>
        <ProductsH1>{heading}</ProductsH1>
        <ProductsH3>SO FAST, SO HOT, SO FRESH!</ProductsH3>
        <VideoWrapper>
          <ProductVideo autoPlay loop muted src={products} /* type="video/mp4" */ />
        </VideoWrapper>
      </Fade>

      <ProductWrapper>
        <Fade bottom cascade>
          {data.map((product: ProductTypes, idx: number) => {
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
        </Fade>
      </ProductWrapper>
    </ProductsContainer>
  );
}

export default Products;
