import React, { useState } from 'react';

import { FileOutlined, SendOutlined, SmileOutlined } from '@ant-design/icons';
import { Input, Upload } from 'antd';

import Icon from '@/components/Icon';
import ChatAvatar from 'Pages/Chat/Components/ChatAvatar';
import useHandleMessage from 'Pages/Chat/Hooks/useHandleMessage';
import MainPanelBlockedFooter from 'Pages/Chat/Sections/MainPanel/Components/MainPanelBlockedFooter';
import {
  MainPanelChatIcon,
  MainPanelFooterWrapper,
} from 'Pages/Chat/Sections/MainPanel/MainPanel.styles';

const MainPanelFooter = () => {
  const {
    inputValue,
    isTyping,
    handleSend,
    handleInputChange,
    handleFileUpload,
  } = useHandleMessage();
  const [isBlocked, setIsBlocked] = useState(false);
  return (
    <>
      <MainPanelFooterWrapper>
        {isBlocked ? (
          <>
            <MainPanelBlockedFooter />
          </>
        ) : (
          <>
            <div className={'input-container'}>
              <Upload onChange={handleFileUpload} showUploadList={false}>
                <MainPanelChatIcon
                  size={'small'}
                  icon={<Icon name="attach" size={16} />}
                  ghost
                />
              </Upload>

              <MainPanelChatIcon
                size={'small'}
                icon={<Icon name="emoji" size={16} />}
                ghost
              />

              <Input
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type a message..."
                prefix={<></>}
                suffix={<></>}
                onPressEnter={handleSend}
                style={{ marginLeft: 8, marginRight: 8, flex: 1 }}
              />

              <MainPanelChatIcon
                icon={<Icon name="viber" size={16} />}
                ghost
                onClick={handleSend}
              />
            </div>
            <div className={'typing-user-wrapper'}>
              {isTyping && (
                <div className={'typing-user-wrapper'}>
                  <div className={'typing-avatar-wrapper'}>
                    <ChatAvatar type={'OnlyAvatar'} index={2} size={'small'} />
                  </div>
                  <p>Loya is typing...</p>
                </div>
              )}
            </div>
          </>
        )}
      </MainPanelFooterWrapper>
    </>
  );
};

export default MainPanelFooter;
