import NumberFormat from "react-number-format";
const Product = (props) => {
  const item = props.item;
  const priceAfterDiscount =
    item.originalPrice - (item.originalPrice * item.discountPercent) / 100;

  return (
    <div className="rounded-lg border-2">
      <div className="m-5">
        <div>
          {item.discountPercent > 0 && (
            <div className=" font-bold text-[13px] rounded-full w-14 h-5 bg-white text-[#6A983C] absolute m-2 text-center -p-1">
              - {item.discountPercent} %
            </div>
          )}

          <img src={`${item.image}`} alt={item.name} />
        </div>
        <div>
          <h3 className="text-base font-bold pt-3">{item.name}</h3>
          <h6 className="text-xs pt-1 text-[#575757]">{item.description}</h6>
        </div>
        <div className="flex pt-4 justify-between">
          <div>
            <h1 className="text-lg font-bold">
              <NumberFormat
                value={priceAfterDiscount}
                displayType={"text"}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"Rp "}
              />
            </h1>
            {item.discountPercent > 0 && (
              <h6 className="text-xs line-through text-[#A9A9A9]">
                <NumberFormat
                  value={item.originalPrice}
                  displayType={"text"}
                  thousandSeparator={"."}
                  decimalSeparator={","}
                  prefix={"Rp "}
                />
              </h6>
            )}
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
