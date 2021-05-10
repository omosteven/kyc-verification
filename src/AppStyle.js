import styled, { keyframes } from 'styled-components';

const animateBody = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const rotateLeftRight = keyframes`
from {
    transform-origin: 0% 0%;
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
}
to {
    transform-origin: 0% 0%;
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
}`;

const rotateRightLeft = keyframes`
from {
  transform-origin: 0% 0%;
  transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
}
to {
   
    transform-origin: 0% 0%;
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
}`;

export const PageTransition = styled.div`
  animation-name: ${animateBody};
  animation-duration: 4s;
  @media screen and (max-width: 768px) {
    animation-name: ${animateBody};
  }
`;

export const LeftToRightTransition = styled.div`
  animation-name: ${animateBody};
  animation-duration: 0.5s;
  @media screen and (max-width: 768px) {
    animation-name: ${rotateLeftRight};
  }
`;

export const RightToLeftTransition = styled.div`
  animation-name: ${animateBody};
  animation-duration: 0.5s;
  @media screen and (max-width: 768px) {
    animation-name: ${rotateRightLeft};
  }
`;