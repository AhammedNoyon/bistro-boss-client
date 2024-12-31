import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import coverImg from "../../../assets/assets/shop/banner2.jpg";
import ShopTab from "../ShopTab/ShopTab";

const OurShop = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Our Shop</title>
      </Helmet>
      {/* banner */}
      <section>
        <Cover
          coverImg={coverImg}
          coverTitle="our shop"
          coverDesc="Would you like to try a dish?"
        ></Cover>
      </section>
      {/* tab */}
      <section className="w-11/12 md:w-3/4 mx-auto">
        <ShopTab></ShopTab>
      </section>
    </>
  );
};

export default OurShop;
