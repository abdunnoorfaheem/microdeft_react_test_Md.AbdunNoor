import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleName = (e) => {
    setName(e.target.value);
  };

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userData = {
        name: name,
        email: email,
        password: password,
      };
      let postData = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/register",
        userData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      alert("Successfully Submitted");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='bg-[url("./assets/background/backgroundTwo.jpg")]'>
      <div className="container mx-auto flex justify-center items-center w-[100vw] h-[100vh]">
        <div className="bg-[#ad926f59] rounded-lg h-[500px] w-[700px]  flex justify-center items-center flex-col">
          <h1 className="text-3xl font-bold py-3 underline">
            Registration From
          </h1>
          <form action="" method="POST">
            <div>
              <input
                onChange={handleName}
                className="outline-none px-6 py-3 mt-2 rounded-lg"
                placeholder="Name"
                type="text"
              />
            </div>
            <div>
              <input
                onChange={handleEmail}
                className="outline-none px-6 py-3 mt-2 rounded-lg"
                placeholder="Email"
                type="email"
              />
            </div>
            <div>
              <input
                onChange={handlePassword}
                className="outline-none px-6 py-3 mt-2 rounded-lg"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="mt-3 flex justify-center">
              <button
                onClick={handleSubmit}
                className="bg-[#cdaa7d] px-10 py-2 rounded-md font-bold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;
