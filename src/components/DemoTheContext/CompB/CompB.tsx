import { useContext } from "react";
import { MyFirstContext } from "../../../state/MyFirstContext";

export const CompB = () => {
  const { someNum, someStr } = useContext(MyFirstContext);
  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>
      CompB
      <h3>{someNum}</h3>
      <h3>{someStr}</h3>
    </div>
  );
};
