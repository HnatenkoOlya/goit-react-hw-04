import { useState } from 'react';
import {fetchPhotos} from '../photos-api';
import SearchBar from './searchBar/SearchBar';
import ImageGallery from './imageGallery/ImageGallery';
import Loader from './loader/Loader';
import ErrorMessage from './errorMessage/ErrorMessage';
import LoadMoreBnt from './loadMoreBtn/LoadMoreBtn';
import ImageModal from './imageModal/ImageModal';
import './App.css';



export default function App () {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [modalImage, setModalImage] = useState(""); 
    const [modalAlt, setModalAlt] = useState(""); 

   const handleSearch = async (search) => {
    try {
      setPhotos([]);
      setLoading(true);
      setError(false);
      setQuery(search)
      setPage(1);
      const data = await fetchPhotos(search, 1);
      setPhotos(data);
    } catch (error){
      console.error("Помилка при отриманні зображень:", error);
      setError(true)
    } finally {
      setLoading(false)
    }
   };

   const hanleLoadMore = async () => {
    try {
      setLoading(true)
      const nextPage = page + 1;
      const data = await fetchPhotos(query, nextPage);
      setPhotos(prev=>[...prev, ...data]);
      setPage(nextPage);
    } catch (error) {
      console.error("Помилка при завантажені додатковх зображень:", error);
      setError(true);
    } finally {
      setLoading(false)
    }
   }
   
   const handleImageClick = (url, alt) => {
    setModalImage(url);
    setModalAlt(alt);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }; 

  return (
    <div>
    <SearchBar onSubmit={handleSearch}/>
    {photos.length > 0 && <ImageGallery photos={photos} onImageClick={handleImageClick}/>}
    <Loader loading={loading}/>
    {error && <ErrorMessage/>}
    {photos.length > 0 && !loading && <LoadMoreBnt onClick={hanleLoadMore}/>}
    <ImageModal 
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageUrl={modalImage}
        imageAlt={modalAlt}
      />
    </div>
  )
}

