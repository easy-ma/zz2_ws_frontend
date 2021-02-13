import { Container, Button, Heading, VStack } from "@chakra-ui/react";
import RLink from "../components/ui/links/routerLink";
import { Field, Form, Formik } from "formik";
import ControlInput from "../components/ui/form/controlInput";
import PasswordInput from "../components/ui/form/passwordInput";
import ErrorBox from "../components/ui/form/errorBox";
import * as Yup from "yup";

const initValues = {
  email: "",
  password: "",
};

const SignInPage = () => {
  return (
    <Container bg="telegram.100" borderRadius={10} p={10} w="full" maxW="xl">
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
            <VStack>
              <Button type="submit" variant="outline" isLoading={isSubmitting}>
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
  );
};

export default SignInPage;
