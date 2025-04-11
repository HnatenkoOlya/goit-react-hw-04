export default function ImageGallery ({photos}) {
    return (
    <ul>
        {photos.map(photo => (
            <li key={photo.id}>
            <div>
            <img src={photo.urls.small} alt={photo.alt_description} width={photo.small} />
            <p>Likes:{photo.likes}</p>
            <p>Create:{photo.created_at}</p>
            <p>Author:{photo.user.name}</p>
            <p>Location:{photo.user.location || 'No description'}</p>
            </div>
        </li>
        ))}
    </ul>
    )
}