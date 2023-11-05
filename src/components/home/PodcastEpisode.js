
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from "../Loading"

import styled from "styled-components"
import Siderbar from "../details/Sidebar"
import EpisodesDescription from "../details/EpisodesDescription"



const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
`
const InfoContainer = styled.div`
    width: calc(100% - 350px);
`

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