import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section>
      <nav>
        <ul className="h-[100vh] flex gap-8 justify-center items-center">
          <Link to="/registration">
            <li className="text-lg md:text-4xl font-bold underline">
              Registration
            </li>
          </Link>
          <Link to="/login">
            <li className="text-lg md:text-4xl font-bold underline">Login</li>
          </Link>

          <Link to="/form">
            <li className="text-lg md:text-4xl font-bold underline">Courses</li>
          </Link>
          <Link to="/cards">
            <li className="text-lg md:text-4xl font-bold underline">Cards</li>
          </Link>
        </ul>
      </nav>
    </section>
  );
};

export default Nav;
