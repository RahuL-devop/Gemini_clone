import { createContext, useState } from "react";
import runChat from "../config/gemini";
import Loader from "../components/partials/Loader";

export const context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    try {
      setResultData("");
      setLoading(true);
      setShowResult(true);
      setRecentPrompt(input);
      setPreviousPrompt((prev) => [...prev, input]);

      const timeout = setTimeout(() => {
        alert("Timeout occurred. Please retry.");
        setLoading(false);
        setShowResult(false);
      }, 10000);

      const response = await runChat(input);
      clearTimeout(timeout);

      setResultData(response);
      setLoading(false);
    } catch (error) {
      // Handle the error here
      alert("An internal error has occurred. Please retry or report.");
      console.error("Error:", error);
      setLoading(false);
      setShowResult(false);
    }
  };

  const contextValue = {
    previousPrompt,
    setPreviousPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return (
    <context.Provider value={contextValue}>{props.children}</context.Provider>
  );
};

export default ContextProvider;
