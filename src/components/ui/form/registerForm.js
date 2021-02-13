import React from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { Container, Button, Heading, VStack, Text } from "@chakra-ui/react";
import PasswordInput from "./items/passwordInput";
import ErrorBox from "./items/errorBox";
import ControlInput from "./items/controlInput";
import RLink from "../links/routerLink";

const initValues = {
  email: "",
  username: "",
  password: "",
  confirmedPassword: "",
};

const RegisterForm = (props) => {
  return (
    <>
      <Container {...props} p={10} w="full" maxW="lg">
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
                    type="password"
                    placeholder="Confirm password"
                    onChange={handleChange}
                  />
                )}
              </Field>
              <VStack>
                <Button type="submit" isLoading={isSubmitting}>
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
      <Text fontSize="xs" textAlign="center" color="gray.600">
        By signing up you agree to our{" "}
        <RLink color="brand.500" to="/terms-of-services">
          Terms of Service
        </RLink>
      </Text>
    </>
  );
};

export default RegisterForm;
