import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="container max-w-screen-xl mx-auto flex flex-col h-screen">
      <div className="HEADER">
        <div className="flex justify-between border-b-2 py-2">
          <div className="flex gap-4 text-xs">
            <a href="#" className="text-[#6A983C] ">
              Chat with us
            </a>
            <p>+62 822 1111 1111</p>
            <p>farix@raharja.info</p>
          </div>
          <a href="#">
            <ul className="flex gap-4 text-[#6A983C] text-xs">
              <li>Blog</li>
              <li>About Us</li>
              <li>Careers</li>
            </ul>
          </a>
        </div>

        <div className="flex justify-between py-4">
          <a href="#" className="text-2xl font-bold">
            LeumangShop
          </a>
          <div className="flex gap-4 w-full  justify-center">
            <input
              className="placeholder:text-slate-400 block bg-[#F9F9F9] w-2/4 border border-slate-300 rounded-2xl py-1 pl-4 shadow-sm focus:outline-none focus:border-[#6A983C] focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search Products, Categories..."
              type="text"
              name="search"
            />
            <div className="-ml-12 mt-1">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
            </div>
          </div>
          <a href="#" className="flex gap-5 m-auto">
            <FontAwesomeIcon icon={faUser} size="lg" />
            <FontAwesomeIcon icon={faBasketShopping} size="lg" />
          </a>
        </div>

        <div className="flex gap-8 bg-slate-50 p-3 text-sm font-semibold">
          <Menu name="Bakery" />
          <Menu name="Fruit and Vegetables" />
          <Menu name="Meat and Fish" />
          <Menu name="Drinks" />
          <Menu name="Kitchen" />
          <Menu name="Special Nutrition" />
          <Menu name="Baby" />
          <Menu name="Pharmacy" />
        </div>
      </div>
      <div className="MAIN flex mb-auto pt-10 gap-7">{props.children}</div>

      <div className="FOOTER h-10 bg-white">
        <div className="flex justify-between pb-10 pt-10 bg-white">
          <Footer />
          <Footer />
          <Footer />
          <Footer />
        </div>
        <div className="flex justify-center">
          <h1>Copyright 2022 ixwanull.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Layout;
