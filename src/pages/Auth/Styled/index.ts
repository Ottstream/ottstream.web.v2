import styled from 'styled-components';
export const TagLabel = styled.label`
  max-width: 105px;
  max-height: 36px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid #c7c7c7;
  color: #0a3c68;
  font-size: 12px;
  line-height: 22px;
  cursor: pointer;
  padding: 7px 0;
  &.active {
    background-color: #7fd8db;
    border: 1px solid #7fd8db;
  }
`;

export const WrapperOTS = styled.div`
  width: 100%;
  display: inline-flex;
  min-height: 100vh;
  height: 100%;
  padding: 60px 64px 60px 62px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background:
    linear-gradient(
        to bottom right,
        rgba(10, 60, 104, 0.82) 0%,
        #0c99a8 38%,
        #0c99a8 45%
      )
      bottom right / 50% 50% no-repeat,
    linear-gradient(
        to bottom left,
        rgba(10, 60, 104, 0.82) 0%,
        #0c99a8 38%,
        #0c99a8 45%
      )
      bottom left / 50% 50% no-repeat,
    linear-gradient(
        to top left,
        rgba(10, 60, 104, 0.82) 0%,
        #0c99a8 38%,
        #0c99a8 45%
      )
      top left / 50% 50% no-repeat,
    linear-gradient(
        to top right,
        rgba(10, 60, 104, 0.82) 0%,
        #0c99a8 38%,
        #0c99a8 45%
      )
      top right / 50% 50% no-repeat;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const InfoBoxOTS = styled.div`
  max-width: 546px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.42);
  padding: 82px 0px;
  padding-left: 34px;
  padding-right: 42px;
  .infoHeadOts {
    .title {
      p {
        color: var(--white);
      }
    }
  }
  .infoHeadBody {
    padding-top: 48px;
    .text {
      h1 {
        color: var(--white);
      }
    }
  }
  .infoHeadFooter {
    padding-top: 64px;
    .divider {
      max-width: 430px;
      width: 100%;
      margin: 0 auto;
      height: 1px;
      opacity: 0.45;
      background: #000;
    }
    .desc {
      padding-top: 40px;
      p {
        color: var(--white);
      }
    }
  }
`;

export const WrapperPersonalInformation = styled.div`
  display: flex;
  width: 100%;
  max-width: 395px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  background-color: #fff;
  height: 100%;
  .timer {
    margin-top: 32px;
    margin-bottom: 16px;
  }
  .error {
    color: red;
  }
  form {
    width: 100%;
  }
`;

export const PersonalInformationTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  h4 {
    color: #000000;
    text-shadow: 1px 5px 4px rgba(0, 0, 0, 0.25);
  }
  p {
    color: var(--Subtle-1, #7a7a7a);
  }
  .companyRegTitle {
    h4 {
      color: #000000;
      text-shadow: 1px 5px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const PersonalInformationIconContainer = styled.div`
  display: flex;
  column-gap: 16px;
  padding-top: 64px;
  justify-content: flex-start;
  width: 100%;
  &.registrationPersonall {
    padding-top: 24px;
  }
  &.footer {
    column-gap: 2px;
    padding-top: 16px;
  }
  p {
    color: #666;
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }
  a {
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: #272b2e;
  }
  h4 {
    color: #000;
  }
`;
export const PersonalInformationForms = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PersonalButtonNextStep = styled.button`
  display: flex;
  width: 100%;
  padding: 4px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--mine-gradient, #0c99a8);
  background: var(
    --mine-gradient,
    linear-gradient(90deg, #0c99a8 8.33%, rgba(10, 60, 104, 0.82) 100.98%)
  );
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.04);
  color: white;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-top: 32px;
  &.resetPassBtn {
    max-width: 96px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CheckboxContainerSignIn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const Reviewed = styled.div`
  width: 316px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const WrapperResetPasswordDescription = styled.div`
  display: flex;
  width: 416px;
  .title {
    color: #0a3c68;
  }

  .email {
    color: #01b2b8;
  }
`;

export const WrapperInputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 24px;
  margin-top: 33px;
`;

export const WrapperInputs = styled.div`
  label {
    h5 {
      color: #272b2e;
      margin-bottom: 8px;
    }
  }
`;

export const CountryPhone = styled.div`
  display: flex;
  column-gap: 12px;
  label {
    h5 {
      display: inline-block;
      color: #272b2e;
      font-family: Montserrat;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      margin-bottom: 8px;
    }
  }
`;

export const ClientAmount = styled.div`
  .wrapper {
    display: flex;
    gap: 16px 24px;
    flex-wrap: wrap;
  }
  label {
    h5 {
      display: inline-block;
      color: #272b2e;
      font-family: Montserrat;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      margin-bottom: 8px;
    }
  }
`;

export const CompanyInformationWrapper = styled.div`
  width: 428px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px #bababa;
  padding: 32px;
  margin: 75px auto;
  position: relative;
  .backStep {
    position: absolute;
    top: 32px;
    left: 32px;
  }
`;

export const ForgotInfoText = styled.div`
  padding-top: 32px;
  padding-bottom: 24px;
  width: 381px;
  h3 {
    color: #012f57;
  }
`;

export const PassValidInfo = styled.div`
  margin-top: 24px;
  p {
    color: #7a7a7a;
  }
`;
