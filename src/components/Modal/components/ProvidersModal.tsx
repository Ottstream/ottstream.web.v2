import React from 'react';

import { BulbTwoTone } from '@ant-design/icons';
import styled from 'styled-components';

import CheckboxGroup from '@/components/CheckboxGroup/CheckboxGroup';

const data = [
  { id: 1, name: 'Test Providers', color: '#666' },
  { id: 2, name: 'OTT Stream', color: '#d41111' },
  { id: 3, name: 'Company Name', color: '#355021' },
  { id: 4, name: 'Test Providers', color: '#666' },
  { id: 5, name: 'OTT Stream', color: '#d41111' },
  { id: 6, name: 'Company Name', color: '#355021' },
  { id: 7, name: 'Test Providers', color: '#666' },
  { id: 8, name: 'OTT Stream', color: '#d41111' },
  { id: 9, name: 'Company Name', color: '#355021' },
  { id: 10, name: 'Test Providers', color: '#666' },
  { id: 11, name: 'OTT Stream', color: '#d41111' },
  { id: 12, name: 'Company Name', color: '#355021' },
  { id: 13, name: 'Test Providers', color: '#666' },
  { id: 14, name: 'OTT Stream', color: '#d41111' },
  { id: 15, name: 'Company Name', color: '#355021' },
  { id: 16, name: 'Test Providers', color: '#666' },
  { id: 17, name: 'OTT Stream', color: '#d41111' },
  { id: 18, name: 'Company Name', color: '#355021' },
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
