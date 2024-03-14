import { ChatWrapper } from '@/pages/Chat/index.styles';
import LeftPanel from '@/pages/Chat/Sections/LeftPanel/LeftPanel';
import MainPanel from '@/pages/Chat/Sections/MainPanel/MainPanel';
import RightPanel from '@/pages/Chat/Sections/RightPanel/RightPanel';

const Chat = () => {
  return (
    <>
      <ChatWrapper>
        <LeftPanel />
        {/*<MainPanel />*/}
        {/*<RightPanel />*/}
      </ChatWrapper>
    </>
  );
};

export default Chat;
