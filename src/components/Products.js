import ProductCard from "./ProductCard";
import ProductArr from "./ProductArr";
function Products() {
  const prodEl = ProductArr.map((prod) => {
    return (
      <ProductCard
        key={prod.product}
        product={prod.product}
        img={prod.img}
        desc={prod.description}
      />
    );
  });
  return (
    <div>
      <h2 className="p-12 text-stone-800 font-body font-medium tracking-widest">
        - FEATURED PRODUCTS -
      </h2>
      <div className="w-11/12 p-6 m-auto flex flex-wrap justify-around">
        {prodEl}
      </div>
    </div>
  );
}
export default Products;
