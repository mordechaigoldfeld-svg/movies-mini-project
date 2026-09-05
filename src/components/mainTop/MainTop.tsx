import SearchBar from "../searchBar/SearchBar"
import "./MainTop.css"

export default function MainTop() {
  return (
    <div className="mainTopClass">
        <h1>movies explorer</h1>
        <SearchBar>search</SearchBar>
    </div>
  )
}
