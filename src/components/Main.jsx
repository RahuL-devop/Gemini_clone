import React, { useContext } from "react";
import logo from "../../public/logo.svg";
import {
  bulb_icon,
  code_icon,
  compass_icon,
  gallery_icon,
  message_icon,
  mic_icon,
  send_icon,
  user_icon,
} from "../assets/assets";
import Card from "./partials/Card";
import { context } from "../context/context";
import Loader from "./partials/Loader";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    setResultData,
  } = useContext(context);

  const cardsData = [
    {
      description: "sugest beautifull places to see a upcomming road trip",
      icon: compass_icon,
    },
    {
      description: "Brefly summerize about the concept :- urban palanning",
      icon: bulb_icon,
    },
    {
      description: "brain strom team bonding activities for our work retreat ",
      icon: message_icon,
    },
    {
      description: " improve thhe readability of the followingg code",
      icon: code_icon,
    },
  ];
  return (
    <>
      <div className="Main relative min-h-[100vh] w-full flex-1 pb-[15vh]">
        <div className="main__nav flex items-center justify-between p-[20px] text-[#585858]">
          <div className="flex gap-1">
            <img src={logo} alt="" />
            <p>Gemini</p>
          </div>
          <img className="w-[40px] rounded-full" src={user_icon} alt="" />
        </div>
        <div className="main__container px-[12vw]">
          {!showResult ? (
            <>
              <div className="container__greet text-[4vw] font-[600] leading-none ">
                <span className="">Hello, Dev.</span>
                <p className="mt-[1.2vw] text-[#c4c7c5]">
                  How can I help you today?
                </p>
              </div>
              <div className="main__cardContainer flex flex-wrap gap-4">
                {cardsData.map((e, i) => {
                  return <Card e={e} key={i} />;
                })}
              </div>
            </>
          ) : (
            <div className="result  flex max-h-[70vh] flex-col gap-8 overflow-y-scroll">
              <div className="result__title flex items-center gap-4">
                <img
                  className="w-[25px] rounded-full"
                  src={user_icon}
                  alt="user_icon"
                />
                <p className="text-[12px] font-[400] leading-[28px] ">
                  {recentPrompt}
                </p>
              </div>

              {resultData ? (
                <div className="response">
                  <div className="responce__title flex items-start gap-4 ">
                    <img src={logo} alt="gemini logo" />
                    <p
                      dangerouslySetInnerHTML={{ __html: resultData }}
                      className="text-[14px] font-[300] leading-[1.8]"
                    ></p>
                  </div>
                </div>
              ) : (
                <Loader />
              )}
            </div>
          )}
        </div>

        <div className="main__bottom absolute bottom-0 ml-[20%] w-1/2 max-w-[1250px] py-[18px] ">
          <div className="bottom_searchBar flex items-center justify-between gap-8 rounded-3xl bg-[#f0f4f9] px-4 py-[6px]">
            <input
              type="text"
              placeholder="Enter Prompt here"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="h-full w-full flex-1 border-none bg-transparent p-[8px] text-[1.14vw] tracking-[1px] outline-none"
            />
            <div className="bottomItems flex items-center gap-3 ">
              <img
                src={mic_icon}
                alt=""
                className="rounded-full hover:bg-[#dadada]"
              />
              <img
                src={gallery_icon}
                alt=""
                className="rounded-full hover:bg-[#dadada]"
              />
              <img
                src={send_icon}
                alt=""
                className="rounded-full hover:bg-[#dadada]"
                onClick={() => {
                  onSent();
                  setInput("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    console.log("enter presssed");
                    onSent();
                    setInput("");
                  }
                }}
              />
            </div>
          </div>

          <div className="bottomInfo mt-2 text-center text-[0.8vw]">
            <p>
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy & Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
