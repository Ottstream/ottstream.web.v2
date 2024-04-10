import { SlotInfo } from 'react-big-calendar';
import {
  AddAppointment,
  TimeContainer,
  FormContainer,
} from '../styles/Appointment.styles';
import { DatePicker, Divider, Typography, Flex } from 'antd';
import moment from 'moment';
import Icon from '@/components/Icon';
import { Formik } from 'formik';
import { Input, Select, TextArea } from '@/components';
import {
  paymentOptions,
  statusOptions,
  typeOptions,
} from '@/pages/Appointments/constants';

const AppountmentModal = ({ event }: { event: SlotInfo }) => {
  const { start } = event;

  const initialValues: any = {
    type: null,
    installer: null,
    client: null,
    location: null,
    address: null,
    payment: null,
    price: '',
    status: null,
    start_time: null,
    end_time: null,
    client_address: null,
    latitude: '',
    longitude: '',
    comment: '',
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <AddAppointment>
      <Divider className="divider" />
      <TimeContainer>
        <DatePicker
          showNow={false}
          className="select-date"
          onChange={() => {}}
          allowClear={false}
          suffixIcon={<Icon name="datepicker" size={24} fill="red" />}
        />
        <Typography.Title level={4}>
          {moment(start).format('dddd, MMMM DD')}
        </Typography.Title>
        <Typography.Text>
          02:00 am - 03:00 am
          {/* {moment(start).format('dddd, MMMM DD')} */}
        </Typography.Text>
      </TimeContainer>
      <FormContainer>
        <Formik
          initialValues={initialValues}
          //   validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm();
          }}>
          {({ values, handleChange, handleBlur }) => {
            return (
              <Flex gap={'24px'}>
                <div className="right-side">
                  <Select
                    required
                    label="Type"
                    name="type"
                    className="select"
                    placeholder="Type"
                    onChange={handleChange('type')}
                    options={typeOptions}
                  />
                  <Select
                    required
                    label="Equipment Installer"
                    name="installer"
                    className="select"
                    onChange={handleChange('installer')}
                    placeholder="Equipment Installer"
                    options={paymentOptions}
                  />
                  <Select
                    required
                    label="Client"
                    name="client"
                    className="select"
                    onChange={handleChange('client')}
                    placeholder="Client"
                    options={statusOptions}
                  />
                  <Select
                    required
                    label="Location"
                    name="location"
                    className="select"
                    placeholder="Location"
                    onChange={handleChange('location')}
                    options={typeOptions}
                  />
                  <Select
                    required
                    label="Appartement Or Office Address"
                    name="address"
                    className="select"
                    onChange={handleChange('address')}
                    placeholder="Appartement Or Office Address"
                    options={paymentOptions}
                  />
                  <Flex justify="space-between" gap={'16px'}>
                    <Select
                      required
                      label="Payment"
                      name="payment"
                      className="select"
                      onChange={handleChange('payment')}
                      placeholder="Payment"
                      options={paymentOptions}
                    />
                    <Input
                      className="price"
                      type="text"
                      name="price"
                      value={values.price}
                      onChange={handleChange('price')}
                      onBlur={handleBlur('price')}
                      placeholder="Search"
                      label="Price"
                    />
                    <Select
                      required
                      label="Status"
                      className="select"
                      name="status"
                      onChange={handleChange('status')}
                      placeholder="Payment"
                      options={statusOptions}
                    />
                  </Flex>
                  <Flex gap={'16px'}>
                    <Select
                      label="Start Time"
                      className="select"
                      name="start_time"
                      onChange={handleChange('start_time')}
                      placeholder="Start Time"
                      options={statusOptions}
                    />
                    <Select
                      label="End Time"
                      className="select"
                      name="end_time"
                      onChange={handleChange('end_time')}
                      placeholder="End Time"
                      options={statusOptions}
                    />
                  </Flex>
                </div>
                <div className="left-side">
                  <Select
                    required
                    label="Client Address"
                    name="client_address"
                    className="select"
                    onChange={handleChange('client_address')}
                    placeholder="Client Address"
                    options={statusOptions}
                  />
                  <Flex gap={'16px'}>
                    <Input
                      type="text"
                      className="address"
                      name="latitude"
                      value={values.latitude}
                      onChange={handleChange('latitude')}
                      onBlur={handleBlur('latitude')}
                      placeholder="Latitude"
                      label="Latitude"
                    />
                    <Input
                      type="text"
                      className="address"
                      name="longitude"
                      value={values.longitude}
                      onChange={handleChange('longitude')}
                      onBlur={handleBlur('longitude')}
                      placeholder="Longitude"
                      label="Longitude"
                    />
                  </Flex>

                  <img
                    style={{ margin: '24px 0' }}
                    height="234px"
                    width={'100%'}
                    src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=3511&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                  <TextArea
                    className={'comment'}
                    label="Comment"
                    name="comment"
                    minRows={5}
                    maxRows={5}
                  />
                </div>
              </Flex>
            );
          }}
        </Formik>
      </FormContainer>
    </AddAppointment>
  );
};

export default AppountmentModal;
