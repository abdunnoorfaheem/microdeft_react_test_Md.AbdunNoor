import React from "react";
import product from "../assets/product/productOne.jpg";
import JS from "../assets/product/js.jpeg";
import Mern from "../assets/product/mern.jpeg";
import nodejs from "../assets/product/nodejs.png";
import react from "../assets/product/react.jpg";

const Cards = () => {
  return (
    <section className="">
      <div className="container mx-auto md:flex justify-between py-20">
        <div className="md:w-[23%] shadow-xl">
          <div>
            <img style={{ height: "250px", width: "100%" }} src={JS} alt="" />
          </div>
          <h2
            style={{
              fontSize: "28px",
              textAlign: "center",
              paddingTop: "5px",
              fontFamily: "bold",
            }}
          >
            Javascript for Beginner
          </h2>
          <p style={{ color: "gray", textAlign: "center" }}>
            JavaScript is the world's most popular programming language.
            JavaScript is the programming language of the Web. JavaScript is
            easy to learn. This tutorial will teach you JavaScript from basic to
            advanced.
          </p>
          <div
            style={{
              border: "",
              background: "lightgray",
              fontFamily: "bold",
              textAlign: "center",
              paddingTop: "3px",
              paddingBottom: "3px",
              fontSize: "20px",
            }}
          >
            <button>Course Details</button>
          </div>
        </div>
        <div className="md:w-[23%] shadow-xl">
          <div>
            <img style={{ height: "250px", width: "100%" }} src={Mern} alt="" />
          </div>
          <h2
            style={{
              fontSize: "28px",
              textAlign: "center",
              paddingTop: "5px",
              fontFamily: "bold",
            }}
          >
            Mern for Beginner
          </h2>
          <p style={{ color: "gray", textAlign: "center" }}>
            JavaScript is the world's most popular programming language.
            JavaScript is the programming language of the Web. JavaScript is
            easy to learn. This tutorial will teach you JavaScript from basic to
            advanced.
          </p>
          <div
            style={{
              border: "",
              background: "lightgray",
              fontFamily: "bold",
              textAlign: "center",
              paddingTop: "3px",
              paddingBottom: "3px",
              fontSize: "20px",
            }}
          >
            <button>Course Details</button>
          </div>
        </div>
        <div className="md:w-[23%] shadow-xl">
          <div>
            <img
              style={{ height: "250px", width: "100%" }}
              src={nodejs}
              alt=""
            />
          </div>
          <h2
            style={{
              fontSize: "28px",
              textAlign: "center",
              paddingTop: "5px",
              fontFamily: "bold",
            }}
          >
            Node js for Beginner
          </h2>
          <p style={{ color: "gray", textAlign: "center" }}>
            JavaScript is the world's most popular programming language.
            JavaScript is the programming language of the Web. JavaScript is
            easy to learn. This tutorial will teach you JavaScript from basic to
            advanced.
          </p>
          <div
            style={{
              border: "",
              background: "lightgray",
              fontFamily: "bold",
              textAlign: "center",
              paddingTop: "3px",
              paddingBottom: "3px",
              fontSize: "20px",
            }}
          >
            <button>Course Details</button>
          </div>
        </div>
        <div className="md:w-[23%] shadow-xl">
          <div>
            <img
              style={{ height: "250px", width: "100%" }}
              src={react}
              alt=""
            />
          </div>
          <h2
            style={{
              fontSize: "28px",
              textAlign: "center",
              paddingTop: "5px",
              fontFamily: "bold",
            }}
          >
            React for Beginner
          </h2>
          <p style={{ color: "gray", textAlign: "center" }}>
            JavaScript is the world's most popular programming language.
            JavaScript is the programming language of the Web. JavaScript is
            easy to learn. This tutorial will teach you JavaScript from basic to
            advanced.
          </p>
          <div
            style={{
              border: "",
              background: "lightgray",
              fontFamily: "bold",
              textAlign: "center",
              paddingTop: "3px",
              paddingBottom: "3px",
              fontSize: "20px",
            }}
          >
            <button>Course Details</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
