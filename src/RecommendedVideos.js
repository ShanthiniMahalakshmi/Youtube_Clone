import React from 'react'
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";
function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>

            <div className="recommendedVideos_videos">
                <VideoCard
                title="My Daily Routine for Maximum Productivity & Creativity"
                views="96,163 views"
                timestamp="1 Mar 2021"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwngf5Oi3S-2yZFwr5uFeBDkp9Nrb8V4MFd4kCM9y=s88-c-k-c0x00ffffff-no-rj"
                channel="Niklas Christl"
                image="https://i.ytimg.com/an_webp/XZ3rX0YPH6g/mqdefault_6s.webp?du=3000&sqp=CJix64IG&rs=AOn4CLAFMtNJk9CAtCL7JqUGwCNYB5oGmA"
                
                
                />
            </div>
        </div>
    )
}

export default RecommendedVideos
