import { useContext } from "react";
import { MyFirstContext } from "../../../state/MyFirstContext";

export const CompA = () => {
  const { setSomeNum } = useContext(MyFirstContext);

  const userTypeSomthing = (theInputVal: string) => {
    //using + sign to convert from string to number
    setSomeNum(+theInputVal);
  };
  return (
    <div style={{ border: "2px solid blue", padding: "20px" }}>
      <h2>CompA</h2>
      <input
        type="text"
        onInput={(e) => {
          userTypeSomthing((e.target as HTMLInputElement).value);
        }}
      />
    </div>
  );
};
