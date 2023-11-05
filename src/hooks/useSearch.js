

const useSearch = (data, search) => {
    let results = []

    if (!search) {
        results = data
    } else {
        results = data.filter((item) => {
            if (
                item['im:artist'].label.toLowerCase().includes(search.toLowerCase()) ||
                item['im:name'].label.toLowerCase().includes(search.toLowerCase())
            ) {
                return true
            } else {
                return false
            }
        })
    }

    return results
}

export default useSearch