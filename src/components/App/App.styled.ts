import styled from "styled-components";
import PatterCurveSvg from "../../assets/pattern-curve.svg";

export const Container = styled.div`
  position: relative;
  max-height: 100vh;
  padding-top: 24px;
  background: url(${PatterCurveSvg}) bottom left no-repeat;
  background-size: 50%;
  overflow: hidden;
  box-sizing: border-box;
`;
