//NATIVE
import { useEffect, useState } from "react";
//LIBRARIES
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
//COMPONENTS
import BaseButton from "../shared/buttons/base-button";
import { LoginAPI } from "../../services/register";
//STYLES
import * as S from "./styles";
import { EyeFill, EyeSlashFill } from "@styled-icons/bootstrap";
//UTILS
import { FORM_MESSAGE } from "../../utils/enums/form-message";
import { useUserContext } from "../../hooks/use-user-context";

const loginFormSchema = z.object({
  email: z
    .string()
    .min(6, FORM_MESSAGE.EMAIL)
    .email(FORM_MESSAGE.EMAIL_FORMAT)
    .toLowerCase(),
  password: z.string().min(8, FORM_MESSAGE.PASSWORD_SIZE),
  remember: z.boolean().default(false),
});

type loginFormData = z.infer<typeof loginFormSchema>;

const LoginForm = () => {
  const { updateUser } = useUserContext();
  const [passwordIsOpen, setPasswordIsOpen] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<loginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const handleLogin = async (data: loginFormData) => {
    const { remember, ...restData } = data;

    remember ? handleLocalStorage(data.email) : handleLocalStorage();

    const result = await LoginAPI(restData);

    if (result.success && result.user?.token) {
      const { token, ...userData } = result.user;
      updateUser(userData, token);
      console.log(userData);
      navigate("/user");
    } else {
      console.log("Deu ruim!");
    }
  };

  const handleLocalStorage = (email?: string) => {
    if (email) {
      localStorage.setItem("candy-store-remembered-email", email);
    } else {
      localStorage.removeItem("candy-store-remembered-email");
    }
  };

  const handlePassword = () => {
    setPasswordIsOpen(!passwordIsOpen);
  };

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("candy-store-remembered-email");

    if (rememberedEmail) {
      setValue("remember", true);
      setValue("email", rememberedEmail);
    }
  }, []);

  return (
    <S.LoginFormStyle onSubmit={handleSubmit(handleLogin)}>
      <S.BaseTitleFormStyle>Login</S.BaseTitleFormStyle>
      <div className="first-section">
        <label htmlFor="email" hidden>
          E-mail
        </label>
        <S.BaseInputFormStyle
          {...register("email")}
          type="text"
          placeholder="Email"
          error={errors.email ? true : false}
        />
        {errors.email && (
          <S.BaseSmallFormStyle>{errors.email.message}</S.BaseSmallFormStyle>
        )}
      </div>
      <S.PasswordSectionFormStyle>
        <label htmlFor="password" hidden>
          Senha
        </label>
        <S.BaseInputFormStyle
          {...register("password")}
          type={passwordIsOpen ? "text" : "password"}
          placeholder="Senha"
          error={errors.password ? true : false}
        />
        <div onClick={() => handlePassword()}>
          {passwordIsOpen ? <EyeFill /> : <EyeSlashFill />}
        </div>
        {errors.password && (
          <S.BaseSmallFormStyle>{errors.password.message}</S.BaseSmallFormStyle>
        )}
      </S.PasswordSectionFormStyle>
      <div className="second-section">
        <label htmlFor="remember">Lembrar</label>
        <S.BaseCheckboxFormStyle {...register("remember")} type="checkbox" />
      </div>
      <BaseButton type="submit">ENTRAR</BaseButton>
    </S.LoginFormStyle>
  );
};

export default LoginForm;
