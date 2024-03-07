import React, { useContext, useState } from "react";
import {
  history_icon,
  menu_icon,
  message_icon,
  plus_icon,
  question_icon,
  setting_icon,
} from "../assets/assets";
import { context } from "../context/context";

const Sidebar = () => {
  const bottomItems = [
    { icon: question_icon, text: "help" },
    { icon: history_icon, text: "activity" },
    { icon: setting_icon, text: "settings" },
  ];
  const [extendend, setExtendend] = useState(false);

  const toogleMenu = () => {
    setExtendend((prev) => !prev);
  };

  const { onSent, previousPrompt, setRecentPrompt, newChat } =
    useContext(context);

  return (
    <>
      <div className="sidebar hidden min-h-[100vh] cursor-pointer flex-col justify-between bg-[#f0f4f9] p-2 text-[1vw] font-[100]   md:inline-flex">
        <div className="sidebar__top">
          <img
            onClick={() => toogleMenu()}
            className="menu_icon ml-[10px] block"
            src={menu_icon}
            alt="menu_icon"
          />
          <div className="top__newChat text-grey mt-[30px] inline-flex items-center gap-[7px] rounded-3xl bg-[#e6eaf1] p-2 ">
            <img onClick={() => newChat()} src={plus_icon} alt="plus_icon" />
            {extendend ? (
              <p className="" onClick={() => newChat()}>
                Newchat
              </p>
            ) : null}
          </div>
          {extendend ? (
            <div className="top__recent flex flex-col gap-2 ">
              <div className="recent__title mb-2 mt-2 p-[9px] ">Recent</div>

              {previousPrompt.map((item, index) => {
                return (
                  <>
                    <div className="recent__entry flex items-center gap-[8px] rounded-3xl pl-[2px] text-[#282828] hover:bg-[#e2e6eb]">
                      <img src={message_icon} alt="message_icon" />
                      <p className="text-[1vw] ">{item.slice(0, 18)}...</p>
                    </div>
                  </>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="sidebar__bottom flex flex-col gap-[17px]">
          {bottomItems.map((item, index) => {
            return (
              <div
                key={index}
                className="sidebar__items flex items-center gap-[7px] rounded-2xl p-[5px] hover:bg-[#e2e6eb]"
              >
                <img src={item.icon} key={index} alt="" />
                {extendend ? <div>{item.text}</div> : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
