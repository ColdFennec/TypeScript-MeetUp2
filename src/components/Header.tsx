
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../models/store';
// import { actions } from '../models/feature/search';

interface Props {
  searchText: string;
  setSearchText: (search: string) => void;
}

const Header = ({searchText, setSearchText}: Props) => {

  // const dispatch = useDispatch();
	// const searchText = useSelector((state: RootState) => state.searchString)


	return (
		<header>
			<h1 className="headerMain"> MeetUp</h1>
      <div className="inputField">
      <input
        type="searchInput"
        placeholder="Search"
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
        // onChange={event => dispatch(actions.changeSearchString(event.target.value) )}
        />
      </div>
		</header>
	)
}

export default Header