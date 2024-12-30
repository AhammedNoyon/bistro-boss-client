const SectionHeading = ({ subHeading, heading }) => {
  return (
    <div className="w-11/12 md:w-fit mx-auto text-center mb-12 mt-10 md:mt-20">
      <p className="text-orange-400 italic">---{subHeading}---</p>
      <div className="border mt-2 mb-4 "></div>
      <h3 className="text-4xl mt-5">{heading}</h3>
      <div className="border mt-2 "></div>
    </div>
  );
};

export default SectionHeading;
