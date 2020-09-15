import styled from 'styled-components'

export const mainContainer = styled.div`
    display: flex;
    margin: 0px 392px 100px 392px;
`;

export const mainSection  = styled.section`
    width : 100%;
`;

export const writerInfoBox = styled.div`
    height: 146px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #EFEFEF;
    margin : 30px 0px 25px 0px;
    padding-bottom : 20px;
`;

export const form = styled.form`
    width : 100%;
`;

export const writerInput = styled.input`
    width: 100%;
    height: 100px;
    margin-left: 15px;
    border: none;
    font-size: 25px;
    font-weight: 300;
`;

export const profileImg = styled.img`
    width: 90px;
    height: 80px;
    border-radius: 9999px;
    border: none;
    background-color: rgb(211, 183, 183);
`;

export const buttonsContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const buttonBox = styled.button`
    width: 102px;
    height: 43px;
    background-color: #EFEFEF;
    border-radius: 23px;
    margin-right: 20px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    outline: none;
    cursor: pointer;
    color: #707070;
    font-size: 15px;
    padding: 10px;

    &:hover {
        background-color : #D1D1D1;
        transition : 0.3s
    }
`;

export const buttonIcon = styled.img`
    width : 16px;
    height : 16px;
`;