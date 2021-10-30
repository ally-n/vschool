import React from "react"
import Navbar from "./Navbar"
import ImageGallery from "react-image-gallery"
import img1 from "./Images/menu.png"
import img2 from "./Images/game.png"
import img3 from "./Images/meme.png"

const images = [
    {
        original: img1,
        thumbnail: img1
    },
    {
        original: img2,
        thumbnail: img2
    },
    {
        original: img3,
        thumbnail: img3
    }
]




export default function Projects() {
    return(
        <div>
            <div className="title">
               projects
            </div>
            <Navbar />
            <div className="gallery">
                <ImageGallery items={images}  />
            </div>
           
        </div>
    )
}