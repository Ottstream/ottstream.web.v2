import styled from 'styled-components';

export const WrapperOTS = styled.div`
  width: 100%;
  display: inline-flex;
  height: 100vh;
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
