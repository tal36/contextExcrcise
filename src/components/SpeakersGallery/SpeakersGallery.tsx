import { useEffect, useState } from "react";
import { SpeakerDetailedView } from "../SpeakerDetailedView/SpeakerDetailedView";
import "./SpeakersGallery.css";
import { Person } from "../../types";

import { SpeakerCard } from "../SpeakerCard/SpeakerCard";

export const SpeakersGallery = () => {
  const [speakersArr, setSpeakersArr] = useState<Person[]>(); // an array that will contain all the persons

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((dataFromApi) => {
        return dataFromApi.json(); // return a JSON object so we can use the data from the api
      })
      .then((dataAsObj) => {
        // now we get the sata as an object and we can use the data
        setSpeakersArr(dataAsObj.results);
      });
  }, []);
  return (
    <div>
      <h2>This is Gallery</h2>
      <div className="galleryMainContent">
        <div className="divAroundCards">
          {speakersArr?.map((curr) => {
            return <SpeakerCard person={curr} />;
          })}
        </div>
        <SpeakerDetailedView />
      </div>
    </div>
  );
};
