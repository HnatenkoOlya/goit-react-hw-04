import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar ({onSubmit}) {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const search = form.elements.search.value;
        if (search.trim() === "") {
            toast.error("Please enter text to search fot images.");
            return;
        }
        onSubmit(search);
        form.reset();
    };

    return (
    <header>
      <form onSubmit={handleSubmit}>
       <input type="text" name="search" autoComplete="off" autoFocus
       placeholder="Search images and photos"/>
       <button type="submit">Search</button>
       <Toaster position="bottom-right" reverseOrder={false}/>
     </form>
    </header>
    )
} 