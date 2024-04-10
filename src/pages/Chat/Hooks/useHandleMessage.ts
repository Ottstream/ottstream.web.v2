import React, { useState } from 'react';

import { message } from 'antd';

const useHandleMessage = () => {
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

  return {
    inputValue,
    isTyping,
    handleSend,
    handleInputChange,
    handleFileUpload,
  };
};

export default useHandleMessage;
