import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { getProduk } from "../api/produk/produkService";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FallingLines, Radio, RevolvingDot } from "react-loader-spinner";
import { motion } from "framer-motion";

const Homepage = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.produk);

  useEffect(() => {
    dispatch(getProduk());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="text-center w-full min-h-screen items-center flex justify-center">
        <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="text-center w-full min-h-screen items-center flex justify-center">
        <div className="flex items-center">
          {error === "Network Error" ? (
            <Radio
              height="80"
              width="80"
              radius="48"
              color="#4fa94d"
              ariaLabel="watch-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            <RevolvingDot
              radius="45"
              strokeWidth="5"
              color="red"
              secondaryColor="green"
              ariaLabel="revolving-dot-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          )}
          <p className="text-xl text-slate-500">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <h2 className="text-center my-10 text-2xl">List Produk</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
        {data.products &&
          data.products.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              key={index}
              className="bg-white rounded-md h-auto relative"
            >
              <img
                src={item.thumbnail}
                alt=""
                className="h-[200px] w-full rounded-t-md"
              />
              <div className="p-2 mb-10">
                <p>Merk - {item.title}</p>
                <p>Brand - {item.brand}</p>
                <p>Category - {item.category}</p>
                <p>Description - {item.description}</p>
                <p>Price - {item.price}</p>
                <p>Rating - {item.rating}</p>
              </div>
              <Link
                to={`detail/${item.id}`}
                className="absolute bottom-0 w-full h-10 bg-green-500 rounded-sm flex justify-center items-center"
              >
                <p className="text-slate-50 font-semibold text-center">
                  Detail
                </p>
              </Link>
            </motion.div>
          ))}
      </div>
    </Layout>
  );
};

export default Homepage;
