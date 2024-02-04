const SearchBar = ({ searchText, onChange }) => {
  return (
    <div>
      find countries <input name="countrySearch" onChange={onChange} value={searchText} />
    </div>
  );
};

export default SearchBar;
