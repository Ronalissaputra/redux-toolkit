import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProdukById } from "../api/produk/produkService";
import { FallingLines } from "react-loader-spinner";

const Detailpage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.produk);

  useEffect(() => {
    dispatch(getProdukById(id));
  }, [dispatch, id]);

  if (error === "Request failed with status code 404") {
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className="text-center">
          Error : {error}
          <p>Silahkan Klik Detail pada List Produk...</p>
          <div className="mt-5">
            <Link
              to="/"
              className="p-2 bg-green-500 rounded-sm text-slate-200 font-semibold"
            >
              Kembali ke Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
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

  return (
    <Layout>
      <h2 className="text-center my-10 text-2xl">Detail Produk</h2>
      <p>{data.title}</p>
    </Layout>
  );
};

export default Detailpage;
