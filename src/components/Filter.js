import React,{useState} from "react";

function Filter({ onCategoryChange,onSearchChange  }) {
  const [search, setSearch] = useState("testing")

  function handleSearchChange(event) {
    setSearch(event.target.value);
    onSearchChange(event.target.value);
  }

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={search} onChange={handleSearchChange}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
