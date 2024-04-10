import React from 'react';

import { Modal as AntModal } from 'antd';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { modalList, MODALS } from './constants';
import { modalDispatcher, modalSelector } from './services/modalSlice';

function Modal() {
  const dispatch = useAppDispatch();
  const { closeTopModal } = modalDispatcher(dispatch);

  const { modals } = useAppSelector(modalSelector);

  return (
    <>
      {modals.map(item => {
        const {
          modalType,
          props: { closeAction, title, okText, ...rest },
        } = item;
        const onModalClose = () => {
          closeTopModal();
          closeAction?.();
        };
        return (
          <AntModal
            open
            centered
            title={title}
            key={modalType}
            okText={okText}
            width={'fit-content'}
            onCancel={onModalClose}>
            {React.createElement(modalList[modalType as MODALS], {
              ...rest,
              closeAction,
            })}
          </AntModal>
        );
      })}
    </>
  );
}

export default Modal;
