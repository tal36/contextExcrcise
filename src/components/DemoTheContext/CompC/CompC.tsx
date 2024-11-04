import { useContext } from "react";
import { MyFirstContext } from "../../../state/MyFirstContext";
import { CompA } from "../CompA/CompA";
import { CompB } from "../CompB/CompB";
import "./CompC.css";

export const CompC = () => {
  const { setSomeStr } = useContext(MyFirstContext);
  const userTypedString = (theValue: string) => {
    setSomeStr(theValue);
  };
  return (
    <div className="CompC">
      <div>
        <h4>CompC</h4>
        <input
          type="text"
          onInput={(e) => {
            userTypedString((e.target as HTMLInputElement).value);
          }}
        />
      </div>
      <CompA />
      <CompB />
    </div>
  );
};
