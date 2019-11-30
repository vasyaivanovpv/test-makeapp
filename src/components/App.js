import React from 'react';
import styled from 'styled-components';
import { roundValue } from '../utils';
import { SimpleImg } from 'react-simple-img';
import ClampLines from 'react-clamp-lines';
import { ReactComponent as Android } from '../images/svg/svg_android.svg';
import { ReactComponent as Apple } from '../images/svg/svg_apple.svg';
import { ReactComponent as Mark } from '../images/svg/svg_mark.svg';
import { ReactComponent as Star } from '../images/svg/svg_star.svg';

const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 420px;
  height: 191px;
  margin-bottom: 23px;
  padding: 13px 12px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 16px;
`;
const HeaderApp = styled.div`
  display: flex;
  width: 100%;
`;
const LogoApp = styled.div`
  width: 81px;
  height: 81px;
  margin-right: 17px;
`;
const CaptionApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font: 500 15px/18px MuseoSansCyrl;
  letter-spacing: 0.13px;
  color: #1d353d;
`;
const TitleApp = styled.div`
  width: 223px;
  height: 46px;
  font: 500 18px/24px MuseoSansCyrl;
  letter-spacing: 0;
  color: #1d353d;
`;
const MainValuesApp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 273px;
  height: 24px;
`;
const GroupValueApp = styled.div`
  display: flex;
  align-items: center;
`;
const AppleSvg = styled(Apple)`
  width: 12px;
  fill: #979898;
  margin-right: 10px;
  margin-bottom: 2px;
`;
const StarSvg = styled(Star)`
  width: 20px;
  fill: #f8bf25;
  margin: 6px;
`;
const MarkSvg = styled(Mark)`
  width: 9px;
  fill: #979898;
  margin-right: 6px;
`;
const AndroidSvg = styled(Android)`
  width: 12px;
  fill: #979898;
  margin-right: 10px;
`;
const PriceApp = styled.div``;
const RatingApp = styled.div``;
const LocationApp = styled.div``;
const FreeSign = styled.span`
  width: 36px;
  height: 24px;
  padding: 3px 6px 4px 6px;
  font: 500 13px/24px MuseoSansCyrl;
  letter-spacing: 0.11px;
  color: #979898;
  border-radius: 6px;
  border: 1px solid #979898;
  text-align: center;
`;
const FooterApp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 370px;
`;
const FooterGroupApp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 59px;
  padding-bottom: 5px;
  :nth-child(2) {
    ::before,
    ::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      width: 0px;
      height: 100%;
      border: 1px solid #e8e8e8;
    }
    ::before {
      left: -36px;
    }
    ::after {
      right: -36px;
    }
  }
`;
const FooterGroupTitleApp = styled.div`
  font: 500 12px/16px MuseoSansCyrl;
  letter-spacing: 0;
  color: #979898;
`;
const FooterGroupValueApp = styled.div`
  font: 900 26px/31px MuseoSansCyrl;
  letter-spacing: 0;
  color: #1d353d;
`;

const toSvg = string => {
  switch (string) {
    case 'android':
      return <AndroidSvg />;
    case 'iphone':
      return <AppleSvg />;
    case 'free':
      return <FreeSign>free</FreeSign>;
    default:
      return string;
  }
};

const App = ({ app }) => (
  <AppWrap>
    <HeaderApp>
      <LogoApp>
        <SimpleImg height="100%" src={app.icon} />
      </LogoApp>
      <CaptionApp>
        <TitleApp>
          <ClampLines
            text={app.name}
            lines={2}
            ellipsis="..."
            buttons={false}
          />
        </TitleApp>
        <MainValuesApp>
          <GroupValueApp>
            {toSvg(app.platform)}
            <PriceApp>{toSvg(app.price)}</PriceApp>
          </GroupValueApp>
          <GroupValueApp>
            <StarSvg />
            <RatingApp>{app.rating}</RatingApp>
          </GroupValueApp>
          <GroupValueApp>
            <MarkSvg />
            <LocationApp>{app.location}</LocationApp>
          </GroupValueApp>
        </MainValuesApp>
      </CaptionApp>
    </HeaderApp>
    <FooterApp>
      <FooterGroupApp>
        <FooterGroupTitleApp>ASO Index</FooterGroupTitleApp>
        <FooterGroupValueApp>{app.asoindex}</FooterGroupValueApp>
      </FooterGroupApp>
      <FooterGroupApp>
        <FooterGroupTitleApp>Установок за месяц</FooterGroupTitleApp>
        <FooterGroupValueApp>
          {roundValue(app.installations)}
        </FooterGroupValueApp>
      </FooterGroupApp>
      <FooterGroupApp>
        <FooterGroupTitleApp>В категории</FooterGroupTitleApp>
        <FooterGroupValueApp>{app.categoryPosition}</FooterGroupValueApp>
      </FooterGroupApp>
    </FooterApp>
  </AppWrap>
);

export default App;
