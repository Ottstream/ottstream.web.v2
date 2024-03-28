import React, { useState } from 'react';

import { FileOutlined, SendOutlined, SmileOutlined } from '@ant-design/icons';
import { Input, message, Upload } from 'antd';

import ChatAvatar from 'Pages/Chat/Components/ChatAvatar';
import {
  MainPanelChatIcon,
  MainPanelFooterWrapper,
} from 'Pages/Chat/Sections/MainPanel/MainPanel.styles';

const MainPanelFooter = () => {
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSend = () => {
    // Implement sending message logic here
    console.log('Sending message:', inputValue);
    setInputValue('');
  };

  const handleFileUpload = (info: any) => {
    // Implement file upload logic here
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <>
      <MainPanelFooterWrapper>
        <div className={'input-container'}>
          <Upload onChange={handleFileUpload} showUploadList={false}>
            <MainPanelChatIcon size={'small'} icon={<FileOutlined />} ghost />
          </Upload>

          <MainPanelChatIcon size={'small'} icon={<SmileOutlined />} ghost />

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
            icon={<SendOutlined />}
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
      </MainPanelFooterWrapper>
    </>
  );
};

export default MainPanelFooter;
