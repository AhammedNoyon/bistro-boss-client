import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuBanner from "../../../assets/assets/menu/banner3.jpg";
import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";

const OurMenu = () => {
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
        <section>
          <SectionHeading
            subHeading="Don't miss"
            heading="TODAY'S OFFER"
          ></SectionHeading>
        </section>
      </main>
    </>
  );
};

export default OurMenu;
