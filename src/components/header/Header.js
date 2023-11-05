
import { Link } from "react-router-dom"
import Title from "./Title"

import styled from "styled-components"

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
            <Link to={'/'} title="Go to home">
                <Title title='Podcaster' />
            </Link>
        </Container>
    )
}

export default Header