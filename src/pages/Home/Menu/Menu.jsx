import { useEffect, useState } from "react";
import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);
  return (
    <div>
      <SectionHeading
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-8">
        {menu.slice(0, 6).map((singleMenu) => (
          <div className="flex justify-between gap-x-8" key={singleMenu?._id}>
            <div className="h-32 w-32 ">
              <img
                className="rounded-tr-[200px] rounded-b-[200px] object-cover"
                src={singleMenu?.image}
                alt=""
              />
            </div>
            <div>
              <h3 className="text-lg">
                {singleMenu?.category}________________
              </h3>
              <p className="lg:w-3/4">{singleMenu?.recipe}</p>
            </div>
            <p className="text-orange-400 font-bold">${singleMenu?.price}</p>
          </div>
        ))}
      </div>
      <div className="w-fit mx-auto">
        <button className="mt-5 shadow-lg font-bold border-b-2 border-black rounded-lg py-3 px-5">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default Menu;
