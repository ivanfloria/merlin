
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    padding: 20px 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    box-sizing: border-box;
    font-size: 1rem;
`
const TrackName = styled.div`
    font-weight: bold;
    font-size: 1.5rem;
`
const TrackInfo = styled.div`
    font-style: italic;
    color: #333;
    margin: 20px 0;
`
const Audio = styled.audio`
    width: 100%;
`

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