import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {SiNotion,SiGithub} from 'react-icons/si'
import "slick-carousel/slick/slick-theme.css";

const SliderDiv= styled.div`
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 40px;
  width:80%;
  min-width: 1000px;
`
const ImgBox = styled.div`
    display: flex;
    position: relative;
    top:-50px;
    left:100px;
    justify-content: center;
    align-items: center;
    width:300px;
    height:300px;
    border-radius: 10px;
    background-color: white;
`

const OkkyImgBox= styled.div`
  width:300px;
  height:300px;
  cursor: pointer;
  border-radius: 10px;
  background-position: center;
  background-color: white;
  background-size: cover;
  border-color:white;
  background-image: url("https://okky.kr/assets/images/okky_logo_fb.png");
`
    

const BannerDiv = styled.div`
    position: relative;
    text-align: center;
    width:100%;
    height:500px;
    background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
`
const GitBannerDiv = styled.div`
    position: relative;
    width:100%;
    height:500px;
    text-align: center;
    background-color: black;
`

const OkkyBannerDiv = styled.div`
position: relative;
    width:100%;
    height:500px;
    text-align: center;
    background-image: linear-gradient(to right, #8cc3f7 0%, #7481f9 19%, #2734f3 60%, #0f00dd 100%);
`

const NoticeBtn = styled.button`
    position: relative;
    top:150px;
    left: 1px;
    width:200px;
    height:150px;
    background-color: white;
    border: none;
    text-align: center;
    font-size: 22px;
    margin-bottom: 20px;
    border-radius: 10px;
    cursor: pointer;
    :hover{
        transform: scale(1.02);
        background-color: #F74053;
    }
`
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#fa798f"  }}
        onClick={onClick}
      />
    );
  }

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#fa798f" }}
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
        <SliderDiv>
        <Slider {...settings}>
            <BannerDiv>
                <NoticeBtn>
                    <a href="https://rustic-tray-8dd.notion.site/0c464036142a430d97ace8b2e9217d13" target='_blank'> 
                        Organization Notion   
                    </a>
                    
                </NoticeBtn>
                <ImgBox><SiNotion size="200"/></ImgBox>
            </BannerDiv>
            <GitBannerDiv>
                <NoticeBtn>
                    <a href='https://github.com/h-dt' target="_blank">
                        Organization Git
                    </a>
                </NoticeBtn>
                <ImgBox><SiGithub size="200"/></ImgBox>
            </GitBannerDiv>
            <OkkyBannerDiv>
                <NoticeBtn>
                    <a href='https://okky.kr/' target="_blank">
                        Okky
                    </a>
                </NoticeBtn>
                <ImgBox><OkkyImgBox/></ImgBox>
            </OkkyBannerDiv>    
            </Slider>
        </SliderDiv>
        
        
    )
}

export default Banner