import { Link } from "react-router-dom";
import "./NavBar.css";
import { NavItem } from "./NavBarInfo";
import { useContext, useState } from "react";
import { MyFirstContext } from "../../state/MyFirstContext";

const NavBar = (props: { theArr: NavItem[] }) => {
  const {
    someNum,
    someStr,
    isLoggedIn,
    setIsLoggedIn,
    personName,
    setPersonName,
    salutation,
    setSalutation,
  } = useContext(MyFirstContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkLoginDetails = () => {
    fetch("https://cyberstars.onrender.com/qa-exercises/login/json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((theData) => {
        return theData.json();
      })
      .then((dataAsObj) => {
        console.log("Server response:", dataAsObj);
        setIsLoggedIn(dataAsObj.loginCorrect);
        setPersonName(dataAsObj.personName); // Assuming dataAsObj includes personName
        setSalutation(dataAsObj.salutation); // Assuming optional salutation

        // setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error("Error fetching login data:", error);
      });
  };

  return (
    <div className="NavBar">
      <div>
        <h3>{someNum}</h3>
        <h3>{someStr}</h3>
      </div>
      {props.theArr.map((curr) => {
        return (
          <div>
            <Link to={curr.hrefStr}> {curr.displayStr} </Link>
          </div>
        );
      })}
      <div>
        <h3>
          {isLoggedIn ? `Hello ${salutation} ${personName}` : "Please Login"}
        </h3>

        {!isLoggedIn && (
          <div className="NavBar_LoginDetails">
            <input
              type="text"
              placeholder="username"
              onInput={(e) => {
                setUsername((e.target as HTMLInputElement).value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              onInput={(e) => {
                setPassword((e.target as HTMLInputElement).value);
              }}
            />
            <input type="button" value="login" onClick={checkLoginDetails} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
