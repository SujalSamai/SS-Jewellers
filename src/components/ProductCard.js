function ProductCard(props) {
  return (
    <div className="bg-white w-3.5/12 m-2 p-4 shadow-2xl">
      <img className="w-11/12 inline-block h-64" src={props.img}></img>
      <h1 className="text-4xl p-4 font-handwritten">{props.product}</h1>
      <h3 className="font-body font-medium tracking-widest text-stone-800">
        {props.desc}
      </h3>
      <button className="w-3/6 p-3 m-4 bg-cyan-600 text-slate-50 font-body tracking-widest text-xs">
        SHOP NOW
      </button>
    </div>
  );
}
export default ProductCard;
