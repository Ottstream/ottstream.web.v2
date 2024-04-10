import { eventStatuses } from '../constants';
import { EventBadge } from '../styles/Appointment.styles';
import { EventStatuses, TEventComponent } from '../types/types';

export const EventComponent = (props: TEventComponent) => {
  const {
    event: { status = 'Default' },
  } = props;
  const eventStatus = eventStatuses[status];

  return (
    <EventBadge
      status={eventStatus as EventStatuses}
      dot={true}
      text={<span style={{ fontSize: '12px' }}>{status}</span>}
    />
  );
};
