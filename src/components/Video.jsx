import React, { useRef } from 'react'
// import video from "../assets/About.mp4"

const VideoPlayer = () => {
    const videoRef = useRef(null)

    const handlePlayVideo = () => {
        if (videoRef.current) {
            videoRef.current.play()
        }
    }

    return (
        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
            <div className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                

                <iframe className='w-full h-auto max-w-full md:h-[280px]' src="https://www.youtube.com/embed/Oj7kdw5EQX0?start=6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            </div>
        </div>
    );
}

export default VideoPlayer;
