import React from "react";
import ProductCard from "../compound/ProductCard";
import productImage from "../../assets/productImage.png";
import Section from "./Section";

const FlashSalesSection: React.FC = () => {
  return (
    <Section
      sectionTitle="Today's"
      showPagination
      sliderTitle="Flash Sales"
      showTimer
      testId="FlashSales"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <ProductCard
          key={index}
          image={productImage}
          title="HAVIT HV-G92 Gamepad"
          price={120}
          discount={40}
          rating={4}
          onAddToCart={() => console.log("Added to cart")}
          onWishlist={() => console.log("Added to wishlist")}
          onViewDetails={() => console.log("View details")}
        />
      ))}
    </Section>
  );
};

export default FlashSalesSection;
