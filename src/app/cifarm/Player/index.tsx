import React, { useEffect, useState } from "react"
import ReactPlayer from "react-player"

export const Player = () => {
    const [hasWindow, setHasWindow] = useState(false)
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true)
        }
    }, [])
    return (
        <>
            {hasWindow && <ReactPlayer width={"100%"} height={600} url="https://www.youtube.com/watch?v=0MTz9X1ng7c&t=34s" />}
        </>
    )
}