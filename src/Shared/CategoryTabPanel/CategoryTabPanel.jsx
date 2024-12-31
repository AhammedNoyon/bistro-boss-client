import ShopTabCard from "../ShopTabCard/ShopTabCard";

// eslint-disable-next-line react/prop-types
const CategoryTabPanel = ({ category }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {category.map((item) => (
        <ShopTabCard key={item?._id} items={item}></ShopTabCard>
      ))}
    </div>
  );
};

export default CategoryTabPanel;
