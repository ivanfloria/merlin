
import styled from "styled-components"
import Title from "./Title"

const Container = styled.header`
    width: 100%;
    border-bottom: solid 3px #eee;
    padding: 10px 0;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
`

const Header = () => {
    return(
        <Container>
            <Title title='Podcaster' />
        </Container>
    )
}

export default Header