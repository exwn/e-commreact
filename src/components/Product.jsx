const Product = (props) => {
  return (
    <div className="rounded-lg border-2">
      <div className="m-5">
        <div>
          <div className=" font-bold text-[13px] rounded-full w-14 h-5 bg-white text-[#6A983C] absolute m-2 text-center -p-1">
            - 36 %
          </div>
          <img src={props.src} alt="{props.name}" />
        </div>
        <div>
          <h3 className="text-base font-bold pt-3">{props.name}</h3>
          <h6 className="text-xs pt-1 text-[#575757]">
            Disusun dengan penuh kenangan
          </h6>
        </div>
        <div className="flex pt-4 justify-between">
          <div>
            <h1 className="text-lg font-bold">36.000</h1>
            <h6 className="text-xs line-through text-[#A9A9A9]">40.000</h6>
          </div>
          <div>
            <button className="text-base pt-2 font-bold rounded-2xl w-21 h-10 text-white bg-[#6A983C] border-solid border-[#46760A] p-3 hover:bg-[#598033] hover:shadow-lg focus:bg-[#4a692a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-200 active:shadow-lg transition duration-150 ease-in-out ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
