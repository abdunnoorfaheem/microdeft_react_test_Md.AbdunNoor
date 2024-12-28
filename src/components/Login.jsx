import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  //   let [token, setToken]=useState("");

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
        email: email,
        password: password,
      };
      let postData = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/login",
        userData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      alert("Successfully Log In");
      // setToken(postData.data.data.token);

      localStorage.setItem(
        "authToken",
        JSON.stringify(postData.data.data.token)
      );

      setTimeout(() => {
        navigate("/form");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='bg-[url("./assets/background/backgroundThree.jpg")]'>
      <div className="container mx-auto flex justify-center items-center w-[100vw] h-[100vh]">
        <div className="bg-[#504c4627] rounded-lg h-[500px] w-[700px]  flex justify-center items-center flex-col">
          <h1 className="text-3xl font-bold py-3 underline">Login Form</h1>
          <form action="" className="">
            <div>
              <input
                onChange={handleEmail}
                className="outline-none px-6 py-3 mt-2 rounded-lg"
                placeholder="Email"
                type="email"
                name=""
                id=""
              />
            </div>
            <div>
              <input
                onChange={handlePassword}
                className="outline-none px-6 py-3 mt-2 rounded-lg"
                placeholder="Password"
                type="password"
                name=""
                id=""
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

export default Login;
