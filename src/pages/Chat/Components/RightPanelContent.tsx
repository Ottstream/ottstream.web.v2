import { ReactNode } from 'react';

import { BellTwoTone, TagTwoTone } from '@ant-design/icons';
import { Select, SelectProps } from 'antd';
import styled from 'styled-components';

import Inputs from '@/components/Input/Inputs';

// Functions

function getRandomArmenianNumberStringArray(length: number) {
  const result = [];
  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * 9999999999) + 1;
    const armenianNumber = '+374' + randomNum.toString().padStart(9, '0');
    result.push({
      value: armenianNumber,
      label: armenianNumber,
    });
  }
  return result;
}
function generateRandomAddresses(numAddresses: number) {
  const streets = [
    'Baghramyan St.',
    'Mashtots Ave.',
    'Tumanyan St.',
    'Sayat-Nova Ave.',
    'Abovyan St.',
  ];
  const cities = ['Yerevan', 'Gyumri', 'Vanadzor', 'Abovyan', 'Hrazdan'];
  const postalCodes = ['0010', '0025', '0036', '0048', '0052'];

  const addresses = [];

  for (let i = 0; i < numAddresses; i++) {
    const street = streets[Math.floor(Math.random() * streets.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const postalCode =
      postalCodes[Math.floor(Math.random() * postalCodes.length)];
    const streetNumber = Math.floor(Math.random() * 100) + 1;

    const address = `${streetNumber} ${street}, ${city}, Armenia, ${postalCode}`;
    addresses.push({
      value: address,
      label: address,
    });
  }

  return addresses;
}

//  ----------------------------------------------------------------

const RightPanelContent = () => {
  const phoneOptions = getRandomArmenianNumberStringArray(5);
  const addressOptions = generateRandomAddresses(5);

  return (
    <>
      <div style={{ margin: '10px' }}>
        <WrapperSelects>
          <h5>Phone Number</h5>
          <CustomSelect
            size={'large'}
            options={phoneOptions}
            defaultValue={phoneOptions[0]}
            onChange={() => {}}
            style={{ width: '100%' }}
            prefixIcon={<BellTwoTone twoToneColor={'#01B2B8'} />}
          />
        </WrapperSelects>
        <WrapperSelects>
          <h5>Locations</h5>
          <CustomSelect
            size={'large'}
            options={addressOptions}
            defaultValue={addressOptions[0]}
            onChange={() => {}}
            style={{ width: '100%' }}
            prefixIcon={<TagTwoTone twoToneColor={'#01B2B8'} />}
          />
        </WrapperSelects>
        <WrapperSelects>
          <h5>Company Addresses</h5>
          <CustomSelect
            size={'large'}
            options={addressOptions}
            defaultValue={addressOptions[0]}
            onChange={() => {}}
            style={{ width: '100%' }}
            prefixIcon={<TagTwoTone twoToneColor={'#01B2B8'} />}
          />
        </WrapperSelects>
      </div>
    </>
  );
};

const WrapperSelects = styled.div`
  width: 100%;
  margin: 10px 0;

  h5 {
    color: #272b2e;
    margin-bottom: 8px;
    //styleName: Small text;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    //text-align: left;
  }
`;

// Custom Select TODO: Should be mode to separate file
type CustomSelectProps = SelectProps & {
  prefixIcon?: ReactNode;
};

const CustomSelect = ({ prefixIcon, children, ...rest }: CustomSelectProps) => {
  return (
    <SelectWrapper>
      {prefixIcon && <div className="prefix-icon-wrapper">{prefixIcon}</div>}
      <Select {...rest}>{children}</Select>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;

  .prefix-icon-wrapper {
    position: absolute;
    z-index: 1;
    width: 3rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  && .ant-select .ant-select-selector {
    padding-left: calc(3rem - 8px);
  }
`;

export default RightPanelContent;
