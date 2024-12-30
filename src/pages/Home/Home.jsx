import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import Menu from "./Menu/Menu";
import Recommends from "./Recommends/Recommends";
import Service from "./Service/Service";

const Home = () => {
  return (
    <>
      <section>
        <Banner></Banner>
      </section>
      <section className="w-11/12 md:w-3/4 mx-auto">
        <Category></Category>
      </section>
      <section className="w-11/12 md:w-3/4 mx-auto">
        <Service></Service>
      </section>
      <section className="w-11/12 md:w-3/4 mx-auto">
        <Menu></Menu>
      </section>
      <section className="w-11/12 md:w-3/4 mx-auto">
        <CallUs></CallUs>
      </section>
      <section className="w-11/12 md:w-3/4 mx-auto">
        <Recommends></Recommends>
      </section>
    </>
  );
};

export default Home;
