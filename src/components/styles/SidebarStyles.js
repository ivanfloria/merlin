
import styled from "styled-components"

export const Container = styled.div`
    width: 250px;
    height: auto;
    max-height: 350px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    background-color: #fff;
    padding: 0 20px;
    box-sizing: border-box;
`
export const ImgHolder = styled.div`
    display: flex;
    justify-content: center;
    &>img{
        height: 150px;
        width: auto;
        padding: 20px 0;
    }
`
export const TitleHolder = styled.div`
    font-weight: bold;
    border-top: solid 1px #ccc;
    padding: 20px 0;
    &>span{
        font-weight: 400;
        font-style: italic;
        display: block;
    }
`