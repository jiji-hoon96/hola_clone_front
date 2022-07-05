import React, {Component} from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  overflow:hidden;
  padding-top:200px;
`;

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }
`;

const ImageContainer = styled.div`
  margin: 0 16px;
`;

const Image = styled.img`
max-width:100%;
width:100px;
height:100px;
max-height:100%;
`;


const items = [
  { id: 1 , url :"https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png"},
  { id: 2 , url : "https://seeklogo.com/images/N/notion-app-logo-009B1538E8-seeklogo.com.png"},
  { id: 3 , url : "https://www.gravatar.com/avatar/b66da5ef6099211f5db8f5f7a3b4c36b?d=identicon&s=150"},
  { id: 4},
  { id: 5},
  { id: 6},
  { id: 7},
  { id: 8},
  { id: 9},
  { id: 10},
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
      };
function Banner(){
    return (
        <Container>
        <StyledSlider {...settings}
        >
          {items.map(item => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image src={item.url} />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    )
}

export default Banner;