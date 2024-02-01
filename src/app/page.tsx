import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <div
      className="flex w-full h-full bg-gray-100"
      style={{ height: "100%", flex: 1 }}
    >
      {/* Left Part */}
      <div className="flex-[2_2_0%] p-4">
        {/* Select ship to */}
        <div className="mb-6 bg-white p-4">
          <h2 className="text-xl font-semibold mb-2 text-black">
            Select Ship To
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="city">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Shipping method */}
        <div className="mb-6 bg-white p-4">
          <h2 className="text-xl font-semibold mb-2 text-black">
            Shipping Method
          </h2>
          {/* Add your shipping method options here */}
        </div>

        {/* Coupon code */}
        <div className="mb-6 bg-white p-4">
          <h2 className="text-xl font-semibold mb-2 text-black">Coupon Code</h2>
          {/* Add your coupon code input and apply button here */}
        </div>

        {/* Billing and Payment method */}
        <div className="mb-6 bg-white p-4">
          <h2 className="text-xl font-semibold mb-2 text-black">
            Billing and Payment Method
          </h2>
          {/* Add your billing and payment method options here */}
        </div>
      </div>

      {/* Right Part */}
      <div className="flex-1 p-4 bg-white m-4">
        {/* Order Overview */}
        <div className="p-4 rounded-lg text-black">
          <h2 className="text-xl font-semibold mb-2 ">Order Overview</h2>
          <div className="border-b mb-4 pb-2">
            {/* Add your order items here */}
            <div className="flex justify-between">
              <span>Product 1</span>
              <span>$100.00</span>
            </div>
            <div className="flex justify-between">
              <span>Product 2</span>
              <span>$50.00</span>
            </div>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>$150.00</span>
          </div>
        </div>
      </div>
    </div>
    // <main className="flex min-h-screen flex-col items-center justify-center">
    //   <div className="z-10 w-full max-w-5xl items-center justify-center font-mono lg:flex text-5xl p-24">
    //     Checkout Subapp
    //   </div>
    //   <div className="flex">
    //     <Link className="mr-2 p-6 bg-gray-800 text-white" href="/">
    //       Redirect from Checkout to Main
    //     </Link>
    //     <Link className="mr-2 p-6 bg-gray-800 text-white" href="/mf/cart">
    //       Redirect from Checkout to Cart
    //     </Link>
    //   </div>
    // </main>
  );
}
