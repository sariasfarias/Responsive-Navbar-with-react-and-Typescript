import './searchBox.css';

const SearchBox = () => {
  return (
    <form className="form_input">
        <button id="searchBox"></button>
        <input placeholder='Search ("/" for hotkey)' type="text"></input>  
    </form>
    
  )
}
export default SearchBox
