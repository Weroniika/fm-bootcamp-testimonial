import styled from "styled-components";
import PatterCurveSvg from "../../assets/pattern-curve.svg";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 24px;
  background: url(${PatterCurveSvg}) bottom left/70% no-repeat;
  box-sizing: border-box;
`;
