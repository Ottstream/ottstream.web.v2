import { useState, useMemo } from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { Navigate, ToolbarProps } from 'react-big-calendar';
import {
  Typography,
  Badge,
  Button,
  DatePicker,
  Flex,
  Radio,
  Divider,
} from 'antd';

import Icon from '@/components/Icon';
import { Toolbar } from '../styles/Appointment.styles';
import { View } from '../types/types';
import { useAppDispatch } from '@/store/hooks';
import { appointmentDispatcher } from '../services/appointmentSlice';

const { Text } = Typography;

const CustomToolbar = (props: ToolbarProps) => {
  const { label, view, onView, onNavigate, date } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [viewState, setViewState] = useState('month');
  const [navigation, setNavigation] = useState('today');
  const { openFilterSection } = appointmentDispatcher(dispatch);

  const goToDayView = () => {
    onView(View.day);
    setViewState(View.day);
  };
  const goToWeekView = () => {
    onView(View.week);
    setViewState(View.week);
  };
  const goToWorkWeekView = () => {
    onView(View.work_week);
    setViewState(View.work_week);
  };
  const goToMonthView = () => {
    onView(View.month);
    setViewState(View.month);
  };

  const goToBack = () => {
    onNavigate(Navigate.PREVIOUS);
  };

  const goToNext = () => {
    onNavigate(Navigate.NEXT);
  };

  const goToToday = () => {
    onNavigate(Navigate.TODAY);
  };

  const goToSpecificDate = (newDate: Date) => {
    onNavigate(Navigate.DATE, new Date(newDate));
  };

  const fomatDateLabel: String = useMemo(() => {
    if (view === View.month || view === View.day) {
      return moment(date).format('MMMM Do YYYY');
    }
    if (view === View.work_week) {
      return `${moment(date).startOf('week').day(1).format('MMMM Do YYYY')} - ${moment(date).startOf('week').day(5).format('MMMM Do YYYY')}`;
    }
    if (view === View.week) {
      return `${moment(date).startOf('week').format('MMMM Do YYYY')} - ${moment(date).endOf('week').format('MMMM Do YYYY')}`;
    }
    return '';
  }, [label, date]);

  return (
    <>
      <Toolbar>
        <Flex justify="space-between">
          <div className="picker">
            <DatePicker
              onChange={goToSpecificDate}
              allowClear={false}
              suffixIcon={<Icon name="datepicker" size={24} />}
            />
            <Text>{fomatDateLabel}</Text>
          </div>
          <Flex className="actions" align="center" gap={'8px'}>
            <Button
              onClick={() =>
                openFilterSection({
                  title: 'select_installers',
                  componentName: 'installers',
                })
              }>
              <Icon name="installers" />
              {t('installers')}
              <Badge className="badge" count={5} />
            </Button>
            <Button>
              <Icon name="history" />
              {t('history')}
            </Button>
            <Button
              onClick={() =>
                openFilterSection({ title: '', componentName: 'map' })
              }>
              <Icon name="map" />
              {t('map')}
            </Button>
            <Button
              onClick={() =>
                openFilterSection({
                  title: 'filter_by',
                  componentName: 'filter',
                })
              }>
              <Icon name="filter" />
              {t('filter')}
            </Button>
          </Flex>
        </Flex>
        <Divider />
        <Flex justify="space-between" className="views">
          <Radio.Group
            value={navigation}
            onChange={e => setNavigation(e.target.value)}>
            <Radio.Button value="today" onClick={goToToday}>
              {t('today')}
            </Radio.Button>
            <Radio.Button value="prev" onClick={goToBack}>
              {t('back')}
            </Radio.Button>
            <Radio.Button value="next" onClick={goToNext}>
              {t('next')}
            </Radio.Button>
          </Radio.Group>
          <Radio.Group
            value={viewState}
            onChange={e => setViewState(e.target.value)}>
            <Radio.Button value="month" onClick={goToMonthView}>
              {t('month')}
            </Radio.Button>
            <Radio.Button value="week" onClick={goToWeekView}>
              {t('week')}
            </Radio.Button>
            <Radio.Button value="work_week" onClick={goToWorkWeekView}>
              {t('work_week')}
            </Radio.Button>
            <Radio.Button value="day" onClick={goToDayView}>
              {t('day')}
            </Radio.Button>
          </Radio.Group>
        </Flex>
      </Toolbar>
    </>
  );
};

export default CustomToolbar;
