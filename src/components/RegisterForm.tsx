'use client'

import { supabase } from "@/app/Auth/supabase";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { Dots } from "react-activity";
import "react-activity/dist/library.css";
import { useState } from "react";
import Alert from "@mui/material/Alert"
function RegisterForm() {
  // router
  const Router = useRouter();


  //states
  const [spinner, setSpinner]= useState(false)
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  const onSubmit = (values: any) => {
    setSpinner(true)
    // Handle form submission here
    supabase.auth
      .signUp({
        email: values.email,
        password: values.password,
        options: { data: { username: values.username } },
      })
      .then((values: any) => {
        console.log(values);
        if (values.data.user.aud === "authenticated") {
          alert("sucessfully submitted, Check your  email for verification")
          setSpinner(false)
          Router.push("/");

        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(values.password);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col">
            <Field
              type="text"
              id="username"
              name="username"
              className="border-b h-12"
              placeholder="Username"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="error text-red-500"
            />
          </div>

          <div className="flex flex-col">
            <Field
              type="email"
              id="email"
              name="email"
              className="border-b h-12"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error text-red-500"
            />
          </div>

          <div className="flex flex-col">
            <Field
              type="password"
              id="password"
              name="password"
              className="border-b h-12"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error text-red-500"
            />
          </div>

          <div className="flex flex-col">
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="border-b h-12"
              placeholder="Confirm Password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error text-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#8C7E7E] h-14 rounded-[30px] text-base text-white"
          >
            {spinner?<Dots color="white" size={24} speed={1} animating={true} />:"Submit"}
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default RegisterForm;
