import hero from "../assets/1.png";
import logo from "../assets/logo.png";

function Hero() {
  return (
    <main className="">
      <img className="w-11/12 z-0 m-auto" src={hero}></img>
      <div className="flex flex-col absolute top-[45%] left-[35%]">
        <div className="flex">
          <h1 className="tracking-widest italic font-handwritten text-slate-50 text-8xl">
            S.S.
          </h1>
          <h1 className="tracking-widest font-serif text-5xl text-slate-50 self-end">
            JEWELLERS
          </h1>
        </div>
        <p className="pt-10 font-medium text-lg text-slate-50 font-body tracking-widest">
          - FANCY GOLD JEWELLERY -
        </p>
        <p className="pt-10 font-medium tracking-widest text-4xl text-slate-50 italic font-handwritten">
          Created with love to every detail..
        </p>
      </div>
    </main>
  );
}
export default Hero;
