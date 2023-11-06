
import { Link } from "react-router-dom"

import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    box-sizing: border-box;
    font-size: 1rem;
    margin-top: 30px;
`
const UnordList = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    &>li{
        display: flex;
        &>div{
            width: 100px;
            padding: 10px;
            box-sizing: border-box;
        }
        &>div:nth-child(1){
            width: calc(100% - 200px);
        }
    }
    &>li:nth-child(even){
        background-color: #eee;
    }
`
const HeaderSection = styled.div`
    font-weight: bold;
    font-size: 0.9rem;
`
const TitleSection = styled.div`
    color: #3a75a7;
    font-size: 0.9rem;
`
const DateSection = styled.div`
    font-size: 0.9rem;
`
const DurationSection = styled.div`
    font-size: 0.9rem;
`

export const MsToMin = (miliseconds) => {
    const addZ = (n) => {
	    return (n<10? '0':'') + n
    }
    let minute = Math.floor((miliseconds / 60000) % 60)
    let seconds = (miliseconds / 1000) % 60

    return(`${addZ(minute)}:${addZ(seconds)}`)
}

export const fixDate = (date) => {
    let temp = new Date(date)
    let day = temp.getDate()
    let month = temp.getMonth() + 1
    let year = temp.getFullYear()
    if (day < 10) day = '0' + day
    if (month < 10) month = '0' + month
    return (`${day}/${month}/${year}`)
}

const EpisodesList = ({data,id}) => {
    let newData = data.slice(1)
    return(
        <Container>
            <UnordList>
                <li>
                    <HeaderSection>Title</HeaderSection>
                    <HeaderSection>Date</HeaderSection>
                    <HeaderSection>Duration</HeaderSection>
                </li>
                {data ?
                newData.map((item,index) => {
                    return(
                        <li key={index}>
                            <TitleSection>
                                <Link to={`/podcast/${id}/episodes/${item.trackId}`}>
                                    {item.trackName}
                                </Link>
                            </TitleSection>
                            <DateSection>{fixDate(item.releaseDate)}</DateSection>
                            <DurationSection>{MsToMin(item.trackTimeMillis)}</DurationSection>
                        </li>
                    )
                })
                : null
                }
            </UnordList>
        </Container>
    )
}

export default EpisodesList