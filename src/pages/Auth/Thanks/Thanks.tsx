import thanks from '@/assets/images/thanks.svg';
import { Reviewed, WrapperPersonalInformation } from '../Styled';
import styles from './index.module.css';

const Thanks = () => {
  return (
    <WrapperPersonalInformation>
      <img src={thanks} alt="img" />

      <Reviewed>
        <p className={`heading1 ${styles.title}`}> Thank You !</p>
        <p className={`heading3 ${styles.description}`}>
          Please Wait 3-5 Business Days. Your Account Is Being Reviewed By The
          Management. We Appreciate Your Patience!
        </p>
      </Reviewed>
    </WrapperPersonalInformation>
  );
};

export default Thanks;
