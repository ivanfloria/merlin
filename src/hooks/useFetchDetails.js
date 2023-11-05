
import { useState, useEffect } from "react";

const useFetchDetails = (url,id) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    const CallAPI = async () => {
        try {
            const resp = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
            const temp = await resp.json()
            let data = JSON.parse(temp.contents)
            setData(data.results)
            setLoading(false)
            localStorage.setItem(`${id}`, JSON.stringify(data.results))
        } catch (error) {
            console.log('Error:', error)
        }
    };

    useEffect(() => {
        let day = 1000 * 60 * 60 * 24
        let actualDate = Date.now()
        let getDate = localStorage.getItem(`date${id}`)

        if (getDate) {
            if (actualDate - getDate > day) {
                CallAPI();
            } else {
                let temp = JSON.parse(localStorage.getItem(`${id}`))
                setData(temp)
                setLoading(false)
            }
        } else {
            localStorage.setItem(`date${id}`, Date.now())
            CallAPI()
        }
    }, [])

    return { data, loading }
}

export default useFetchDetails