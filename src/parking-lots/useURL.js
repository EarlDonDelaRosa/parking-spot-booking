import { useEffect, useState } from "react";

function useURL(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url).then((response) => response.json())
        .then((urlData) => setData(urlData));
    }, []);

    return data
}

export default useURL