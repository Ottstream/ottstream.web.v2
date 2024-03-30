import { BellTwoTone, TagTwoTone } from '@ant-design/icons';
import styled from 'styled-components';

import Select from 'Pages/Chat/Components/Select';
import RightPanelCarousel from 'Pages/Chat/Sections/RightPanel/Components/RightPanelCarousel';
import RightPanelTabs from 'Pages/Chat/Sections/RightPanel/Components/RightPanelTabs';

// Functions TODO: Should be moved to separate file

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

const RightPanelContentContainer = styled.div`
  margin: 10px;
  height: 100%;
  overflow: auto;
`;

const RightPanelContent = () => {
  const phoneOptions = getRandomArmenianNumberStringArray(5);
  const addressOptions = generateRandomAddresses(5);

  return (
    <>
      <RightPanelContentContainer>
        <Select
          title={'Phone Number'}
          size={'large'}
          options={phoneOptions}
          defaultValue={phoneOptions[0]}
          onChange={() => {}}
          style={{ width: '100%' }}
          prefixIcon={<BellTwoTone twoToneColor={'#01B2B8'} />}
        />
        <Select
          title={'Locations'}
          size={'large'}
          options={addressOptions}
          defaultValue={addressOptions[0]}
          onChange={() => {}}
          style={{ width: '100%' }}
          prefixIcon={<TagTwoTone twoToneColor={'#01B2B8'} />}
        />
        <Select
          title={'Company Addresses'}
          size={'large'}
          options={addressOptions}
          defaultValue={addressOptions[0]}
          onChange={() => {}}
          style={{ width: '100%' }}
          prefixIcon={<TagTwoTone twoToneColor={'#01B2B8'} />}
        />

        <RightPanelCarousel />

        <RightPanelTabs />
      </RightPanelContentContainer>
    </>
  );
};

export default RightPanelContent;
