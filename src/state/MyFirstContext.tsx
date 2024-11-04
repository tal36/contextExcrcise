// part 1 - declaring what is available in our context (our "storage").

import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Person } from "../types";

interface cntxVals {
  someNum: number;
  setSomeNum: Dispatch<SetStateAction<number>>;

  someStr: string;
  setSomeStr: Dispatch<SetStateAction<string>>;

  theClickedPerson: Person;
  setTheClickedPerson: Dispatch<SetStateAction<Person>>;

  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;

  personName: string; // Change from boolean to string
  setPersonName: Dispatch<SetStateAction<string>>;

  salutation: string; // Change from boolean to string
  setSalutation: Dispatch<SetStateAction<string>>;
}

// part2 - giving values to everything that ia availible in our context, for improper usage of the context (trying to use the context where we did not "allow" using it).

export const MyFirstContext = createContext<cntxVals>({
  someNum: 8,
  setSomeNum: () => {},
  someStr: "wd9",
  setSomeStr: () => {},
  theClickedPerson: {
    name: {
      first: "NA",
      last: "NA",
    },
    email: "NA",
    picture: {
      large: "NA",
    },
  },
  setTheClickedPerson: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  personName: "", // Use a default string value
  setPersonName: () => {},
  salutation: "", // Use a default string value
  setSalutation: () => {},
});

//part3 - code which will actually return the values of everything thats in "part 1". written using very specific rules.

export const MyFirstProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [someNum, setSomeNum] = useState(10);
  const [someStr, setSomeStr] = useState("Ten");
  const [theClickedPerson, setTheClickedPerson] = useState<Person>({
    name: {
      first: "A",
      last: "T",
    },
    email: "AT@gmail.com",
    picture: {
      large: "Nothing",
    },
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [personName, setPersonName] = useState("NA"); // default as string
  const [salutation, setSalutation] = useState("NA"); // default as string

  let theVals = {
    someNum,
    setSomeNum,
    someStr,
    setSomeStr,
    theClickedPerson,
    setTheClickedPerson,
    isLoggedIn,
    setIsLoggedIn,
    personName,
    setPersonName,
    salutation,
    setSalutation,
  };

  return (
    <MyFirstContext.Provider value={theVals}>
      {children}
    </MyFirstContext.Provider>
  );
};
