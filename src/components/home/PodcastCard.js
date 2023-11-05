
import styled from "styled-components"

const Container = styled.div`
    position: relative;
    width: 200px;
    height: auto;
    box-shadow: -1px 2px 10px rgba(0,0,0,0.3);
    margin: 100px 30px;
    padding: 60px 20px 20px 20px;
    text-align: center;
    &>img{
        position: absolute;
        height: 100px;
        width: auto;
        top: -50px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 100%;
    }
`
const Title = styled.div`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.9rem;
    margin: 5px 0;
`
const Author = styled.div`
    color: #666;
    font-weight: 600;
    font-size: 0.8rem;
`

const PodcastCard = ({img,author,name}) => {
    return(
        <Container>
            <img src={img} />
            <Title>
                {name}
            </Title>
            <Author>
                Author: {author}
            </Author>
        </Container>
    )
}

export default PodcastCard