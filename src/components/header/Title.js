
import styled from "styled-components"

const Container = styled.h1`
    font-size: inherit;
    margin: 0;
    color: #3a75a7;
    font-weight: bold;
`

const Title = ({title}) => {
    return(
        <Container>
            {title}
        </Container>
    )
}

export default Title