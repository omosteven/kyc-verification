import styled from 'styled-components';

export const PageContainer = styled.div`
  // background:red;
  margin-top: 7em;
  height: 100vh;
  width: 85%;
  margin-left: 10%;
  @media screen and (max-width: 598px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const EachCard = styled.div`
  height: fit-content;
  width: 100%;
  background: rgba(255, 255, 255, 1);
  border: 0.5px solid rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 5px rgba(255, 255, 255, 0.1),
    0px 1px 10px rgba(0, 0, 0, 0.1), 0px -2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: -0.5em;
`;

export const EachCardTitle = styled.h5`
  margin-top: 1.5em;
  color: #A67C49;
  text-align: center;
  // font-weight: normal;
`;

export const EachCardSegmentNoHover = styled.div`
  // border-bottom:1px solid rgba(5,5,5,0.7);
  height: 4em;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

export const EachCardSegment = styled.div`
  // border-bottom:1px solid rgba(5,5,5,0.7);
  height: 4em;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  // display:flex;
  &:hover {
    background: rgba(5, 5, 5, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 1);
  }
`;

export const CardLeft = styled.div`
  float: left;
  display: flex;
  color: rgba(5, 5, 5, 0.7);
  // font-weight:bold;
  margin-top: 1.5em;
  margin-left: 1em;
  font-size: 0.85em;
`;

export const CardTitle = styled.h4`
  float: left;
  display: flex;
  color: rgba(5, 5, 5, 1);
  // font-weight:bold;
  margin-top: 1.5em;
  // font-size: 0.85em;
`;

export const CardSubtitle = styled.h5`
  margin-left: 1em;
  margin-top: -0.5em;
  color: rgba(5, 5, 5, 0.7);
  font-weight: normal;
`;

export const CardRight = styled.div`
  float: right;
  display: inline-block;
  color: rgba(5, 5, 5, 0.7);
  margin-top: 1.5em;
  margin-right: 1em;
  font-size: 0.85em;
`;

export const CardButton = styled.button`
  background: #F28705;
  border-radius: 0.3em;
  width: 100%;
  height: 3em;
  border: none;
  color: rgba(255, 255, 255, 1);
  margin-top: 3em;
  margin-bottom: 2em;
  cursor: pointer;
  transition: 0.5s background, 0.5s border, 0.5s color;
  outline: none;
  &:hover {
    background: white;
    color: #F28705;
    border: 1px solid #F28705;
  }
`;

export const CardButton2 = styled.button`
  background: rgba(255, 255, 255, 1);
  border-radius: 0.3em;
  width: 100%;
  height: 3em;
  border: 1px solid #F28705;
  color: #F28705;
  margin-top: 3em;
  margin-bottom: 2em;
  cursor: pointer;
  transition: 0.5s background, 0.5s border, 0.5s color;
  outline: none;
  &:hover {
    background: #F28705;
    color: white;
    border: 1px solid #F28705;
  }
`;

export const CardDataSegment = styled.div`
  // border-bottom:1px solid rgba(5,5,5,0.7);
  width: 100%;
  // display:flex;
  height: 90vh;
`;

export const CardSelectSort = styled.select`
  width: 5em;
  height: 2.5em;
  border: none;
  color: rgba(5, 5, 5, .0.7);
  outline: none;
  background: rgba(98, 2, 238, 0.0001);
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  border-radius: 4px;
`;

export const CardTextField = styled.input`
  width: 100%;
  height: 3em;
  border: 1px solid rgba(5, 5, 5, 0.3);
  outline: none;
  border-radius: 0.3em;
  background: #ffffff;
  border: 1px solid #cecece;
  // box-sizing: border-box;
  border-radius: 5px;
`;

export const CardSelectField = styled.select`
  width: 100%;
  height: 3em;
  border: 1px solid rgba(5, 5, 5, 0.3);
  outline: none;
  border-radius: 0.3em;
  background: #ffffff;
  border: 1px solid #cecece;
  // box-sizing: border-box;
  border-radius: 5px;
`;

export const CardTextFieldName = styled.h5`
  // font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  // letter-spacing: 0.233333px;
  color: rgba(5, 5, 5, 1);
`;

export const CardFileUpload = styled.div`margin-top: 2em;`;

export const CardTakeCamera = styled.div`width: 100%;`;

export const CardImg = styled.img`width: 100%;`;
