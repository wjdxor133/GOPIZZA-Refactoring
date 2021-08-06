import React from "react";
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
} from "./Products.styles";
import { ProductTypes } from "types/main.types";
import Banner from "assets/videos/banner.mp4";

interface ProductsProps {
  heading: string;
  data: ProductTypes[];
}

function Products({ heading, data }: ProductsProps) {
  const Fade = require("react-reveal/Fade");
  const Bounce = require("react-reveal/Flip");

  return (
    <ProductsContainer>
      <Fade bottom>
        <ProductsH1>{heading}</ProductsH1>
        <ProductsH3>SO FAST, SO HOT, SO FRESH!</ProductsH3>
        <VideoWrapper>
          <ProductVideo
            autoPlay
            loop
            muted
            src={Banner} /*type="video/mp4" */
          />
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
