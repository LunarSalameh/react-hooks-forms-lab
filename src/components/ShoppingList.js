import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items,setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("")
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(txt) {
    setSearchText(txt);
  }
  const itemsToDisplay = items.filter((item) => {
    const categoryMatch =
      selectedCategory === "All" || item.category === selectedCategory;
    
    const nameMatch = item.name.toLowerCase().includes(searchText.toLowerCase());

    return categoryMatch && nameMatch;
  });
  function handleItemFormSubmit(newItem) {
    setItems([...items,newItem])
    console.log("New item:", newItem);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
