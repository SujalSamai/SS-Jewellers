import logo from "../assets/logo.png";
function Footer() {
  return (
    <div className="bg-gray-700 w-11/12 m-auto mb-10">
      <div className="p-10 flex justify-center">
        <h1 className="tracking-widest italic font-handwritten text-slate-50 text-4xl">
          S.S.
        </h1>
        <h1 className="ml-2 tracking-widest font-serif text-2xl text-slate-50 self-end">
          JEWELLERS
        </h1>
      </div>
      <div className=" w-11/12 m-auto flex justify-around text-left pb-8 border-solid border-gray-500  border-b-[1px]">
        <div className="flex flex-col text-slate-300 tracking-wider text-sm">
          <h4 className="text-teal-500 mb-3">COMPANY</h4>
          <a href="#">Home</a>
          <a href="#">Wedding</a>
          <a href="#">Collections</a>
          <a href="#">Customize</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="flex flex-col text-slate-300 tracking-wider text-sm">
          <h4 className="text-teal-500 mb-3">CUSTOMER SERVICE</h4>
          <a href="#">Order Status</a>
          <a href="#">Payment</a>
          <a href="#">Return & Refund</a>
          <a href="#">Contact Us</a>
          <a href="#">Help</a>
        </div>
        <div className="flex flex-col text-slate-300 tracking-wider text-sm">
          <h4 className="text-teal-500 mb-3">MY ACCOUNT</h4>
          <a href="#">My Account</a>
          <a href="#">Wishlist</a>
          <a href="#">Specials</a>
          <a href="#">Order History</a>
          <a href="#">Support</a>
        </div>
        <div className="flex flex-col text-slate-300 tracking-wider text-sm">
          <h4 className="text-teal-500 mb-3">CONTACT US</h4>
          <p>Balaji Complex, Bada Sarafa, Indore (M.P)</p>
          <p>biswajitsamai231@gmail.com</p>
          <p>+91-9926012563</p>
          <h4 className="text-teal-500 mb-3">Follow Us:</h4>
        </div>
      </div>
      <div className="py-10 text-slate-500">
        <p>©️ SS JEWELLERS</p>
      </div>
    </div>
  );
}

export default Footer;
