
import { Outlet, Route, Routes, useParams } from "react-router-dom"
import useFetchDetails from "../../hooks/useFetchDetails"
import Loading from "../Loading"

import Siderbar from "../details/Sidebar"
import EpisodesInfo from "../details/EpisodesInfo"
import EpisodesList from "../details/EpisodesList"
import EpisodesDescription from "../details/EpisodesDescription"

import { Container, InfoContainer } from "../styles/PodcastDestailsStyles"
const PodcastDetails = () => {
    const {id} = useParams()
    const url = `https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode&limit=100`
    const { data, loading } = useFetchDetails(url,id)

    return(
        <div>
            {!loading ?
            <Container>
                <Siderbar
                    img={data[0].artworkUrl600}
                    author={data[0].artistName}
                    title={data[0].trackName}
                    id={id}
                />
                <Routes>
                    <Route path="/" element={
                        <InfoContainer>
                            <EpisodesInfo
                                episodes={data.length - 1}
                            />
                            <EpisodesList
                                data={data}
                                id={id}
                            />
                        </InfoContainer>
                    } />
                    <Route path="episodes/:idEpi" element={
                        <InfoContainer>
                            <EpisodesDescription
                                id={id}
                            />
                        </InfoContainer>
                    } />
                </Routes>
                <Outlet />
            </Container>
            : <Loading />}
        </div>
    )
}

export default PodcastDetails