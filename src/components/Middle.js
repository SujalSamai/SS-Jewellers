import Product from "./Products";
import Collections from "./Collections";
function Middle() {
  return (
    <div className="bg-slate-200 w-11/12 m-auto">
      <Collections />
      <Product />
    </div>
  );
}
export default Middle;
