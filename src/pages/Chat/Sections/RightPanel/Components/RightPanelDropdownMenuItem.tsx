import React, { useState } from 'react';

import { Button, Modal } from 'antd';
import styled from 'styled-components';

import ChatIcon from 'Pages/Chat/Components/ChatIcon';

interface RightPanelDropdownMenuItemPropsI {
  text: string;
  modalTitle?: string;
  modalDescription?: string;
  onOk?: () => void;
  onCancel?: () => void;
  showModal?: boolean;
}

const ThreeDotMenuDropdownItem = styled(ChatIcon)`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 276px;
  padding: 10px;
  margin: 0;
  border: none;
  color: black !important;
`;

const RightPanelDropdownMenuItem = ({
  text,
  modalTitle = '',
  modalDescription = '',
  showModal = false,
  onOk = () => {},
  onCancel = () => {},
}: RightPanelDropdownMenuItemPropsI) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOnButtonPress = () => {
    showModal && setIsModalOpen(true);
  };

  const handleOnOkPress = () => {
    setIsModalOpen(false);
    onOk();
    // setIsDropdownOpen(false);
  };
  const handleOnCancelPress = () => {
    setIsModalOpen(false);
    onCancel();
    // setIsDropdownOpen(false);
  };
  return (
    <>
      <ThreeDotMenuDropdownItem
        type={'default'}
        shape={'default'}
        ghost
        onClick={handleOnButtonPress}>
        <p>{text}</p>
      </ThreeDotMenuDropdownItem>
      <Modal
        title={modalTitle}
        okText={'Block'}
        okType={'danger'}
        centered
        open={isModalOpen}
        onOk={handleOnOkPress}
        onCancel={handleOnCancelPress}>
        <p>{modalDescription}</p>
      </Modal>
    </>
  );
};

export default RightPanelDropdownMenuItem;
