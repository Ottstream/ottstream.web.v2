import styled from 'styled-components';

import ChatIcon from 'Pages/Chat/Components/ChatIcon';

const Button = styled(ChatIcon)`
  color: white;
`;
const MainPanelBlockedFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  p {
    color: #a5aac6;
  }
  div {
    margin: 10px 0;
  }
`;

const MainPanelBlockedFooter = () => {
  return (
    <>
      <MainPanelBlockedFooterWrapper>
        <div>
          <p>The user is blocked. You cant send and receive messages.</p>
        </div>
        <div>
          <Button type={'primary'} shape={'default'} danger block={false}>
            Unblock
          </Button>
        </div>
      </MainPanelBlockedFooterWrapper>
    </>
  );
};

export default MainPanelBlockedFooter;
