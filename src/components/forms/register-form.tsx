//NATIVE
import { useState } from "react";

//LIBRARIES
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

//COMPONENTS
import BaseButton from "../shared/buttons/base-button";
import { Register } from "../../services/register";

//STYLES
import * as S from "./styles";
import { EyeFill, EyeSlashFill } from "@styled-icons/bootstrap";

//UTILS
import { FORM_MESSAGE } from "../../utils/enums/form-message";

const regexPassword =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const registerFormSchema = z
  .object({
    email: z
      .string()
      .min(6, FORM_MESSAGE.EMAIL)
      .email(FORM_MESSAGE.EMAIL_FORMAT)
      .toLowerCase(),
    password: z
      .string()
      .min(8, FORM_MESSAGE.PASSWORD_SIZE)
      .regex(regexPassword, FORM_MESSAGE.PASSWORD_RULE),
    confirm: z.string().min(8, FORM_MESSAGE.CONFIRM_PASSWORD),
    photo: z
      .instanceof(FileList)
      .optional()
      .transform((list) => list && list.item(0)),
  })
  .refine((data) => data.password === data.confirm, {
    message: FORM_MESSAGE.PASSWORD_CONFIRM_MATCH,
    path: ["confirm"],
  });

type registerFormData = z.infer<typeof registerFormSchema>;

const RegisterForm = () => {
  const navigate = useNavigate();
  const [passwordIsOpen, setPasswordIsOpen] = useState(false);
  const [confirmIsOpen, setConfirmIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleRegister = async (data: registerFormData) => {
    const { confirm, ...restData } = data;
    const result = await Register(restData);
    if (result.success) {
      navigate("/");
    } else {
      console.log("NOTIFICAÇÃO");
    }
  };

  const handlePassword = (name: "password" | "confirm") => {
    name === "password"
      ? setPasswordIsOpen(!passwordIsOpen)
      : setConfirmIsOpen(!confirmIsOpen);
  };

  return (
    <S.RegisterFormStyle onSubmit={handleSubmit(handleRegister)}>
      <S.BaseTitleFormStyle>Cadastro</S.BaseTitleFormStyle>

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
        <div onClick={() => handlePassword("password")}>
          {passwordIsOpen ? <EyeFill /> : <EyeSlashFill />}
        </div>
        {errors.password && (
          <S.BaseSmallFormStyle>{errors.password.message}</S.BaseSmallFormStyle>
        )}
      </S.PasswordSectionFormStyle>

      <S.PasswordSectionFormStyle className="first-section">
        <label htmlFor="confirm" hidden>
          Confirmar Senha
        </label>
        <S.BaseInputFormStyle
          {...register("confirm")}
          type={confirmIsOpen ? "text" : "password"}
          placeholder="Confirmar Senha"
          error={errors.confirm ? true : false}
        />
        <div onClick={() => handlePassword("confirm")}>
          {confirmIsOpen ? <EyeFill /> : <EyeSlashFill />}
        </div>
        {errors.confirm && (
          <S.BaseSmallFormStyle>{errors.confirm.message}</S.BaseSmallFormStyle>
        )}
      </S.PasswordSectionFormStyle>

      <BaseButton type="submit">CADASTRAR-ME</BaseButton>
    </S.RegisterFormStyle>
  );
};

export default RegisterForm;
