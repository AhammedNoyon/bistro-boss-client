import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Menu from "./Menu/Menu";
import Recommends from "./Recommends/Recommends";
import Service from "./Service/Service";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
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
      <section className="">
        <Featured></Featured>
      </section>
      <section className="w-11/12 md:w-3/4 mx-auto">
        <Testimonials></Testimonials>
      </section>
    </>
  );
};

export default Home;
