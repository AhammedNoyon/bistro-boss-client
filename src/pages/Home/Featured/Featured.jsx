import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";
import featured from "../../../assets/assets/home/featured.jpg";

const Featured = () => {
  return (
    <>
      <div className="bg-featuredBg bg-fixed object-cover bg-cover bg-no-repeat  my-10 md:my-28 py-16 md:py-32 backdrop-contrast-50 drop-shadow-2xl ">
        <div>
          <SectionHeading
            subHeading={"Check it out"}
            heading={"FROM OUR MENU"}
          ></SectionHeading>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 w-11/12 md:w-3/4 mx-auto">
          <div>
            <img src={featured} alt="" />
          </div>
          <div>
            <p className="mt-2 w-full lg:w-3/5 mx-auto text-white">
              March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error voluptate facere, deserunt
              dolores maiores quod nobis quas quasi. Eaque repellat recusandae
              ad laudantium tempore consequatur consequuntur omnis ullam maxime
              tenetur.
            </p>
            <div className="w-fit mx-auto">
              <button className="mt-5 shadow-lg font-bold border-b-4 border-white rounded-lg py-3 px-5 text-white">
                View Full Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
