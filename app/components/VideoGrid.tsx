
import React from 'react'
import { VideoCard } from './VideoCard'

const videos = [{
    title: "How to learn coding",
    author: "Google tv",
    timestamp: "3 days ago",
    image: "/tree.jpg",
    views: "100k",
    thumbImage: "/tree.jpg"
},
{
    title: "How to learn coding",
    author: "Google tv",
    timestamp: "3 days ago",
    image: "/tree.jpg",
    views: "100k",
    thumbImage: "/tree.jpg"
},
{
    title: "How to learn coding",
    author: "Google tv",
    timestamp: "3 days ago",
    image: "/tree.jpg",
    views: "100k",
    thumbImage: "/tree.jpg"
},
{
    title: "How to learn coding",
    author: "Google tv",
    timestamp: "3 days ago",
    image: "/tree.jpg",
    views: "100k",
    thumbImage: "/tree.jpg"
},
{
    title: "How to learn coding",
    author: "Google tv",
    timestamp: "3 days ago",
    image: "/tree.jpg",
    views: "100k",
    thumbImage: "/tree.jpg"
}]

const VideoGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center ">
            {videos && videos.map((video)=>(
                <VideoCard key={video.title} title={video.title} author={video.author}
                thumbImage={video.thumbImage} views={video.views} timestamp={video.timestamp} image={video.image}
                />
            ))}

        </div>
    )
}

export default VideoGrid