import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { Container, Text, Button, Heading, VStack } from "@chakra-ui/react";
import ControlInput from "./items/controlInput";
import PasswordInput from "./items/passwordInput";
import ErrorBox from "./items/errorBox";
import RLink from "../links/routerLink";

const initValues = {
  email: "",
  password: "",
};

const SignInForm = (props) => {
  return (
    <>
      <Container {...props} p={10} w="full" maxW="lg">
        <Heading textAlign="center">Sign In</Heading>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string().required("Password is required"),
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
              <VStack>
                <Button type="submit" isLoading={isSubmitting}>
                  Submit
                </Button>
                <RLink to="/register" fontSize="small">
                  Create an account
                </RLink>
              </VStack>
            </Form>
          )}
        </Formik>
      </Container>
      <Text fontSize="xs" textAlign="center" color="gray.600">
        <RLink color="brand.500" to="/terms-of-services">
          Terms of Service
        </RLink>
      </Text>
    </>
  );
};

export default SignInForm;
