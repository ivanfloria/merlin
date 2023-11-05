
import styled from "styled-components"

const Container = styled.div`
    width: 250px;
    height: auto;
    max-height: 350px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    background-color: #fff;
    padding: 0 20px;
    box-sizing: border-box;
`
const ImgHolder = styled.div`
    display: flex;
    justify-content: center;
    &>img{
        height: 150px;
        width: auto;
        padding: 20px 0;
    }
`
const TitleHolder = styled.div`
    font-weight: bold;
    border-top: solid 1px #ccc;
    padding: 20px 0;
    &>span{
        font-weight: 400;
        font-style: italic;
        display: block;
    }
`


const Siderbar = ({img,author,title}) => {
    return(
        <Container>
            <ImgHolder>
                <img src={img} />
            </ImgHolder>
            <TitleHolder>
                {title}<span>by {author}</span>
            </TitleHolder>
        </Container>
    )
}

export default Siderbar