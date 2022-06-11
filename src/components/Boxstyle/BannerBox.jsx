import styled from 'styled-components'
const BoxShape = styled.div`
    cursor: pointer;
    border-radius: 10px;
    background-position: center;
    background-color: white;
    background-size: cover;
    border-color:white;
`

export const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 450px;
    border-radius: 10px;
    background-color: white;
`
export const OkkyImgBox= styled(BoxShape)`
  width:500px;
  height:350px;
  background-image: url("https://okky.kr/assets/images/okky_logo_fb.png");
`
export const RocketImgBox= styled(BoxShape)`
  width:520px;
  height:200px;
  background-image: url("https://static.rocketpunch.com/images/common/share_default.png");
`
export const WantedImgBox= styled(BoxShape)`
  width:450px;
  height:250px;
  background-image: url("https://file.mk.co.kr/meet/neds/2021/08/image_readtop_2021_777584_16287284604747853.jpg");
`
export const JobImgBox= styled(BoxShape)`
  width:450px;
  height:250px;
  background-image: url("http://www.ekoreanews.co.kr/news/photo/202001/41870_51828_054.png");
`