import CollectionsCard from "./CollectionsCard";
function Collections() {
  const c1 =
    "https://images.unsplash.com/photo-1517504544462-e6b28c1abb8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80";
  const c2 =
    "https://images.unsplash.com/photo-1523251691580-613e117a75e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  return (
    <div>
      <h2 className="p-12 text-stone-800 font-body font-medium tracking-widest">
        - FEATURED COLLECTIONS -
      </h2>
      <CollectionsCard heading={"Wedding"} img={c1} align={"left"} />
      <CollectionsCard heading={"Collections"} img={c2} align={"right"} />
    </div>
  );
}
export default Collections;
