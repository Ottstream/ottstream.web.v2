import styled from 'styled-components';

export const WrapperPersonlInformation = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 92px;
  background-color: #fff;
  height: 100%;
  .error {
    color: red;
  }
`;

export const PersonalInformationTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h4 {
    color: #000000;
    text-shadow: 1px 5px 4px rgba(0, 0, 0, 0.25);
  }
  p {
    color: var(--Subtle-1, #7a7a7a);
  }
`;

export const PersonalInformationIconContainer = styled.div`
  display: flex;
  column-gap: 16px;
  padding-top: 24px;
  h4 {
    color: #000;
  }
`;
export const PersonalInformationForms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PersonalButtonNextStep = styled.button`
  display: flex;
  width: 364px;
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
`;

export const CheckboxContainerSignIn = styled.div`
  display: flex;
`;
