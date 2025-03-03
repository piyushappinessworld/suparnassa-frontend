import Achievements from "@/components/AboutUsPage/Achievements/Achievements";
import Experience from "@/components/AboutUsPage/Experience/Experience";
import Journey from "@/components/AboutUsPage/Journey/Journey";
import Values from "@/components/AboutUsPage/Values/Values";
import React from "react";

const page = () => {
  return (
    <div>
      <Journey />
      <Values />
      <Achievements />
      <Experience />
    </div>
  );
};

export default page;
