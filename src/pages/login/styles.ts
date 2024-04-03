import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginPageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #FFE3E3;
  background-position: 50% 0;
  display: grid;
  place-items: center;
`;

export const CandyStoreLogoStyle = styled.div`
  position: absolute;
  width: 200px;
  left: 50%;
  margin-left: -275px;
  top: -150px;
`

export const FooterLoginPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LinkLoginPageStyle = styled(Link)`
  font-size: ${props => props.theme.fontSizes.xsm};
`