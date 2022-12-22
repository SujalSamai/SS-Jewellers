function CollectionsCard(props) {
  return (
    <div className="bg-white w-10/12 m-auto my-4 flex justify-around content-center">
      <div className="w-6/12">
        <img className="w-11/12 m-auto py-5" src={props.img}></img>
      </div>
      <div className="flex flex-col self-center w-1/3">
        <h1 className="text-4xl font-handwritten">{props.heading}</h1>
        <p className="font-body my-2 font-medium tracking-widest text-stone-800">
          Your one stop shop for Weddings and Special Events.
        </p>
        <button className="w-2/6 m-5 p-3 self-center bg-cyan-600 text-slate-50 font-body tracking-widest text-xs">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
export default CollectionsCard;
