import React, { useContext } from "react";
import { context } from "../../context/context";

const Card = ({ e }) => {
  const { onSent, setpreviousPrompt } = useContext(context);

  const cardClick = () => {
    onSent(e.description);
    // setRecentPrompt(e.description);
    setpreviousPrompt(e.description);
    console.log("clicked");
  };

  return (
    <>
      <div
        onClick={() => cardClick()}
        className="main__card relative mt-16 h-[12.5rem] w-[12.5rem] cursor-pointer items-center overflow-hidden rounded-lg bg-[#f0f4f9] p-[2vw] text-black hover:bg-slate-300/60"
      >
        <div className="card__title">
          <p className="text-[1vw] font-[400] capitalize  leading-tight tracking-[0.5px]">
            {e.description}
          </p>
          <div className="card__image">
            <img
              className="absolute bottom-4 right-4 rounded-full bg-white  "
              src={e.icon}
              alt="compass_icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
