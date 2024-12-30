const SharedMenu = ({ items }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-8 w-11/12 md:w-3/4 mx-auto">
        {items.map((item) => (
          <div className="flex justify-between gap-x-8" key={item?._id}>
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
        ))}
      </div>
      <div className="w-fit mx-auto">
        <button className=" hover:bg-black hover:text-white shadow-lg font-bold border-b-4 border-black rounded-lg py-3 px-5 mb-11 mt-14">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
    </>
  );
};

export default SharedMenu;
