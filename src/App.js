import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBasketShopping,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import Orderby from "./components/Orderby";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Rating from "./components/Rating";

import logo from "./logo.svg";
import "./App.css";

function App() {
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

      <div className="MAIN flex mb-auto pt-10 gap-7">
        <div>
          <div className="pb-1 font-bold text-lg">Categories</div>
          <Categories name="Bolu" jumlah="320" />
          <Categories name="Mie" jumlah="112" />
          <Categories name="Pizza" jumlah="32" />
          <Categories name="Dessert" jumlah="40" />

          <div className="pb-1 pt-5 font-bold text-lg">Order By</div>
          <Orderby name="Termurah" />
          <Orderby name="Terlaris" />
          <Orderby name="Termahal" />

          <div className="pb-1 pt-5 font-bold text-lg ">Rating</div>
          <div className="flex">
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <Rating />
          </div>
          <div className="flex">
            <Rating />
            <Rating />
            <Rating />
            <Rating />
          </div>
          <div className="flex">
            <Rating />
            <Rating />
            <Rating />
          </div>
          <div className="flex">
            <Rating />
            <Rating />
          </div>
          <div className="flex">
            <Rating />
          </div>

          <div className="pb-1 pt-5 font-bold text-lg">Price</div>
          <div className="w-full mb-3">
            <input type="range" className="accent-[#6A983C] w-full" />
          </div>
          <div className="flex gap-3 text-xs font-bold">
            <div>
              <h4>Min</h4>
              <input
                type="text"
                value="0"
                disabled
                className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
              />
            </div>
            <div>
              <h4>Max</h4>
              <input
                type="text"
                value="000"
                disabled
                className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
              />
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <button className="text-center w-1/3 text-base pt-2 font-bold rounded-2xl w-21 h-12 text-white bg-[#6A983C] border-solid border-[#46760A] p-3 hover:bg-[#598033] hover:shadow-lg focus:bg-[#4a692a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-200 active:shadow-lg transition duration-150 ease-in-out">
              Apply
            </button>
            <button className="text-center w-1/3 text-lg pt-2 font-bold rounded-2xl w-21 h-12 text-[#A9A9A9]  p-3">
              Reset
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Product name="Bakso" src="Bakso.png" />
          <Product name="Bolu Lapis" src="Bolu Lapis.png" />
          <Product name="Bolu Susun" src="Bolu Susun.png" />
          <Product name="Burger" src="Burger.png" />
          <Product name="Donat" src="Donat.png" />
          <Product name="Mata Sapi" src="Mata Sapi.png" />
          <Product name="Mie Aceh" src="Mie Aceh.png" />
          <Product name="Pizza Hut" src="Pizza Hut.png" />
          <Product name="Salad" src="Salad.png" />
          <div className="m-auto pt-5">
            <button className="text-center w-full text-base pt-2 font-bold rounded-2xl w-21 h-12 text-white bg-[#6A983C] border-solid border-[#46760A] p-3 hover:bg-[#598033] hover:shadow-lg focus:bg-[#4a692a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-200 active:shadow-lg transition duration-150 ease-in-out">
              Show More Products
            </button>
            <div className="absolute left-1">
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
        </div>
      </div>

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
}

export default App;
