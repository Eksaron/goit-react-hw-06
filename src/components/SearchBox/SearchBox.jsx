import { useId } from "react";
const SearchBox = ({ setSearchQuery }) => {
  const serarchTextid = "searchTextId" + useId();
  return (
    <>
      SearchBox
      <div>
        <input
          type="text"
          id={serarchTextid}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter name"
        />
      </div>
    </>
  );
};

export default SearchBox;
