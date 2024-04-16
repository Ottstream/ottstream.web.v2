import { InstallerImage, ViewsToolbar } from '../styles/Appointment.styles';
import { TViewToolbar } from '../types/types';

const ViewToolbar = ({ color, name }: TViewToolbar) => {
  return (
    <ViewsToolbar>
      {name ? (
        <>
          <InstallerImage
            color={color}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <span>{name}</span>
        </>
      ) : null}
    </ViewsToolbar>
  );
};

export default ViewToolbar;
