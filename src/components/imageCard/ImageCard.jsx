import css from './ImageCard.module.css'
export default function ImageCard ({photo, onImageClick}) {
    const createdDate = new Date(photo.created_at);
    const formattedDate = createdDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
    return (
        <div>
            <img className={css.img} src={photo.urls.small} alt={photo.alt_description} width={photo.small}  onClick={() => onImageClick(photo.urls.regular, photo.alt_description)}/>
            <p>Likes:{photo.likes}</p>
            <p>Create:{formattedDate}</p>
            <p>Author:{photo.user.name}</p>
            <p>Location:{photo.user.location || 'No description'}</p>
            </div>
    )
}