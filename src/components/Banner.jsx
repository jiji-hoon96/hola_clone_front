import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {SiNotion,SiGithub} from 'react-icons/si'
import "slick-carousel/slick/slick-theme.css";


const StyledSlider = styled(Slider)`
    .slick-track {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .slick-slide {
      
    }
  .slick-prev {
    left: 10px !important;
    z-index: 1000;
  }
  .slick-next {
    right: 10px !important;
    z-index: 1000;
  }

  .slick-dots {
    display: flex;
    width: 100px;
    height:10px;
    margin: 0;
    padding: 0;
    left: 50%;
    bottom: 10px;
    background-color: white;
    transform: translate(-50%, -50%);
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

const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 450px;
    border-radius: 10px;
    background-color: white;
`

const OkkyImgBox= styled.div`
  width:400px;
  height:400px;
  cursor: pointer;
  border-radius: 10px;
  background-position: center;
  background-color: white;
  background-size: cover;
  border-color:white;
  background-image: url("https://okky.kr/assets/images/okky_logo_fb.png");
`
    

const BannerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`
const NoticeBtn = styled.div`
    width: 300px;
    height:150px;
    background-color: beige;
    border: none;
    text-align: center;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    border-radius: 10px;
    cursor: pointer;
    :hover{
        transform: scale(1.02);
        
    }
`
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  }}
        onClick={onClick}
      />
    );
  }

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  }}
        onClick={onClick}
      />
    );
  }
  
function Banner (){
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      }
    return(
        <StyledSlider {...settings}>
            <BannerDiv>
              <ImgBox>
                <NoticeBtn>
                  <a href="https://rustic-tray-8dd.notion.site/0c464036142a430d97ace8b2e9217d13" rel="noreferrer" target='_blank'> 
                    Organization Notion   
                  </a>
                </NoticeBtn>
                <SiNotion size="300"/>
              </ImgBox> 
            </BannerDiv>
            <BannerDiv>
                <ImgBox>
                <NoticeBtn>
                    <a href='https://github.com/h-dt' rel="noreferrer" target="_blank">
                        Organization Git
                    </a>
                </NoticeBtn>
                <SiGithub size="300"/>
                </ImgBox>
            </BannerDiv>
            <BannerDiv>
                <ImgBox>
                <NoticeBtn>
                    <a href='https://okky.kr/' rel="noreferrer" target="_blank">
                        Okky
                    </a>
                </NoticeBtn>
                <OkkyImgBox/></ImgBox>
            </BannerDiv>    
            </StyledSlider>
    )
}

export default Banner