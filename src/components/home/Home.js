
import PodcastList from "./PodcastList"
import PodcastDetails from "./PodcastDetails"
import PodcastEpisode from "./PodcastEpisode"

import styled from "styled-components"

const Main = () => {
    return(
        <div>
            <PodcastList />
            <PodcastDetails />
            <PodcastEpisode />
        </div>
    )
}

export default Main