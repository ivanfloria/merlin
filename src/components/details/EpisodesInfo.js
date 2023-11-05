
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    padding: 10px 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    font-weight: bold;
    box-sizing: border-box;
    font-size: 1.3rem;
`

const EpisodesInfo = ({episodes}) => {
    return(
        <Container>
            Episodes: {episodes}
        </Container>
    )
}

export default EpisodesInfo