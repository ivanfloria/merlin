
import PodcastList from "./PodcastList"
import PodcastDetails from "./PodcastDetails"

import { Route, Routes } from "react-router-dom"

const Main = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<PodcastList />} />
                <Route path="/podcast/:id/*" element={<PodcastDetails />} />
            </Routes>
        </div>
    )
}

export default Main