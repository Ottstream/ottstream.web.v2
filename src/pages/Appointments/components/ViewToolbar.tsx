import { InstallerImage, ViewsToolbar } from '../styles/Appointment.styles';
import { TViewToolbar } from '../types/types';

const ViewToolbar = ({
  color,
  name,
  shouldHaveMoreHeight = false,
}: TViewToolbar) => {
  return (
    <ViewsToolbar shouldHaveMoreHeight={shouldHaveMoreHeight}>
      {name ? (
        <>
          <InstallerImage
            color={color}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <span>{name}</span>
        </>
      ) : (
        <>
          <div
            style={{ height: shouldHaveMoreHeight ? '100px' : '200px' }}></div>
        </>
      )}
    </ViewsToolbar>
  );
};

export default ViewToolbar;
