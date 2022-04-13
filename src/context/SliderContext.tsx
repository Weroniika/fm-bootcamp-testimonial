import { createContext, useState, useContext, useEffect } from "react";
import { collection } from "../shared/data";
import { SlideType } from "../shared/types";

export type SliderContextType = {
  currentSlide: SlideType;
  goToNextPicture: () => void;
  goToPrevPicture: () => void;
};

export const SliderContext = createContext<SliderContextType | null>(null);

export const SliderProvider = ({ children }: { children: React.ReactNode }) => {
  const [index, setActiveStep] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<SlideType>(collection[0]);
  const collectionSize = collection.length;

  useEffect(() => {
    setCurrentSlide(getCurrentSlide(index));
  }, [index]);

  const goToNextPicture = (): void => {
    if (index === collectionSize - 1) {
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const goToPrevPicture = (): void => {
    if (index === 0) {
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getCurrentSlide = (index: number): SlideType => {
    return collection[index];
  };

  return (
    <SliderContext.Provider
      value={{ goToNextPicture, goToPrevPicture, currentSlide }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export const useSliderContext = () => {
  const context = useContext(SliderContext);
  if (!context)
    throw new Error("Slider context must be used within a SliderProvider");
  return context;
};
