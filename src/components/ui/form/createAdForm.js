import React from "react";
import { Field, Form, Formik } from "formik";
import { Button, VStack, Box, useToast } from "@chakra-ui/react";
import ErrorBox from "./items/errorBox";
import ControlInput from "./items/controlInput";
import TextAreaInput from "./items/textAreaInput";
import * as Yup from "yup";
import Requester from "../../../Requester";

const initValues = {
  name: "",
  address: "",
  description: "",
  price: "",
  imageURL: "",
};
const CreateAdForm = (props) => {
  const toast = useToast();
  return (
    <Box w="full" p={20}>
      <Formik
        initialValues={initValues}
        validationSchema={Yup.object({
          name: Yup.string().min(3).max(50).required("Name is required"),
          description: Yup.string()
            .min(10)
            .max(200)
            .required("Description is required"),
          address: Yup.string().required("Adress is required."),
          price: Yup.number()
            .typeError("Price must be a positive number")
            .positive("Price must be positive")
            .required("Price is required"),
          imageURL: Yup.string()
            .matches(
              /^(https?:)?\/\/?[^'" <>]+?\.(jpg|jpeg|gif|png)$/,
              "Url must be valide and lead to an image"
            )
            .required("Image URL is required"),
        })}
        onSubmit={async (values, actions) => {
          const res = await Requester.post("/ads", values, true);
          if (res.success === true) {
            toast({
              title: "Ad created.",
              description: "Your ad has been successfully created.",
              status: "success",
              duration: 7000,
              isClosable: true,
            });
            actions.setSubmitting(true);
            actions.resetForm();
          } else {
            toast({
              title: "Ad could not be created",
              description: "You should try again later.",
              status: "error",
              duration: 7000,
              isClosable: true,
            });
            actions.setSubmitting(false);
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

            <Field name="name">
              {({ field, form }) => (
                <ControlInput
                  {...field}
                  value={values.name}
                  isInvalid={form.errors.name && form.touched.name}
                  label="Name"
                  id="name"
                  placeholder="Enter the name"
                  onChange={handleChange}
                />
              )}
            </Field>

            <Field name="address">
              {({ field, form }) => (
                <ControlInput
                  {...field}
                  value={values.address}
                  isInvalid={form.errors.address && form.touched.address}
                  label="Address"
                  id="address"
                  type="text"
                  placeholder="Enter your address"
                  onChange={handleChange}
                />
              )}
            </Field>
            <Field name="price">
              {({ field, form }) => (
                <ControlInput
                  {...field}
                  value={values.price}
                  label="Price"
                  id="price"
                  isInvalid={form.errors.price && form.touched.price}
                  type="text"
                  placeholder="Enter the price"
                  onChange={handleChange}
                />
              )}
            </Field>
            <Field name="imageURL">
              {({ field, form }) => (
                <ControlInput
                  {...field}
                  value={values.imageURL}
                  label="Image URL"
                  id="imageURL"
                  isInvalid={form.errors.imageURL && form.touched.imageURL}
                  type="text"
                  placeholder="Enter the imageURL"
                  onChange={handleChange}
                />
              )}
            </Field>
            <Field name="description">
              {({ field, form }) => (
                <TextAreaInput
                  {...field}
                  value={values.description}
                  label="Description"
                  id="description"
                  isInvalid={
                    form.errors.description && form.touched.description
                  }
                  type="text"
                  placeholder="Enter your description"
                  onChange={handleChange}
                />
              )}
            </Field>
            <VStack>
              <Button type="submit" isLoading={isSubmitting}>
                Submit
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateAdForm;
