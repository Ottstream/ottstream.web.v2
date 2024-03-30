import React from 'react';

import { BulbTwoTone } from '@ant-design/icons';
import styled from 'styled-components';

import CheckboxGroup from '@/components/CheckboxGroup/CheckboxGroup';

const data = [
  { id: 1, name: 'Test Providers', color: '#666' },
  { id: 2, name: 'OTT Stream', color: '#d41111' },
  { id: 3, name: 'Company Name', color: '#355021' },
  { id: 1, name: 'Test Providers', color: '#666' },
  { id: 2, name: 'OTT Stream', color: '#d41111' },
  { id: 3, name: 'Company Name', color: '#355021' },
  { id: 1, name: 'Test Providers', color: '#666' },
  { id: 2, name: 'OTT Stream', color: '#d41111' },
  { id: 3, name: 'Company Name', color: '#355021' },
  { id: 1, name: 'Test Providers', color: '#666' },
  { id: 2, name: 'OTT Stream', color: '#d41111' },
  { id: 3, name: 'Company Name', color: '#355021' },
  { id: 1, name: 'Test Providers', color: '#666' },
  { id: 2, name: 'OTT Stream', color: '#d41111' },
  { id: 3, name: 'Company Name', color: '#355021' },
  { id: 1, name: 'Test Providers', color: '#666' },
  { id: 2, name: 'OTT Stream', color: '#d41111' },
  { id: 3, name: 'Company Name', color: '#355021' },
];

const ModalHeader = styled.div`
  margin-bottom: 20px;

  .title {
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: start;
    margin-bottom: 10px;
    p {
      color: #0a3c68;
      margin-left: 10px;
      font-weight: bold;
    }
  }
  .description {
    p {
      color: #00000073;
      font-weight: bold;
    }
  }
`;

const ProvidersModalWrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;

const ProvidersModal = () => {
  return (
    <>
      <ProvidersModalWrapper>
        <ModalHeader>
          <div className={'title'}>
            <BulbTwoTone twoToneColor={'#01B2B8'} />
            <p>Select Providers</p>
          </div>
          <div className={'description'}>
            <p>
              You can choose one or multiple providers to filter the
              conversations accordingly.
            </p>
          </div>
        </ModalHeader>
        <CheckboxGroup data={data} checkAllText={'All Provider'} />
      </ProvidersModalWrapper>
    </>
  );
};

export default ProvidersModal;
