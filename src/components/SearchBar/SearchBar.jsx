import './SearchBar.css'

const SearchBar = ({ coinsCopy, setCoins }) => {


    const search = (e) => {
        let text = e.target.value
        let results = coinsCopy.filter(e => {
            const searchText = text.toLowerCase();
            return e.name.toLowerCase().includes(searchText) || searchText.length < 3;
        });
        setCoins(results)

        console.log('soy los resultados de la busqueda de la search', results)
    }


    return (
        <div className="search-box">
            <button className="btn-search"><i className="fas fa-search">🔍</i></button>
            <input type="text" className="input-search" onChange={search} placeholder="Type to search coin . . ." />
        </div>
    )
}

export default SearchBar