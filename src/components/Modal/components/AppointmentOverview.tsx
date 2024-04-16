import { CalendarEvents } from '@/pages/Appointments/types/types';
import { FlexItem } from '../styles/Appointment.styles';
import { Flex } from 'antd';
import moment from 'moment';

const AppointmentOverview = ({ event }: { event: CalendarEvents }) => {
  const { start, status, end } = event;
  const data = [
    // TODO: change after BE data will be ready
    {
      key: 'Event By:',
      value: 'Super Admin',
      children: [],
    },
    {
      key: 'Equipment Installer:',
      value: 'John Smith',
      children: [],
    },
    {
      key: 'Status:',
      value: status,
      children: [],
    },
    {
      key: 'Status:',
      value: (
        <>
          <p>
            {`${moment(start).format('DD-MM-YYYY')} -> ${moment(end).format('DD-MM-YYYY')}`}
          </p>
          <p>{`${moment(start).format('hh:mm a')} - ${moment(end).format('hh:mm a')}`}</p>
        </>
      ),
      children: [],
    },
    {
      key: 'Type:',
      value: 'Technical',
      children: [],
    },
    {
      key: 'Client:',
      value: 'John Smith',
      children: [],
    },
    {
      key: 'Client Phones:',
      value: <p style={{ color: '#0C99A8' }}>{'+374 99 140791'}</p>,
      children: [],
    },
    {
      key: 'Client Address:',
      value: (
        <>
          <p>Viktor H 1 12</p>
          <p>Moscov dzc 002 RU</p>
        </>
      ),
      children: [],
    },
    {
      key: 'Location:',
      value: '',
      children: [
        {
          key: 'Name:',
          value: 'Home',
        },
        {
          key: 'Login:',
          value: '451545121',
        },
        {
          key: 'Password:',
          value: '6523256423',
        },
        {
          key: 'Rooms:',
          value: '1',
        },
      ],
    },
    {
      key: 'Connections:',
      value: '-',
      children: [],
    },
    {
      key: 'Payment Type:',
      value: 'Paid',
      children: [],
    },
    {
      key: 'Expected pay:',
      value: '$100',
      children: [],
    },
    {
      key: 'Actual pay:',
      value: '-',
      children: [],
    },
    {
      key: 'Comments:',
      value: (
        <>
          <p>Super Admin</p>
          <p>02-09-2023 09:06 am </p>
          <p>4545</p>
        </>
      ),
      children: [],
    },
  ];
  return data.map(item => (
    <Flex gap={4} key={item.key}>
      <FlexItem width="183">{item.key}</FlexItem>
      <FlexItem width="273">
        {item.value}
        {item.children.length > 0
          ? item.children.map(children => (
              <Flex key={children.key}>
                <span style={{ width: '85px' }}>{children.key}</span>
                <span>{children.value}</span>
              </Flex>
            ))
          : null}
      </FlexItem>
    </Flex>
  ));
};
export default AppointmentOverview;
