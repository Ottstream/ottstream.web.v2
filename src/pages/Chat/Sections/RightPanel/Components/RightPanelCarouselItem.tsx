import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Badge as AntBadge, Layout } from 'antd';
import styled from 'styled-components';

import ChatIcon from 'Pages/Chat/Components/ChatIcon';

const Badge = styled(AntBadge)`
  margin: 0 10px;
`;

const RightPanelCarouselItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;

    .item-name {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      text-align: center;
      border: 1px solid #05afb7;
      border-radius: 8px;
      padding: 10px 20px;
    }
  }
  .status {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #012f57;
  }

  .info {
    margin: 20px 0 10px 0;
    background-color: #f5f6f8;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 8px;
    p {
      margin: 5px 0;
      font-size: 12px;
    }
    .secondary-text {
      color: #7a7a7a;
    }
  }
`;

interface RightPanelCarouselItemPropsI {
  next: () => void;
  prev: () => void;
  text: string;
}
const RightPanelCarouselItem = ({
  next,
  prev,
  text,
}: RightPanelCarouselItemPropsI) => {
  return (
    <>
      <RightPanelCarouselItemWrapper>
        <div className={'header'}>
          <ChatIcon onClick={prev} icon={<LeftOutlined />} ghost />
          <div className={'item-name'}>
            <p>{text}</p>
          </div>
          <ChatIcon onClick={next} icon={<RightOutlined />} ghost />
        </div>
        <div className={'status'}>
          <div>
            <Badge dot color={'#FAAD14'} />
          </div>
          <p>Pending 11/22/23 16:30</p>
        </div>
        <div className={'info'}>
          <div>
            <p>Package name</p>
            <p className={'secondary-text'}>Base ++</p>
          </div>
          <div>
            <p>Expiration date</p>
            <p className={'secondary-text'}>1/20/2024 12:34 PM</p>
          </div>
        </div>
      </RightPanelCarouselItemWrapper>
    </>
  );
};

export default RightPanelCarouselItem;
