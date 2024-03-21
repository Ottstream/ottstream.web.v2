import { modalDispatcher } from '@/components/Modal/services/modalSlice';
import { useAppDispatch } from '@/store/hooks';
import React from 'react';

const UserList = () => {
  const dispatch = useAppDispatch();
  const { openModal } = modalDispatcher(dispatch);
  const openModalHandler = () => {
    openModal({
      modalType: 'addUser',
      props: { closeAction: () => console.log('closed') },
    });
  };
  return (
    <div>
      <button onClick={openModalHandler}> AddUser </button>
    </div>
  );
};

export default UserList;
