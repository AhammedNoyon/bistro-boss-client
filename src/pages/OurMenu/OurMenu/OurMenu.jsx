import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuBanner from "../../../assets/assets/menu/banner3.jpg";
import service from "../../../assets/assets/home/chef-service.jpg";
import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";
import useMenu from "../../../hooks/useMenu";
import SharedMenu from "../../../Shared/SharedMenu/SharedMenu";

const OurMenu = () => {
  const [menu] = useMenu();
  const offered = menu.filter(
    (everyOffer) => everyOffer?.category === "offered"
  );
  const dessert = menu.filter(
    (everyOffer) => everyOffer?.category === "dessert"
  );
  const pizza = menu.filter((everyOffer) => everyOffer?.category === "pizza");
  const salad = menu.filter((everyOffer) => everyOffer?.category === "salad");
  const soup = menu.filter((everyOffer) => everyOffer?.category === "soup");
  const drinks = menu.filter((everyOffer) => everyOffer?.category === "drinks");
  // console.log(offered, dessert, pizza, salad, soup, drinks);
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <header></header>
      <main>
        <section>
          <Cover
            coverImg={menuBanner}
            coverTitle="our menu"
            coverDesc="would yoy like to try a dish"
          ></Cover>
        </section>
        {/* offered */}
        <section className="w-11/12 md:w-3/4 mx-auto">
          <SectionHeading
            subHeading="Don't miss"
            heading="TODAY'S OFFER"
          ></SectionHeading>
          <div>
            <SharedMenu items={offered} category={"offered"}></SharedMenu>
          </div>
        </section>
        {/* desserts */}
        <section>
          <Cover
            coverImg={service}
            coverTitle="desserts"
            coverDesc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          ></Cover>
          <div className="mt-24">
            <SharedMenu items={dessert} category={"dessert"}></SharedMenu>
          </div>
        </section>
        {/* pizza */}
        <section>
          <Cover
            coverImg={service}
            coverTitle="pizza"
            coverDesc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          ></Cover>
          <div className="mt-24">
            <SharedMenu items={pizza} category={"pizza"}></SharedMenu>
          </div>
        </section>
        {/* salad */}
        <section>
          <Cover
            coverImg={service}
            coverTitle="salads"
            coverDesc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          ></Cover>
          <div className="mt-24">
            <SharedMenu items={salad} category={"salad"}></SharedMenu>
          </div>
        </section>
        {/* salad */}
        <section>
          <Cover
            coverImg={service}
            coverTitle="soups"
            coverDesc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          ></Cover>
          <div className="mt-24">
            <SharedMenu items={soup} category={"soup"}></SharedMenu>
          </div>
        </section>
        {/* drinks */}
        <section>
          <Cover
            coverImg={service}
            coverTitle="drinks"
            coverDesc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          ></Cover>
          <div className="mt-24">
            <SharedMenu items={drinks} category={"drinks"}></SharedMenu>
          </div>
        </section>
      </main>
    </>
  );
};

export default OurMenu;
