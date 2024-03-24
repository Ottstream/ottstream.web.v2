import React, { useState } from 'react';

import { FileOutlined, SendOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Input, message, Popover, Upload } from 'antd';

import ChatAvatar from 'Pages/Chat/Components/ChatAvatar';
import ChatIcon from 'Pages/Chat/Components/ChatIcon';
import { MainPanelFooterWrapper } from 'Pages/Chat/Sections/MainPanel/MainPanel.styles';

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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '6px',
            border: '4px solid #06B2B826',
          }}>
          <Upload onChange={handleFileUpload} showUploadList={false}>
            <ChatIcon icon={<FileOutlined />} />
          </Upload>

          <ChatIcon icon={<SmileOutlined />} />

          <Input
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type a message..."
            prefix={<></>}
            suffix={<></>}
            onPressEnter={handleSend}
            style={{ marginLeft: 8, marginRight: 8, flex: 1 }}
          />

          <ChatIcon icon={<SendOutlined />} onClick={handleSend} />
        </div>
        <div style={{ margin: '10px 0 0 0' }}>
          {isTyping && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                fontStyle: 'italic',
                marginLeft: 8,
              }}>
              <div style={{ marginRight: '10px' }}>
                <ChatAvatar type={'OnlyAvatar'} index={2} size={'small'} />
              </div>
              <p
                style={{
                  fontSize: '10px',
                  fontWeight: '400',
                  color: '#A5AAC6',
                }}>
                Loya is typing...
              </p>
            </div>
          )}
        </div>
      </MainPanelFooterWrapper>
    </>
  );
};

export default MainPanelFooter;
