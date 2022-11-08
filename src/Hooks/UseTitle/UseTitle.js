import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}--FOODIGO`
    }, [title])
}

export default useTitle;
