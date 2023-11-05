
import { useState } from "react"
import useFetchList from "../../hooks/useFetchList"
import useSearch from "../../hooks/useFilter"
import PodcastCard from "./PodcastCard"
import Tools from "./Tools"
import Loading from "../Loading"

import styled from "styled-components"

const Container = styled.div`
    width: 100%;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
`

const url = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'

const PodcastList = () => {
    const [search, setSearch] = useState('')
    const { data, loading } = useFetchList(url)
    const results = useSearch(data, search)

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <Container>
            <Tools handleChange={handleChange} qty={results && results.length} />
            <Grid>
                {(data && !loading) ?
                    results.map((item, index) => {
                        let numImg = item['im:image'].length
                        let img = item['im:image'][numImg - 1].label
                        let author = item['im:artist'].label
                        let name = item['im:name'].label
                        let id = item.id.attributes['im:id']
                        return (
                            <PodcastCard
                                key={index}
                                img={img}
                                author={author}
                                name={name}
                                id={id}
                            />
                        );
                    })
                    : <Loading />}
            </Grid>
        </Container>
    )
}

export default PodcastList