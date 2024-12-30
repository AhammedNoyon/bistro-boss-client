import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";
import salads from "../../../assets/assets/home/slide1.jpg";

const Recommends = () => {
  return (
    <>
      <div>
        <SectionHeading
          subHeading={"Should Try"}
          heading={"CHEF RECOMMENDS"}
        ></SectionHeading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card bg-base-100 w-full shadow-xl">
          <figure>
            <img
              className="w-full h-[300px] object-cover"
              src={salads}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">Caeser Salad</h2>
            <p className="text-center w-3/4 mx-auto mb-4">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center">
              <button className="btn bg-slate-100 text-orange-400 border-b-2 border-b-orange-400 ">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-xl">
          <figure>
            <img
              className="w-full h-[300px] object-cover"
              src={salads}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">Caeser Salad</h2>
            <p className="text-center w-3/4 mx-auto mb-4">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center">
              <button className="btn bg-slate-100 text-orange-400 border-b-2 border-b-orange-400 ">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-xl">
          <figure>
            <img
              className="w-full h-[300px] object-cover"
              src={salads}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">Caeser Salad</h2>
            <p className="text-center w-3/4 mx-auto mb-4">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center">
              <button className="btn bg-slate-100 text-orange-400 border-b-2 border-b-orange-400 ">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommends;
