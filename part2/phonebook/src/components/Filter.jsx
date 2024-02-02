const Filter = ({ onChange, filterText }) => {
  return (
    <div>
      filter shown with
      <input onChange={onChange} value={filterText} />
    </div>
  );
};

export default Filter;
