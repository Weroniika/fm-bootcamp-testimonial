import { useState } from "react";
import { Slide } from "../Slide/Slide";
import { ButtonsWrapper } from "../ButtonsWrapper/ButtonsWrapper";
import * as SC from "./Slider.styled";

export const Slider = () => {
  return (
    <SC.Slider>
      <Slide />
    </SC.Slider>
  );
};
