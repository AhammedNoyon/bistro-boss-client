import { Parallax, Background } from "react-parallax";
const Cover = ({ coverImg, coverTitle, coverDesc }) => {
  console.log(coverImg);
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={coverImg}
      bgImageAlt="food"
      strength={-200}
    >
      <div className={`hero h-[700px] `}>
        <div className=" bg-black/70 py-36 px-[398px]"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl ">
            <h1 className="mb-5 text-5xl font-bold uppercase">{coverTitle}</h1>
            <p className="mb-5">{coverDesc}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
