import React, { useState } from "react";
import { Field, Form, Formik, validateYupSchema } from "formik";
import {
  Button,
  VStack,
  Input,
  Box,
  FormControl,
  VisuallyHidden,
} from "@chakra-ui/react";
import ErrorBox from "./items/errorBox";
import ControlInput from "./items/controlInput";
import TextAreaInput from "./items/textAreaInput";
import * as Yup from "yup";
import Rating from "../advices/Ratings/rating";

const AddCommenForm = (props) => {
  const initValues = {};
  const [rating, setRating] = useState(0);
  return (
    <Box w="full" p={20}>
      <Formik
        initialValues={{ title: "", description: "", rate: rating }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          description: Yup.string().required("Description is required"),
          //   rate: Yup.string().required("rate"),
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            values.rate = rating;
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

            <Field name="title">
              {({ field, form }) => (
                <ControlInput
                  {...field}
                  value={values.title}
                  label="Title"
                  id="title"
                  placeholder="Enter your title"
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
                  type="description"
                  placeholder="Enter your description"
                  onChange={handleChange}
                />
              )}
            </Field>
            <Rating
              size={48}
              icon="star"
              scale={5}
              fillColor="gold"
              strokeColor="grey"
              rating={rating}
              onChange={(rate) => {
                setRating(rate);
              }}
            />
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

export default AddCommenForm;
