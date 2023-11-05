
import { useState, useEffect } from "react";

const useFetchList = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const CallAPI = async () => {
        setLoading(true)
        try {
            const resp = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
            const temp = await resp.json()
            let data = JSON.parse(temp.contents)
            setData(data.feed.entry)
            setLoading(false)
            localStorage.setItem('data', JSON.stringify(data.feed.entry))
        } catch (error) {
            console.log('Error:', error)
        }
    };

    useEffect(() => {
        let day = 1000 * 60 * 60 * 24
        let actualDate = Date.now()
        let getDate = localStorage.getItem('date')

        if (getDate) {
            if (actualDate - getDate > day) {
                CallAPI()
            } else {
                setData(JSON.parse(localStorage.getItem('data')))
            }
        } else {
            localStorage.setItem('date', Date.now())
            CallAPI()
        }
    }, [])

    return { data, loading }
}

export default useFetchList