import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks"
import { resetSearch, setSearch } from "../store/reducers/search"
import { useLocation } from "react-router-dom"


const Search = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()

  const search = useAppSelector(state => state.search)

  useEffect(() => {
    dispatch(resetSearch())
  }, [location.pathname, dispatch])

  return (
    <div>
      <input type="text" className='outline-none w-full text-slate-600' 
        placeholder="What are you searching?" 
        value={search} 
        onChange={e => dispatch(setSearch(e.target.value))}
      />
    </div>
  )
}

export default Search