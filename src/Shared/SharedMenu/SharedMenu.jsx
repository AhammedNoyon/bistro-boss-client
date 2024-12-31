import { Link } from "react-router-dom";

const SharedMenu = ({ items, category }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 w-11/12 md:w-3/4 mx-auto">
        {items.slice(0, 6).map((item) => (
          <div key={item?._id} className="">
            <div className="flex justify-between gap-x-8">
              <div className="h-32 w-32 ">
                <img
                  className="rounded-tr-[200px] rounded-b-[200px] object-cover"
                  src={item?.image}
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-lg">{item?.name}________________</h3>
                <p className="lg:w-3/4">{item?.recipe}</p>
              </div>
              <p className="text-orange-400 font-bold">${item?.price}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to={`/ourShop/${category}`} className="">
        <button className=" hover:bg-black hover:text-white shadow-lg font-bold border-b-4 border-black rounded-lg py-3 px-5 mb-11 mt-14 flex w-fit mx-auto">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </Link>
    </>
  );
};

export default SharedMenu;
