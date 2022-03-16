import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import Categories from "./Categories";
import Orderby from "./Orderby";
import Product from "./Product";

import Rating from "./Rating";
import Products from "../services/data/product";
import Layout from "./Layout";
const Home = () => {
  return (
    <Layout>
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
        {Products.map((item, index) => {
          return <Product item={item} key={index} />;
        })}

        <div className="m-auto pt-5">
          <button className="text-center w-full text-base pt-2 font-bold rounded-2xl w-21 h-12 text-white bg-[#6A983C] border-solid border-[#46760A] p-3 hover:bg-[#598033] hover:shadow-lg focus:bg-[#4a692a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-200 active:shadow-lg transition duration-150 ease-in-out">
            Show More Products
          </button>
          <div className="absolute left-1">
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
