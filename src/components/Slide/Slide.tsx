import { ButtonsWrapper } from "../ButtonsWrapper/ButtonsWrapper";
import * as SC from "./Slide.styled";
import { useSliderContext } from "../../context/SliderContext";

export const Slide = () => {
  const {
    currentSlide: { img, content, name, job },
  } = useSliderContext();

  return (
    <SC.SlideWrapper>
      <SC.SlideImageWrapper>
        <SC.SlideImage src={img} alt={name} />
        <SC.SlideButtonsWrapper>
          <ButtonsWrapper />
        </SC.SlideButtonsWrapper>
      </SC.SlideImageWrapper>
      <SC.SlideTextContent>
        <SC.UserDescription>"{content}"</SC.UserDescription>
        <SC.UserInfoUl>
          <SC.UserInfoLi>
            <SC.UserName>{name}</SC.UserName>
          </SC.UserInfoLi>
          <SC.UserInfoLi>
            <SC.UserJob>{job}</SC.UserJob>
          </SC.UserInfoLi>
        </SC.UserInfoUl>
      </SC.SlideTextContent>
    </SC.SlideWrapper>
  );
};
