import {
  InfoBoxOTS,
  WrapperOTS,
} from 'Pages/Auth/WelcomeOTS/WelcomeOTS.styles';
import welcomeLogo from 'Assets/images/welcomeOST.png';

const WelcomeOTS = () => {
  return (
    <WrapperOTS>
      <InfoBoxOTS>
        <div className="infoHeadOts">
          <div className="logo">
            <img src={welcomeLogo} alt="welcomeLogo" />
          </div>
          <div className="title">
            <p className="heading2">Ottstream</p>
          </div>
        </div>
        <div className="infoHeadBody">
          <div className="text">
            <h1 className="heading1">Welcome to OTTStream </h1>
          </div>
        </div>
        <div className="infoHeadFooter">
          <div className="divider"></div>
          <div className="desc">
            <p className="heading3">
              OTTStream is a place, where a group of professionals will help the
              providers to grow and gain more knowledge.
            </p>
          </div>
        </div>
      </InfoBoxOTS>
    </WrapperOTS>
  );
};

export default WelcomeOTS;
