import LoginForm from "../../components/forms/login-form";
import LoginCard from "../../components/shared/cards/login-card";
import * as S from "./styles";

const Login = () => {
  return (
    <>
      <S.LoginPageStyle>
        <LoginCard>
          <S.CandyStoreLogoStyle>
          </S.CandyStoreLogoStyle>
          <LoginForm />
          <S.FooterLoginPageStyle>
            <small>Não tem cadastro?</small>
            <div>
              <S.LinkLoginPageStyle to="/register">Cadastre-se aqui</S.LinkLoginPageStyle>
            </div>
          </S.FooterLoginPageStyle>
        </LoginCard>
      </S.LoginPageStyle>
    </>
  );
};

export default Login