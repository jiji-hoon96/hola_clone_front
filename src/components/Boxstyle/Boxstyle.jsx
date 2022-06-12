import styled from 'styled-components'
const BoxShape = styled.div`
    cursor: pointer;
    border-radius: 10px;
    background-position: center;
    background-color: ${(props)=>props.theme.bgColor};
    background-size: cover;
    border-color:${(props)=>props.theme.borderColor};
`

export const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 20px;
    width:100%;
    height: 450px;
    border-radius: 10px;
    background-color: ${(props)=>props.theme.bgColor};
`
export const OkkyImgBox= styled(BoxShape)`
  width:300px;
  height:270px;
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
  width:500px;
  height:300px;
  background-image: url("http://www.ekoreanews.co.kr/news/photo/202001/41870_51828_054.png");
`

export const ResultBox= styled.div`
    width:100%;
    height:100vh;
    display: grid;
    grid-template-columns: repeat(1fr);
`