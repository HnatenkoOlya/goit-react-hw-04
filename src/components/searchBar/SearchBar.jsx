import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'

export default function SearchBar ({onSubmit}) {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const search = form.elements.search.value;
        if (search.trim() === "") {
            toast.error("Please enter text to search for images.");
            return;
        }
        onSubmit(search);
        form.reset();
    };

    return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.searchBar}>
       <input className={css.searchInput} type="text" name="search" autoComplete="off" autoFocus
       placeholder="Search images and photos"/>
       <button className={css.searchButton} type="submit">Search</button>
       <Toaster position="bottom-right" reverseOrder={false}/>
     </form>
    </header>
    )
} 