import { useState, useEffect } from "react"
import axios from "axios"

function useFetch(url) {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(() => {fetchData();},[])

    const fetchData = async () => {
        try {
            const {data: responseData} = await axios.get(url)
            setData(responseData)
            setLoading(false)
        } catch (err) {
            setError(err.message)
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchData();
    }, [])

    return {error,loading,data}
}

export default useFetch