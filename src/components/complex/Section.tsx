import React, { ReactNode } from "react";
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "../compound/SectionTitle";

interface SectionProps {
  children: ReactNode[];
  sectionTitle: string;
  sliderTitle: string;
  showTimer: boolean;
}

const Section: React.FC<SectionProps> = ({ sectionTitle, sliderTitle }) => {
  return (
    <div className="xl:pl-32 px-10 margin-auto lg:px-[5%] mt-20 mb-20 ">
      <SectionTitle title={sectionTitle} />
      <div className="flex sm:flex-row flex-col justify-between items-center mb-8">
        <div className="flex sm:flex-row my-5 md:mt-0 flex-col sm:items-end text-text2 gap-5 sm:gap-14 md:gap-20 ">
          <h1 className="capital font-semibold tracking-wide text-3xl font-inter">
            {sliderTitle}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section;
