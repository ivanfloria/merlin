
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Container, TrackInfo, TrackName, Audio } from "../styles/EpisodesDescriptionStyles";

const EpisodesDescription = ({id}) => {
    const [description,setDescription] = useState()
    const [title,setTitle] = useState()
    const [audioTrack,setAudioTrack] = useState()
    const { idEpi } = useParams()
    let data = JSON.parse(localStorage.getItem(`${id}`))
    let episode

    useEffect(() => {
        episode = data.find((item) => item.trackId == idEpi)
        setDescription(episode.description)
        setTitle(episode.trackName)
        setAudioTrack(episode.episodeUrl)
    },[data])

    return(
        <Container>
            {data?
            <>
                <TrackName>{title}</TrackName>
                <TrackInfo dangerouslySetInnerHTML={{ __html: description }} />
                <div>
                    <Audio src={audioTrack} controls></Audio>
                </div>
            </>
            : null}
        </Container>
    )
}

export default EpisodesDescription