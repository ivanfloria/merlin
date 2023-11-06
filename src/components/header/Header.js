
import { Link } from "react-router-dom"
import Title from "./Title"

import { Container } from "../styles/HeaderStyles"

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