import React from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { Container, Button, Heading, VStack } from "@chakra-ui/react";
import PasswordInput from "../components/ui/form/passwordInput";
import ErrorBox from "../components/ui/form/errorBox";
import ControlInput from "../components/ui/form/controlInput";
import RLink from "../components/ui/links/routerLink";

const initValues = {
  email: "",
  username: "",
  password: "",
  confirmedPassword: "",
};

const RegisterPage = () => {
  return (
    <Container bg="telegram.100" borderRadius={10} p={10} w="full" maxW="xl">
      <Heading textAlign="center">Register</Heading>
      <Formik
        initialValues={initValues}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          username: Yup.string()
            .min(3, "Username min length 3")
            .required("Username is required"),
          password: Yup.string()
            .min(8, "Min length 8")
            .required("Password is required"),

          confirmedPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirmation Required"),
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            actions.setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
            actions.resetForm();
          }, 1000);
        }}
      >
        {({ values, isSubmitting, errors, handleChange, touched }) => (
          <Form>
            <ErrorBox
              names={Object.keys(initValues)}
              errors={errors}
              touched={touched}
            />
            <Field name="username">
              {({ field, form }) => (
                <ControlInput
                  {...field}
                  value={values.username}
                  isInvalid={form.errors.username && form.touched.username}
                  id="username"
                  bg="telegram.50"
                  type="text"
                  placeholder="Enter username"
                  onChange={handleChange}
                />
              )}
            </Field>
            <Field name="email">
              {({ field, form }) => (
                <ControlInput
                  {...field}
                  value={values.email}
                  isInvalid={form.errors.email && form.touched.email}
                  id="email"
                  bg="telegram.50"
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              )}
            </Field>

            <Field>
              {({ field, form }) => (
                <PasswordInput
                  field={field}
                  value={values.password}
                  isInvalid={form.errors.password && form.touched.password}
                  onChange={handleChange}
                />
              )}
            </Field>

            <Field name="confirmedPassword">
              {({ field, form }) => (
                <ControlInput
                  {...field}
                  value={values.confirmedPassword}
                  isInvalid={
                    form.errors.confirmedPassword &&
                    form.touched.confirmedPassword
                  }
                  id="confirmedPassword"
                  bg="telegram.50"
                  type="password"
                  placeholder="Confirm password"
                  onChange={handleChange}
                />
              )}
            </Field>
            <VStack>
              <Button type="submit" variant="outline" isLoading={isSubmitting}>
                Submit
              </Button>
              <RLink fontSize="small" to="/sign-in">
                Sign in
              </RLink>
            </VStack>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RegisterPage;
