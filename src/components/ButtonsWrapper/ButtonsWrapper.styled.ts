import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  z-index: 1;
  width: 80px;
  height: 40px;
  background: white;
  box-shadow: 0px 15px 20px -10px rgba(36, 36, 113, 0.0991313);
  border-radius: 28px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 1168px) {
    width: 112px;
    height: 56px;
  }
`;