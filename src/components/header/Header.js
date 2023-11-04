
import styled from "styled-components"
import Title from "./Title"
import Loading from "./Loading"

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
            <Loading />
        </Container>
    )
}

export default Header