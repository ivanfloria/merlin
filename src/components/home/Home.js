
import PodcastList from "./PodcastList"
import PodcastDetails from "./PodcastDetails"
import PodcastEpisode from "./PodcastEpisode"
import Tools from "./Tools"

import styled from "styled-components"

const Main = () => {
    return(
        <div>
            <Tools />
            <PodcastList />
            <PodcastDetails />
            <PodcastEpisode />
        </div>
    )
}

export default Main