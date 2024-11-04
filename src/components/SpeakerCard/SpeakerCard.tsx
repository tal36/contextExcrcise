import { useContext } from "react";
import { Person } from "../../types";
import "./SpeakerCard.css";
import { MyFirstContext } from "../../state/MyFirstContext";

export const SpeakerCard = (props: { person: Person }) => {
  const { setTheClickedPerson } = useContext(MyFirstContext);

  const theCardWsClicked = () => {
    setTheClickedPerson(props.person);
  };
  return (
    <div onClick={theCardWsClicked}>
      <img src={props.person.picture.large} alt={props.person.name.first} />
      <p>
        {props.person.name.first} {props.person.name.last}
      </p>
      <p></p>
    </div>
  );
};
