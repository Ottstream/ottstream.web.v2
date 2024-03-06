import { Select } from 'antd';
import { useField, useFormikContext } from 'formik';

import TextAreas from '@/components/TextArea/TextArea';

import {
  PersonalInformationTitle,
  WrapperPersonlInformation,
} from '../../Components';
import countryCodes from '@/data/countyCodes';
import Inputs from '@/components/Input/inputs';

const { Option } = Select;
const RegistrationCompanyInformation = () => {
  const { setFieldValue, values, errors } = useFormikContext();

  const [field, meta] = useField((name = 'phone.countryCode'));

  const AllOptions = countryCodes.map(country => ({
    value: country.code,
    label: country.code,
  }));
  const handleCountryChange = value => {
    const country = countryCodes.find(country => country.code === value);
    if (country) {
      setFieldValue('phone.countryCode', country.code);
      // Assuming you have `values` accessible here
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

  const handleClientAmount = e => {
    setFieldValue('clientAmount', e.target.value);
  };
  return (
    <WrapperPersonlInformation>
      <PersonalInformationTitle>
        <h4 className="heading1"> Sign Up</h4>
        <p className="small-text"> Company Information</p>
      </PersonalInformationTitle>
      <div className="">
        <Inputs
          type="text"
          name="companyName"
          placeholder="Company Name"
          label="Company Name"
        />
        <Inputs
          type="text"
          name="website"
          placeholder="Website"
          label="Website"
        />
        <Inputs
          type="text"
          name="companyEmail"
          placeholder="Company Email Address"
          label="Company Email Address"
        />
        <div className="countryPhone">
          <Select
            style={{ width: '111px' }}
            name="phone.countryCode"
            placeholder="Select a country"
            optionFilterProp="children"
            filterOption={filterOption}
            onChange={handleCountryChange}
            options={AllOptions}
            showSearch
          />
          <Inputs
            type="text"
            name="phone.phoneNumber"
            style={{ width: 200 }}
            placeholder="Phone number"
          />
        </div>
        <div className="clientAmount">
          <span>* Amount of current clients</span>
          <label>
            0-Startup
            <input
              value="0"
              type="radio"
              name="clientAmount"
              hidden
              onChange={handleClientAmount}
            />
          </label>
          <label>
            1-10K
            <input
              value="10"
              type="radio"
              name="clientAmount"
              hidden
              onChange={handleClientAmount}
            />
          </label>
          <label>
            10K-20K
            <input
              value="20"
              type="radio"
              name="clientAmount"
              hidden
              onChange={handleClientAmount}
            />
          </label>
          <label>
            20K-50K
            <input
              value="50"
              type="radio"
              name="clientAmount"
              hidden
              onChange={handleClientAmount}
            />
          </label>
          <label>
            50K-100K
            <input
              value="100"
              type="radio"
              name="clientAmount"
              hidden
              onChange={handleClientAmount}
            />
          </label>
          <label>
            100K+
            <input
              value="100"
              type="radio"
              name="clientAmount"
              hidden
              onChange={handleClientAmount}
            />
          </label>
        </div>
        <Inputs
          type="text"
          name="channelAmount"
          placeholder="Amount of TV channels"
          label="Amount of TV channels"
        />
        <TextAreas
          name="description"
          placeholder="* Briefly describe your project"
        />
      </div>
    </WrapperPersonlInformation>
  );
};

export default RegistrationCompanyInformation;
