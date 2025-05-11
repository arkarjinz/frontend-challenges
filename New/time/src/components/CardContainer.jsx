import React from "react";
import ProfileCard from "./ProfileCard.jsx";
import TimeCard from "./TimeCard.jsx";

function CardContainer() {
  return (
    <>
      <div className="bg-Navy-950 w-screen min-h-screen flex justify-center items-centerp  ">
        <div className="w-[960px] grid grid-cols-1 md:grid-cols-4 grid-auto auto-rows-[250px] gap-6 mx-4 my-8">
          <div className="row-start-1 row-end-3">
            <ProfileCard />
          </div>
          <div>
            <TimeCard
              time="32hrs"
              cardTitle="Work"
              subTime="36hrs"
              image="/images/icon-work.svg"
              bgColor="bg-Orange"
            />
          </div>
          <div>
            <TimeCard
              time="10hrs"
              cardTitle="Play"
              subTime="8hrs"
              image="/images/icon-play.svg"
              bgColor="bg-Blue"
            />
          </div>
          <div>
            <TimeCard
              time="4hrs"
              cardTitle="Study"
              subTime="7hrs"
              image="/images/icon-study.svg"
              bgColor="bg-Pink"
            />
          </div>
          <div>
            <TimeCard
              time="4hrs"
              cardTitle="Exercise"
              subTime="5hrs"
              image="/images/icon-exercise.svg"
              bgColor="bg-Green"
            />
          </div>
          <div>
            <TimeCard
              time="8hrs"
              cardTitle="Social"
              subTime="10hrs"
              image="/images/icon-social.svg"
              bgColor="bg-Purple-700"
            />
          </div>
          <div>
            <TimeCard
              time="2hrs"
              cardTitle="Self Care"
              subTime="2hrs"
              image="/images/icon-self-care.svg"
              bgColor="bg-Yellow"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardContainer;
