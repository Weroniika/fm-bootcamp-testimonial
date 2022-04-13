import * as SC from "./ButtonsWrapper.styled";
import { Button } from "../Button/Button";
import { ReactComponent as NextIcon } from "../../assets/icon-next.svg";
import { ReactComponent as PrevIcon } from "../../assets/icon-prev.svg";
import { useSliderContext } from "../../context/SliderContext";

export const ButtonsWrapper = () => {
  const { goToNextPicture, goToPrevPicture } = useSliderContext();

  return (
    <SC.ButtonsWrapper>
      <Button onClick={goToPrevPicture} ariaLabel="go to prev slide">
        <PrevIcon />
      </Button>
      <Button onClick={goToNextPicture} ariaLabel="go to next slide">
        <NextIcon />
      </Button>
    </SC.ButtonsWrapper>
  );
};
