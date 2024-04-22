import React, { useContext } from "react";
import appContext from "../context/appContext";

const MainContent = () => {
  const { selectedAction } = useContext(appContext);
  return (
    <main>
      <form action="">
        <h2>{selectedAction} form</h2>
        <input type="text" name="name" id="name" placeholder="Name" required />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="password2"
          id="password2"
          placeholder="Confirm Password"
          required
        />
        <input type="submit" value="Register" />
      </form>
      <div>
        <ul>
          <h2>list of {selectedAction}</h2>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
        </ul>
      </div>
    </main>
  );
};

export default MainContent;
