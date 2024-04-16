import { Button, Input, Select } from '@/components';
import { Formik } from 'formik';
import { StyledForm } from '../../styles/Filter.styles';
import React from 'react';
import { paymentOptions, statusOptions, typeOptions } from '../../constants';

const initialValues: any = {
  search: '',
  type: null,
  payment: null,
  status: null,
};

const FilterByProperties: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      //   validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}>
      {({ values, handleChange, handleBlur }) => {
        return (
          <StyledForm>
            <Input
              type="text"
              name="search"
              value={values.search}
              tooltip={
                'Search by client Name, Surname, Login, Address, Phone Number.'
              }
              onChange={handleChange('search')}
              onBlur={handleBlur('search')}
              placeholder="Search"
              label="Search"
            />
            <Select
              label="Type"
              name="type"
              placeholder="Type"
              onChange={handleChange('type')}
              options={typeOptions}
            />
            <Select
              label="Payment"
              name="payment"
              onChange={handleChange('payment')}
              placeholder="Payment"
              options={paymentOptions}
            />
            <Select
              label="Status"
              name="status"
              onChange={handleChange('status')}
              placeholder="Payment"
              options={statusOptions}
            />
            <Button variant="gradient">Filter</Button>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default FilterByProperties;
