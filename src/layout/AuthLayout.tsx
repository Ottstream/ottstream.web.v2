import React from 'react';

import { Outlet } from 'react-router-dom';

import SplitScreen from '../components/SplitScreen/SplitScreen';
import WelcomeOTS from '../pages/Auth/WelcomeOTS/WelcomeOTS';
import { modalDispatcher } from '../components/Modal/services/modalSlice';
import { useAppDispatch } from '../store/hooks';

export default function AuthLayout() {
  const dispatch = useAppDispatch();
  const { openModal } = modalDispatcher(dispatch);
  const openModalHandler = () => {
    openModal({
      modalType: 'confirmModal',
      props: { closeAction: () => console.log('closed') },
    });
  };
  return (
    <div>
      <SplitScreen leftWeight={6} rightWeight={7}>
        <button onClick={openModalHandler} style={{ background: 'red' }}>
          open modalDispatcher
        </button>
        <WelcomeOTS />2
        <Outlet />
      </SplitScreen>
    </div>
  );
}
