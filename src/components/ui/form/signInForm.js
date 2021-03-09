import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { Container, Text, Button, Heading, VStack,useToast } from "@chakra-ui/react";
import ControlInput from "./items/controlInput";
import PasswordInput from "./items/passwordInput";
import ErrorBox from "./items/errorBox";
import RLink from "../links/routerLink";
import { useHistory, useLocation } from "react-router-dom";
import Requester from "../../../Requester";
import { useAuth } from "../../../helpers/auth";

const initValues = {
  email: "",
  password: "",
};

const SignInForm = (props) => {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const toast = useToast();
  return (
    <>
      <Container {...props} p={10} w="full" maxW="lg">
        <Heading textAlign="center">Sign In</Heading>

        <Formik
          initialValues={initValues}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={async (values, actions) => {
            const res = await Requester.post("/auth/sign-in", values);
            if (res.success === true) {
              toast({
                title: "You successfully signed in",
                description: "You can now use all the user's feature",
                status: "success",
                duration: 7000,
                isClosable: true,
              })
              actions.setSubmitting(true);
              auth.signin(res.data.token, () => {
                history.replace(from);
              });
              actions.resetForm();
            } else {
              toast({
                title: "We could not sign you up",
                description: res?.data?.message,
                status: "error",
                duration: 7000,
                isClosable: true,
              })
              actions.setSubmitting(false);
              actions.resetForm();
            }
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
                    label="Email"
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
