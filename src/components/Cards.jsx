import React from "react";
import product from "../assets/product/productOne.jpg";

const Cards = () => {
  return (
    <section className="">
      <div className="container mx-auto py-5">
        <div className="py-16 w-[100%] md:flex justify-between">
          <div
            className="w-[32%]"
            style={{
              maxHeight: "500px",
              maxWidth: "450px",
              boxShadow: "5px 5px 6px 3px",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
          >
            <div>
              <img
                src={product}
                alt=""
                style={{ maxHeight: "170px", width: "450px" }}
              />
            </div>
            <div>
              <h1
                style={{
                  fontSize: "2em",
                  fontFamily: "bold",
                  marginTop: "5px",
                  textAlign: "center",
                }}
              >
                Title For Card
              </h1>
              <p
                style={{
                  fontSize: "1em",
                  color: "gray",
                  marginTop: "8px",
                  textAlign: "center",
                }}
              >
                Lorem ipsum dolor sit amet consectetur magni aspernatur.
              </p>
            </div>
            <div>
              <button
                style={{
                  backgroundColor: "lightBlue",
                  width: "100%",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  fontSize: "1em",
                  fontFamily: "bold",
                  marginTop: "15px",
                  borderRadius: "4px",
                }}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
