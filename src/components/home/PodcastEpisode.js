
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from "../Loading"

import Siderbar from "../details/Sidebar"
import EpisodesDescription from "../details/EpisodesDescription"

import { Container, InfoContainer } from "../styles/PodcastEpisodeStyles"

const PodcastEpisode = () => {
    const {id,idEpi} = useParams()
    let data = JSON.parse(localStorage.getItem(`${id}`))
    let episode

    useEffect(() => {
        episode = data.find((item) => item.trackId === idEpi)
    },[data])


    return(
        <div>
            {data ?
            <Container>
                <Siderbar
                    img={data[0].artworkUrl600}
                    author={data[0].artistName}
                    title={data[0].trackName}
                />
                <InfoContainer>
                    <EpisodesDescription
                        description={episode.description}
                        url={episode.episodeUrl}
                    />
                </InfoContainer>
            </Container>
            : <Loading />}
        </div>
    )
}

export default PodcastEpisode