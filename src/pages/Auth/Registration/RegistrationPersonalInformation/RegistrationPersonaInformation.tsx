import hello from '@/assets/images/hello.svg';
import Inputs from '@/components/Input/Inputs';

import {
  PersonalInformationForms,
  PersonalInformationIconContainer,
  PersonalInformationTitle,
} from '../../Components';

const RegistrationPersonaInformation = () => {
  return (
    <PersonalInformationForms>
      <PersonalInformationTitle>
        <h4 className="heading1"> Sign Up</h4>
        <p className="small-text"> Personal Information</p>
      </PersonalInformationTitle>
      <PersonalInformationIconContainer>
        <h4 className="heading2"> Hello </h4>
        <img src={hello} alt="hello" />
      </PersonalInformationIconContainer>
      <div className="">
        <Inputs
          type="text"
          name="firstname"
          placeholder="First name"
          label="First name"
        />
        <Inputs
          type="text"
          name="lastname"
          placeholder="Last name"
          label="Last name"
        />
        <Inputs
          type="email"
          placeholder="Email Address"
          name="email"
          label="Email Address"
        />
        <Inputs
          type="password"
          placeholder="Password"
          name="password"
          label="Password"
          showPasswordToggle
        />
        <Inputs
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          label="Confirm Password"
          showPasswordToggle
        />
      </div>
    </PersonalInformationForms>
  );
};

export default RegistrationPersonaInformation;
