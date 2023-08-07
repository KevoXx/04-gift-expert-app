import { useState } from "react";
import AddCategory from "./components/AddCategory";

import GifGrid from "./components/GifGrid";

export default function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // categories.push(newCategory)
    // setCategories([...categories,newCategory]);
    setCategories([newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}
