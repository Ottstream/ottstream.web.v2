import React from 'react';

import { Modal as AntModal } from 'antd';
import styled from 'styled-components';

import { modalList, MODALS } from './constants';
import { modalDispatcher, modalSelector } from './services/modalSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

function Modal() {
  const dispatch = useAppDispatch();
  const { closeTopModal } = modalDispatcher(dispatch);

  const { modals } = useAppSelector(modalSelector);

  return (
    <>
      {modals.map(item => {
        const {
          modalType,
          props: { closeAction, ...rest },
        } = item;
        const onModalClose = () => {
          closeTopModal();
          closeAction?.();
        };
        return (
          <CustomModal
            style={{
              maxHeight: '90vh',
              height: '100%',
              overflow: 'auto',
            }}
            footer={null}
            key={modalType}
            open
            centered
            onCancel={onModalClose}>
            {React.createElement(modalList[modalType as MODALS], {
              ...rest,
              closeAction,
            })}
          </CustomModal>
        );
      })}
    </>
  );
}

const CustomModal = styled(AntModal)`
  border: 10px soild #5ff503;
`;

export default Modal;
