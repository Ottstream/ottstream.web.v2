import hello from '@/assets/images/hello.svg';
import Inputs from '@/components/Input/Inputs';

import {
  PersonalInformationForms,
  PersonalInformationIconContainer,
  PersonalInformationTitle,
  WrapperInputs,
  WrapperInputsContainer,
} from '../../Styled';

const RegistrationPersonaInformation = () => {
  return (
    <PersonalInformationForms>
      <PersonalInformationTitle>
        <h4 className="heading1"> Sign Up</h4>
        <p className="small-text"> Personal Information</p>
      </PersonalInformationTitle>
      <PersonalInformationIconContainer className="registrationPersonall">
        <h4 className="heading2"> Hello </h4>
        <img src={hello} alt="hello" />
      </PersonalInformationIconContainer>
      <WrapperInputsContainer>
        <WrapperInputs>
          <Inputs
            type="text"
            name="firstname"
            placeholder="First name"
            label="First name"
          />
        </WrapperInputs>
        <WrapperInputs>
          <Inputs
            type="text"
            name="lastname"
            placeholder="Last name"
            label="Last name"
          />
        </WrapperInputs>
        <WrapperInputs>
          <Inputs
            type="email"
            placeholder="Email Address"
            name="email"
            label="Email Address"
          />
        </WrapperInputs>
        <WrapperInputs>
          <Inputs
            type="password"
            placeholder="Password"
            name="password"
            label="Password"
            showPasswordToggle
            closePasswordLength
          />
        </WrapperInputs>
        <WrapperInputs>
          <Inputs
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            label="Confirm Password"
            showPasswordToggle
          />
        </WrapperInputs>
      </WrapperInputsContainer>
    </PersonalInformationForms>
  );
};

export default RegistrationPersonaInformation;
