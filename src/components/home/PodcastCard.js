
import { Link } from "react-router-dom"

import { Container, Title, Author } from "../styles/PodcastCardStyles"

const PodcastCard = ({img,author,name,id}) => {
    return(
        <Link to={`/podcast/${id}`}>
            <Container>
                <img src={img} alt={name} />
                <Title>
                    {name}
                </Title>
                <Author>
                    Author: {author}
                </Author>
            </Container>
        </Link>
    )
}

export default PodcastCard