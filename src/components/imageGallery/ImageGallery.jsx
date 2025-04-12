import ImageCard from "../imageCard/ImageCard"
import css from './ImageGallery.module.css'
export default function ImageGallery ({photos, onImageClick}) {
    return (
    <ul className={css.imageGallery}>
        {photos.map(photo => (
            <li key={photo.id} className={css.image}>
            <ImageCard photo={photo} onImageClick={onImageClick}/>
        </li>
        ))}
    </ul>
    )
}