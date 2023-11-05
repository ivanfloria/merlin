
import { useState } from "react"
import useFetch from "../../hooks/useFetch"
import useSearch from "../../hooks/useSearch"
import PodcastCard from "./PodcastCard"
import Tools from "./Tools"

import styled from "styled-components"

const Container = styled.div`
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
`

const PodcastList = () => {
    const [search, setSearch] = useState('')
    const { data, loading } = useFetch()
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
                        return (
                            <PodcastCard
                                key={index}
                                img={img}
                                author={author}
                                name={name}
                            />
                        );
                    })
                    : 'Loading...'}
            </Grid>
        </Container>
    )
}

export default PodcastList