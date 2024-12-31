import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";
import useMenu from "../../../hooks/useMenu";
import SharedMenu from "../../../Shared/SharedMenu/SharedMenu";

const Menu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(
    (everyPopular) => everyPopular?.category === "dessert"
  );

  return (
    <div>
      <SectionHeading
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionHeading>
      <SharedMenu items={popular}></SharedMenu>
    </div>
  );
};

export default Menu;
