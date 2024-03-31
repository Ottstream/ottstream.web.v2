import React from 'react';

import styled from 'styled-components';

import Icon from '@/components/Icon';
import Select from 'Pages/Chat/Components/Select';
import useMockSelectData from 'Pages/Chat/Hooks/useMockSelectData';
import RightPanelNotes from 'Pages/Chat/Sections/RightPanel/Components/Notes/RightPanelNotes';
import RightPanelCarousel from 'Pages/Chat/Sections/RightPanel/Components/RightPanelCarousel';
import RightPanelTabs from 'Pages/Chat/Sections/RightPanel/Components/RightPanelTabs';

const RightPanelContentContainer = styled.div`
  margin: 10px;
  height: 100%;
  overflow: auto;
`;

const RightPanelContent = () => {
  const { phoneOptions, addressOptions } = useMockSelectData();

  return (
    <>
      <RightPanelContentContainer>
        <Select
          title={'Phone Number'}
          size={'large'}
          options={phoneOptions}
          defaultValue={phoneOptions[0]}
          onChange={() => {}}
          prefixIcon={<Icon name="bell" size={16} />}
        />
        <Select
          title={'Locations'}
          size={'large'}
          options={addressOptions}
          defaultValue={addressOptions[0]}
          onChange={() => {}}
          prefixIcon={<Icon name="location" size={16} />}
        />
        <Select
          title={'Company Addresses'}
          size={'large'}
          options={addressOptions}
          defaultValue={addressOptions[0]}
          onChange={() => {}}
          prefixIcon={<Icon name="address" size={16} />}
        />

        <RightPanelCarousel />

        {/*<RightPanelNotes />*/}

        <RightPanelTabs />
      </RightPanelContentContainer>
    </>
  );
};

export default RightPanelContent;
