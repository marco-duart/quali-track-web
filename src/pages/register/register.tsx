import RegisterForm from "../../components/forms/register-form";
import RegisterCard from "../../components/shared/cards/register-card";
import * as S from "./styles";

const Register = () => {
  return (
    <>
      <S.RegisterPageStyle>
        <RegisterCard>
          <S.CandyStoreLogoStyle>
          </S.CandyStoreLogoStyle>
          <RegisterForm />
        </RegisterCard>
      </S.RegisterPageStyle>
    </>
  );
};

export default Register