import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {SiNotion,SiGithub} from 'react-icons/si'
import "slick-carousel/slick/slick-theme.css";
import {ImgBox,JobImgBox,OkkyImgBox,RocketImgBox,WantedImgBox} from './Boxstyle/Boxstyle'
import {BannerSettings} from "./ScreenFunc/BannerFunc"
import {BannerBtn} from './Btnstyle/Btnstyle'
import {BannerDiv} from './DivStyle/Divstyle'

const StyledSlider = styled(Slider)`
    margin: 0px 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    .slick-list{
      margin:10px 20px;
    }
    .slick-track {
    display: flex;
    justify-content: center;
    align-items: center;
    }
  .slick-arrow.slick-next::before{
    font-size: 30px;
    color: black;
  }
  .slick-arrow.slick-prev::before{
    font-size: 30px;
    color: black;
  }
  .slick-dots{
    margin: 40px 0px 10px 0px;
  }
  .slick-dots li {
    margin: 0 3.5px;
  }

  .slick-dots li button {
    width: 6px;
    height: 6px;
  }

  .slick-dots li button:before {
    width: 6px;
    height: 6px;
    color: black;
  }

  .slick-dots li.slick-active button:before {
    color: black !important;
  }

  li {
    margin: 0;
    padding: 0;
  }
`

function Banner (){
    return(
        <StyledSlider {...BannerSettings}>
            <BannerDiv >
              <ImgBox>
                <BannerBtn>
                  <a href="https://rustic-tray-8dd.notion.site/0c464036142a430d97ace8b2e9217d13" rel="noreferrer" target='_blank'> 
                    Organization Notion   
                  </a>
                </BannerBtn>
                <SiNotion size="300"/>
              </ImgBox> 
            </BannerDiv>
            <BannerDiv>
                <ImgBox>
                <BannerBtn>
                    <a href='https://github.com/h-dt' rel="noreferrer" target="_blank">
                        Organization Git
                    </a>
                </BannerBtn>
                <SiGithub size="300"/>
                </ImgBox>
            </BannerDiv>
            <BannerDiv>
                <ImgBox>
                <BannerBtn>
                    <a href='https://okky.kr/' rel="noreferrer" target="_blank">
                        Okky 
                        <div/>
                        (채용 정보)
                    </a>
                </BannerBtn>
                <OkkyImgBox/></ImgBox>
            </BannerDiv>    
            <BannerDiv>
                <ImgBox>
                <BannerBtn>
                    <a href='https://www.rocketpunch.com/' rel="noreferrer" target="_blank">
                        Rocket Punch 
                        <div/>
                        (채용 정보)
                    </a>
                </BannerBtn>
                <RocketImgBox/></ImgBox>
            </BannerDiv>
            <BannerDiv>
                <ImgBox>
                <BannerBtn>
                    <a href='https://www.wanted.co.kr/jobsfeed?utm_source=google&utm_medium=sa&utm_campaign=kr_recruit_web_sa_signup_brand&utm_term=%EC%9B%90%ED%8B%B0%EB%93%9C&utm_content=brand&gclid=CjwKCAjw7vuUBhBUEiwAEdu2pILbav9cmZbSGJI-ytJn2bgrt-U8pO3Kt8pxkkgHvTP5sTWUHGzhbRoC27YQAvD_BwE' rel="noreferrer" target="_blank">
                        Wanted
                        <div/>
                        (채용 정보)
                    </a>
                </BannerBtn>
                <WantedImgBox/></ImgBox>
            </BannerDiv>
            <BannerDiv>
                <ImgBox>
                <BannerBtn>
                    <a href='https://www.jobplanet.co.kr/job' rel="noreferrer" target="_blank">
                       Job Planet 
                       <div/>
                       (채용 정보)
                    </a>
                </BannerBtn>
                <JobImgBox/></ImgBox>
            </BannerDiv>           
            </StyledSlider>
    )
}

export default Banner