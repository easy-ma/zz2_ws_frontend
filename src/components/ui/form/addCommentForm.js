import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { Button, VStack, Box, useToast } from "@chakra-ui/react";
import ErrorBox from "./items/errorBox";
import ControlInput from "./items/controlInput";
import TextAreaInput from "./items/textAreaInput";
import * as Yup from "yup";
import Rating from "../ratesAndComments/rating/rating";
import requester from "../../../Requester";
import { useHistory, useLocation } from "react-router-dom";

const AddCommenForm = ({ adId }) => {
  const initValues = {};
  const toast = useToast();
  const [rating, setRating] = useState(0);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  return (
    <Box w="full" p={20}>
      <Formik
        initialValues={{ title: "", comment: "", rate: rating, adId }}
        validationSchema={Yup.object({
          title: Yup.string().min(5).max(50).required("Title is required"),
          comment: Yup.string().min(10).max(200),
          // rate: Yup.number().required("Rate is required"),
        })}
        onSubmit={(values, actions) => {
          values.rate = rating;
          requester.post("/rates", values, true).then((res) => {
            if (res.success === true) {
              toast({
                title: "Comment created.",
                description: "Your comment has been successfully created.",
                status: "success",
                duration: 7000,
                isClosable: true,
              });
              actions.setSubmitting(true);
              actions.resetForm();
              history.replace(from);
            } else {
              toast({
                title: "Comment could not be created",
                description: "You should try again later.",
                status: "error",
                duration: 7000,
                isClosable: true,
              });
              actions.setSubmitting(false);
            }
          });
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
                  isInvalid={form.errors.title && form.touched.title}
                  label="Title"
                  id="title"
                  type="text"
                  placeholder="Enter your title"
                  onChange={handleChange}
                />
              )}
            </Field>
            <Field name="comment">
              {({ field, form }) => (
                <TextAreaInput
                  {...field}
                  value={values.comment}
                  isInvalid={form.errors.comment && form.touched.comment}
                  label="Comment"
                  id="comment"
                  type="text"
                  placeholder="Enter your comment"
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
