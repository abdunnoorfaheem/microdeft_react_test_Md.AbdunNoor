import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FormsData = () => {

  let [title, setTitle]=useState("");
  let [description, setDescription]=useState("");
  let [badgeText, setBadgeText]=useState("");
  let [badgeColor, setBadgeColor]=useState("");
  let [instructorName, setInstructorName]=useState("");


  let handleTitle =(e)=>{
    setTitle(e.target.value);
  }
  let handleDescription =(e)=>{
    setDescription(e.target.value);
  }

  let handleBadgeText =(e)=>{
    setBadgeText(e.target.value);
  }

  let handleBadgeColor = (e)=>{
    setBadgeColor(e.target.value);
  }

  let handleInstructorName = (e)=>{

    setInstructorName(e.target.value);
  }

   let token = JSON.parse(localStorage.getItem("authToken"));

   
   let navigate = useNavigate();

  useEffect(()=>{

    if(!token){
      navigate('/login');
    }

  },[])

  let handleSubmit =async (e)=>{
    e.preventDefault();


 
    try {
      let courseData = {
        title: title,
        description: description,
        badge_text: badgeText,
        badge_color: badgeColor,
        instructor_name:instructorName
      };
      let postData = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        courseData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`

          },
        }
      );
      alert("Successfully Submitted");
      console.log(postData);
      

      // setTimeout(() => {
      //   navigate("/login");
      // }, 2000);
    } catch (error) {
      console.log(error);
    } 
 

  }
  

  // let dataCourses = axios.get('')


  return (
    <section className='bg-[url("./assets/background/backgroundFour.jpg")]'>
      <div className="container mx-auto flex justify-center items-center w-[100vw] h-[100vh]">
        <div className="bg-[#d8d4cf59] rounded-lg h-[500px] w-[700px]  flex justify-center items-center flex-col">
          <h1 className="text-3xl font-bold py-3 underline">Add Course  Data</h1>
          <form action="" method="POST">
            <div>
              <input
              onChange={handleTitle}
                className="outline-none px-6 py-3 mt-2 rounded-lg"
                placeholder="Title"
                type="text"
                name=""
                id=""
              />
            </div>
            <div>
              <input
              onChange={handleDescription}
                className="outline-none px-6 py-3 mt-2 rounded-lg"
                placeholder="Description"
                type="text"
                name=""
                id=""
              />
            </div>
            <div>
              <input
              onChange={handleBadgeText}
                className="outline-none px-6 py-3 mt-2 rounded-lg"
                placeholder="Badge Text"
                type="text"
                name=""
                id=""
              />
            </div>
            <div>
              <input
              onChange={handleBadgeColor}
                className="outline-none px-6 py-3 mt-2 rounded-lg"
                placeholder="Badge Color"
                type="text"
                name=""
                id=""
              />
            </div>
            <div>
              <input
              onChange={handleInstructorName}
                className="outline-none px-6 py-3 mt-2 rounded-lg"
                placeholder="Instructor Name"
                type="text"
                name=""
                id=""
              />
            </div>
            
            <div className="mt-3 flex justify-center">
              <button onClick={handleSubmit} className="bg-[#ececea] px-10 py-2 rounded-md font-bold">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div>

        </div>
      </div>
    </section>
  );
};

export default FormsData;
