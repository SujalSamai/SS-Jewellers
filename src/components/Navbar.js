function Navbar() {
  return (
    <navbar className="flex m-auto justify-around">
      <ul className="p-6 px-0 flex w-4/12 justify-around">
        <li className="text-sky-400 font-body font-medium text-xs tracking-widest">
          <a href="#">HOME</a>
        </li>
        <li className="font-body font-medium text-xs tracking-widest">
          <a href="#">WEDDINGS</a>
        </li>
        <li className="font-body font-medium text-xs tracking-widest">
          <a href="#">COLLECTIONS</a>
        </li>
        <li className="font-body font-medium text-xs tracking-widest">
          <a href="#">CUSTOMIZE</a>
        </li>
        <li className="font-body font-medium text-xs tracking-widest">
          <a href="#">CONTACT</a>
        </li>
      </ul>
      <ul className="pt-6 flex w-1/5 justify-evenly">
        <li className="font-body font-medium text-xs tracking-widest">
          <a href="#">LOGIN</a>
        </li>
        <li className="text-sky-400 font-body font-medium text-xs tracking-widest">
          <a href="#">CART(0)</a>
        </li>
      </ul>
    </navbar>
  );
}
export default Navbar;
