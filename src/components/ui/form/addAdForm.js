import React from 'react';
import { Field, Form, Formik } from "formik";
import {  Button, VStack,Box } from "@chakra-ui/react";
import ErrorBox from "./items/errorBox";
import ControlInput from "./items/controlInput";
import TextAreaInput from "./items/textAreaInput";
import * as Yup from "yup";

const AddAdForm = props => {
    const initValues = {

    }
    return (
        <Box w="full" p={20} >

        <Formik
          initialValues={{ title: "", description: "" ,address:"" }}
          validationSchema={Yup.object({
              title: Yup.string()
              .required("Title is required"),
            description: Yup.string().required("Description is required"),
            address: Yup.string().required("Adress is required."),
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
              <Form >
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
             
              <Field name="adress">
                {({ field, form }) => (
                    <ControlInput
                    {...field}
                    value={values.adress}
                    label="Adress"
                    id="Adress"
                    type="Adress"
                    placeholder="Enter your Adress"
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
              <Field name="Images">
                {({ field, form }) => (
                    <ControlInput
                    {...field}
                    value={values.description}
                    label="Images"
                    id="Images"
                    type="file"
                    placeholder="Enter your images"
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


export default AddAdForm;