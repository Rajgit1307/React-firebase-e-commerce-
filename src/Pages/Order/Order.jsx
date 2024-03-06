import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import mycontext from "../../context/data/MyContext";
import Loader from "../../components/loader/Loader";

function Order() {
  const userid = JSON.parse(localStorage.getItem("user")).user.uid;
  const context = useContext(mycontext);
  const { mode, Order, loading } = context;
  //  console.log(userid);
  //   Order.map((order) => {
  //     console.log(order.userid);
  //   })
  console.log(Order);
 const lengthcheck = ()=>{
   
 }
  return (
    <div>
      <Layout>
        {loading && <Loader />}
        {Order.length > 0 ? (
          <>
            <div className=" h-full pt-10">
              {Order.filter((item) => item.userid === userid).map((item) => {
                console.log(item);

                return (
                  <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    {item.cartItems.map((obj) => {
                      return (
                        // console.log(obj),
                        <div className="rounded-lg md:w-2/3">
                          <div
                            className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                            style={{
                              backgroundColor: mode === "dark" ? "#282c34" : "",
                              color: mode === "dark" ? "white" : "",
                            }}
                          >
                            <img
                              src={obj.imgUrl}
                              alt="product-image"
                              className="w-full rounded-lg sm:w-40"
                            />
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                              <div className="mt-5 sm:mt-0">
                                <h2
                                  className="text-lg font-bold text-gray-900"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {obj.title}
                                </h2>
                                <p
                                  className="mt-1 text-xs text-gray-700"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {obj.description}
                                </p>
                                <p
                                  className="mt-1 text-xs text-gray-700"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {obj.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <h2 className=" text-center tex-2xl text-white">
            No Product Ordered yet{Order.length}
          </h2>
        )}
      </Layout>
    </div>
  );
}

export default Order;
