import "./Form.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = (props) => {
  const schema = yup.object().shape({
    fullName: yup
      .string("* Your name must be a string")
      .required("* Full Name is required"),
    email: yup
      .string("* Your email must be a string")
      .email("* Please enter a valid email")
      .required("* Email is required"),
    age: yup

      .number("* Age should be a number")
      .typeError("* Please enter your age")
      .integer("* Your age must be a integer")
      .min(18, "* You must be at least 18 years old")
      .required("* Age is required"),
    password: yup
      .string("* Your password must be a string")
      .min(8, "* Your password must contain at least 8 characters")
      .max(25, "* Your password can contain maximum of 25 characters")
      .required("* Password is required"),
    confirmPassword: yup
      .string("* Your password must be a string")
      .oneOf([yup.ref("password")], "* Passwords do not match")
      .required("* Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = () => {
    props.setSuccess(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="* Full Name"
          {...register("fullName")}
        />
        <span>{errors.fullName?.message}</span>
        <input type="text" placeholder="* Email" {...register("email")} />
        <span>{errors.email?.message}</span>
        <input type="number" placeholder="* Age" {...register("age")} />
        <span>{errors.age?.message}</span>
        <input
          type="password"
          placeholder="* Password"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>
        <input
          type="password"
          placeholder="* Confirm Password"
          {...register("confirmPassword")}
        />
        <span>{errors.confirmPassword?.message}</span>
        <div className="seperator"></div>
        <input type="submit" />
      </form>
    </>
  );
};
