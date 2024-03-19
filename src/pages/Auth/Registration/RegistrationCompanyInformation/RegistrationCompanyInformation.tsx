import { useState } from 'react';

import { Select } from 'antd';
import { useFormikContext } from 'formik';

import Inputs from '@/components/Input/Inputs';
import TextAreas from '@/components/TextArea/TextArea';
import countryCodes from '@/data/countyCodes';

import {
  ClientAmount,
  CompanyInformationWrapper,
  CountryPhone,
  PersonalInformationTitle,
  TagLabel,
  WrapperInputs,
  WrapperInputsContainer,
} from '../../Styled';
import { RegistrationFormValuesTypes } from '../../types';

const RegistrationCompanyInformation = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const { setFieldValue, values } =
    useFormikContext<RegistrationFormValuesTypes>();
  const AllOptions = countryCodes.map(country => ({
    value: country.code,
    label: country.code,
  }));
  const handleCountryChange = (value: string) => {
    const country = countryCodes.find(country => country.code === value);
    if (country) {
      setFieldValue('phone.countryCode', country.code);

      setFieldValue(
        'phone.phoneNumber',
        `${country.dial_code}${values.phoneNumber || ''}`,
      );
    }
  };
  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const handleClientAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    setFieldValue('clientAmount', selectedValue);
  };
  return (
    <>
      <PersonalInformationTitle className="companyRegTitle">
        <h4 className="heading2"> Sign Up</h4>
        <p className="heading3"> Company Information</p>
      </PersonalInformationTitle>
      <WrapperInputsContainer>
        <WrapperInputs>
          <Inputs
            type="text"
            name="companyName"
            placeholder="Company Name"
            label="* Company Name"
          />
        </WrapperInputs>
        <WrapperInputs>
          <Inputs
            type="text"
            name="website"
            placeholder="Website"
            label="Website"
          />
        </WrapperInputs>
        <WrapperInputs>
          <Inputs
            type="text"
            name="companyEmail"
            placeholder="Company Email Address"
            label="* Company Email Address"
          />
        </WrapperInputs>
        <CountryPhone>
          <label>
            <h5>* Country</h5>
            <Select
              style={{ width: '111px' }}
              placeholder="Select a country"
              optionFilterProp="children"
              filterOption={filterOption}
              onChange={handleCountryChange}
              options={AllOptions}
              showSearch
              name="phone.countryCode"
            />
          </label>

          <WrapperInputs>
            <Inputs
              type="text"
              name="phone.phoneNumber"
              placeholder="Phone number"
              label="* Phone Number"
            />
          </WrapperInputs>
        </CountryPhone>
        <ClientAmount>
          <label>
            <h5>* Amount of current clients</h5>
            <div className="wrapper">
              <TagLabel
                onClick={() => setSelectedOption('0')}
                className={selectedOption === '0' ? 'active' : ''}>
                0-Startup
                <input
                  value="0"
                  type="radio"
                  name="clientAmount"
                  hidden
                  onChange={handleClientAmount}
                />
              </TagLabel>
              <TagLabel
                onClick={() => setSelectedOption('10')}
                className={selectedOption === '10' ? 'active' : ''}>
                1-10K
                <input
                  value="10"
                  type="radio"
                  name="clientAmount"
                  hidden
                  onChange={handleClientAmount}
                />
              </TagLabel>
              <TagLabel
                onClick={() => setSelectedOption('20')}
                className={selectedOption === '20' ? 'active' : ''}>
                10K-20K
                <input
                  value="20"
                  type="radio"
                  name="clientAmount"
                  hidden
                  onChange={handleClientAmount}
                />
              </TagLabel>

              <TagLabel
                onClick={() => setSelectedOption('50')}
                className={selectedOption === '50' ? 'active' : ''}>
                20K-50K
                <input
                  value="50"
                  type="radio"
                  name="clientAmount"
                  hidden
                  onChange={handleClientAmount}
                />
              </TagLabel>
              <TagLabel
                onClick={() => setSelectedOption('100')}
                className={selectedOption === '100' ? 'active' : ''}>
                50K-100K
                <input
                  value="100"
                  type="radio"
                  name="clientAmount"
                  hidden
                  onChange={handleClientAmount}
                />
              </TagLabel>
              <TagLabel
                onClick={() => setSelectedOption('100k')}
                className={selectedOption === '100k' ? 'active' : ''}>
                100K+
                <input
                  value="100"
                  type="radio"
                  name="clientAmount"
                  hidden
                  onChange={handleClientAmount}
                />
              </TagLabel>
            </div>
          </label>
        </ClientAmount>
        <WrapperInputs>
          <Inputs
            type="text"
            name="channelAmount"
            placeholder="Amount of TV channels"
            label="Amount of TV channels"
          />
        </WrapperInputs>

        <TextAreas
          name="description"
          placeholder="* Briefly describe your project"
        />
      </WrapperInputsContainer>
    </>
  );
};

export default RegistrationCompanyInformation;
