import { useContext } from "react";
import "./SpeakerDetailedView.css";
import { MyFirstContext } from "../../state/MyFirstContext";

export const SpeakerDetailedView = () => {
  const { theClickedPerson } = useContext(MyFirstContext);

  return (
    <div>
      Detailed
      <img
        src={theClickedPerson.picture.large}
        alt={theClickedPerson.name.first}
      />
      <p>
        {theClickedPerson.name.first} {theClickedPerson.name.last}
      </p>
      <p>{theClickedPerson.email} </p>
    </div>
  );
};
