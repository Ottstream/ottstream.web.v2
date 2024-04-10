import React from 'react';

import { Input, Select } from 'antd';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import countryCodes from '@/data/countyCodes';

const { Option } = Select;

const PhoneNumberInput = () => {
  const AllOptions = countryCodes.map(country => ({
    value: country.code,
    label: country.name,
  }));

  const validationSchema = Yup.object().shape({
    countryCode: Yup.string().required('Country is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const handleSubmit = (values, { setSubmitting }) => {
    // handle form submission here
    setSubmitting(false);
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const handleCountryChange = (value, setFieldValue) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const country = countryCodes.find(country => country.code === value);
    if (country) {
      setFieldValue('countryCode', country.code);
      setFieldValue(
        'phoneNumber',
        `${country.dial_code}${value.phoneNumber || ''}`,
      );
    }
  };

  return (
    <Formik
      initialValues={{ countryCode: '', phoneNumber: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ isSubmitting, setFieldValue }) => (
        <Form>
          <Field name="countryCode">
            {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
            {/*@ts-expect-error*/}
            {({ field }) => (
              <Select
                {...field}
                showSearch
                style={{ width: 200 }}
                placeholder="Select a country"
                optionFilterProp="children"
                onChange={value => handleCountryChange(value, setFieldValue)}
                options={AllOptions}>
                {AllOptions.map(option => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            )}
          </Field>
          <ErrorMessage name="countryCode" component="div" className="error" />

          <Field name="phoneNumber">
            {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
            {/*@ts-expect-error*/}
            {({ field }) => (
              <Input
                {...field}
                style={{ width: 200 }}
                placeholder="Phone number"
              />
            )}
          </Field>
          <ErrorMessage name="phoneNumber" component="div" className="error" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PhoneNumberInput;
