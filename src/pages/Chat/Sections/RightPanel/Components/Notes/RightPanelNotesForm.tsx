import React, { useState } from 'react';

import { Form as AntForm, Button, Input } from 'antd';
import styled from 'styled-components';

import ToggleSwitch from 'Pages/Chat/Components/ToggleSwitch';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const SubmittedData = styled.div`
  margin-top: 20px;
`;

const RightPanelNotesForm = () => {
  const [symbolCount, setSymbolCount] = useState(0);
  const symbolLimit = 2500;

  const handleTextChange = (e: { target: { value: any } }) => {
    const text = e.target.value;
    setSymbolCount(text.length);
  };

  const [form] = Form.useForm();
  const [submittedFormData, setSubmittedFormData] = useState(null);
  const [formValues, setFormValues] = useState(null);

  const onFinish = (formData: unknown) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setSubmittedFormData(formData);
    form.resetFields();
  };

  const onValuesChange = (_: any, allValues: React.SetStateAction<null>) => {
    setFormValues(allValues);
  };

  const isFormValid = () => {
    if (!formValues) return false;
    return Object.keys(formValues).every(
      key => formValues[key] !== undefined && formValues[key] !== '',
    );
  };

  return (
    <FormContainer>
      {submittedFormData && submittedFormData && (
        <SubmittedData>
          <h2>Submitted Data:</h2>
          {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
          {/*@ts-expect-error*/}
          <p>Date: {submittedFormData.date}</p>
          {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
          {/*@ts-expect-error*/}
          <p>Toggle Switch: {submittedFormData.toggle.toString()}</p>
          {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
          {/*@ts-expect-error*/}
          <p>Text Area: {submittedFormData.text}</p>
        </SubmittedData>
      )}
      <h3>Write a note</h3>
      <Form
        form={form}
        layout="vertical"
        onFinish={formData => onFinish(formData)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        onValuesChange={onValuesChange}
        initialValues={{ toggle: false }}>
        <FormItem
          name="text"
          rules={[{ required: false, message: 'Please input some text!' }]}>
          {/*<Input.TextArea rows={4} />*/}
          <Input.TextArea
            autoSize={{ minRows: 3, maxRows: 7 }}
            placeholder="Write a note"
            onChange={handleTextChange}
          />
        </FormItem>
        <SymbolCountWrapper>
          {symbolCount}/{symbolLimit}
        </SymbolCountWrapper>

        <FormItem
          name="sendToggle"
          valuePropName="checked"
          rules={[{ required: false, message: 'Please toggle the switch!' }]}>
          <ToggleSwitch afterText={'Send notification'} />
        </FormItem>

        <FormItem
          name="date"
          rules={[{ required: false, message: 'Please select a date!' }]}>
          <Input type="date" />
        </FormItem>

        <FormItem
          name="time"
          rules={[{ required: false, message: 'Please select a date!' }]}>
          <Input type="time" />
        </FormItem>

        <FormItem
          name="privateToggle"
          valuePropName="checked"
          rules={[{ required: false, message: 'Please toggle the switch!' }]}>
          <ToggleSwitch afterText={'Private notification'} />
        </FormItem>

        <ButtonContainer>
          <Button style={{ marginRight: '10px' }} type="default">
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" disabled={!isFormValid()}>
            Submit
          </Button>
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
};

const Form = styled(AntForm)`
  margin-top: 20px;
`;
const ButtonContainer = styled(Form.Item)`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
`;

const FormItem = styled(Form.Item)`
  margin-bottom: 10px;
`;

const SymbolCountWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  //margin-top: 5px;
  font-size: 12px;
  color: #00000040;
`;

export default RightPanelNotesForm;
