import styled from "styled-components";
import bgPattern from "../../assets/pattern-bg.svg"
import patternQuotesSvg from "../../assets/pattern-quotes.svg";

export const SlideWrapper = styled.div`
  background: url(${bgPattern}) top center no-repeat;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  padding: 64px 60px 84px 60px;
  background-size: contain;
  transition: ease all .5s;
  justify-items: center;


  @media (min-width: 778px) {
    grid-template-columns: 1fr 1fr;
    background-position: top right;
    background-size: 50%;
    align-items: flex-start;
  }
`;


export const SlideImageWrapper = styled.div`
  position: relative;
  width: 80%;
  padding-bottom: 80%;
  height: 0;
  display: flex;
  justify-content: center;

  @media (min-width: 778px) {
    order: 2;
  }

`;

export const SlideImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: contain;
  border-radius: 5px;
  box-shadow: 0px 15px 20px -10px rgba(36, 36, 113, 0.0991313);

  @media (min-width: 778px) {
      width: 100%;
  }
`;

export const SlideButtonsWrapper = styled.div`
  position: absolute;
  height: min-content;
  left: 50%;
  bottom: -5%;
  transform: translate(-50%, 0);

  @media (min-width: 778px) {
      left: 22%;
  }
`;

export const SlideTextContent = styled.div`
  display: flex;
  z-index: 3;
  justify-items: flex-start;
  text-align: center;
  flex-direction: column;
  position: relative;
  margin-top: 57px;

  @media (min-width: 778px) {
    margin-top: 67px;
  }

  @media (min-width: 778px) {
    align-self: center;
  }
`;

export const UserDescription = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  position: relative;
  padding-top: 2rem;
  background: url(${patternQuotesSvg}) top center no-repeat;

  @media (min-width: 778px) {
    font-weight: 300;
    font-size: 20;
    line-height: 44px;
    text-align: left;
  }

  @media (min-width: 1128px) {
    font-size: 32px;
  }
`

export const UserInfoUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;

  @media (min-width: 778px) {
    justify-content: flex-start;
    flex-direction: row;
  }
`

export const UserInfoLi = styled.li`
  text-align: center;

  @media (min-width: 778px) {
    text-align: left;
    margin-right: 10px;
  }
`

export const UserName = styled.span`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;

  @media (min-width: 778px) {
    line-height: 38px;
  }

  @media (min-width: 1128px) {
    font-size: 20px;
  }
`

export const UserJob = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #B9B9CE;

  @media (min-width: 778px) {
    font-weight: 500;
    line-height: 38px;
  }
  
  @media (min-width: 1128px) {
    font-size: 20px;
  }
`

