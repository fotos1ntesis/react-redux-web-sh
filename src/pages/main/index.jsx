import Category from "../../components/category";
import ListProduct from "../../components/product";

export default function MainPage({ HandleSwitchCategory, selectedCategory }) {
  return (
    <>
      <Category
        HandleSwitchCategory={HandleSwitchCategory}
        selectedCategory={selectedCategory}
      />
      <ListProduct />
    </>
  );
}
