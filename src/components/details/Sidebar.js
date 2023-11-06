
import { Link } from "react-router-dom"

import { Container, ImgHolder, TitleHolder } from "../styles/SidebarStyles"

const Siderbar = ({img,author,title,id}) => {
    return(
        <Container>
            <Link to={`/podcast/${id}`} title="Back to podcast">
                <ImgHolder>
                    <img src={img} alt={title} />
                </ImgHolder>
                <TitleHolder>
                    {title}<span>by {author}</span>
                </TitleHolder>
            </Link>
        </Container>
    )
}

export default Siderbar