import './search.style.css';
export const SearchBox = ({ placeholder, setSearchText }) => (
    <input className="search" type='search' placeholder={placeholder} onChange={(e) => setSearchText(e.target.value)}></input>
);