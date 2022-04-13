import * as SC from "./ButtonsWrapper.styled";
import { Button } from "../Button/Button";
import { ReactComponent as NextIcon } from "../../assets/icon-next.svg";
import { ReactComponent as PrevIcon } from "../../assets/icon-prev.svg";
import { useSliderContext } from "../../context/SliderContext";

export const ButtonsWrapper = () => {
  const { goToNextPicture, goToPrevPicture } = useSliderContext();

  return (
    <SC.ButtonsWrapper>
      <Button onClick={goToPrevPicture}>
        <PrevIcon />
      </Button>
      <Button onClick={goToNextPicture}>
        <NextIcon />
      </Button>
    </SC.ButtonsWrapper>
  );
};
