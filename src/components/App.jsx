import { useState } from 'react'
import './App.css'
import SearchBar from './searchBar/SearchBar'
import {fetchPhotos} from '../photos-api'
import ImageGallery from './imageGallery/ImageGallery';


export default function App () {
    const [photos, setPhotos] = useState([]);

   const handleSearch = async (search) => {
    setPhotos([])
    const data = await fetchPhotos(search);
    setPhotos(data);
   }

  return (
    <div>
    <SearchBar onSubmit={handleSearch}/>
    {photos.length > 0 && <ImageGallery photos={photos}/>}
    </div>
  )
}

