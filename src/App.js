import React, { useEffect, useState } from "react";
import downIcon from "./images/arrow-down-sign-to-navigate.png";
import { handleTranslate } from "./services";

const App = () => {
  const [showOptionSrc, setShowOptionSrc] = useState(false);
  const [langSrc, setLangSrc] = useState("en");
  const [langTarget, setLangTarget] = useState("vi");
  const [textSrc, setTextSrc] = useState("");
  const [textResult, setTextResult] = useState("");

  const setLanguageSrc = (lang) => {
    setLangSrc(lang);
    setShowOptionSrc(false);
    if (lang === "vi") {
      setLangTarget("en");
    } else {
      setLangTarget("vi");
    }
  };

  const handleToggle = () => {
    setShowOptionSrc(!showOptionSrc);
  };

  const handleOnChange = (e) => {
    setTextSrc(e.target.value);
  };

  useEffect(() => {
    let timerId;
    if (textSrc) {
      timerId = setTimeout(() => {
        handleTranslate(langSrc, langTarget, textSrc, setTextResult);
      }, 300);
    } else {
      setTextResult("");
    }
    return () => clearTimeout(timerId);
  }, [textSrc, langTarget, langSrc]);

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="max-w-wrapper w-full  bg-red-500 m-t-5 p-4 flex flex-col  gap-2 md:flex-row">
        <div className="flex flex-col md:flex-1">
          <div className="bg-white relative py-2 px-3 rounded-t-lg border border-gray-500 font-mono">
            <div
              onClick={handleToggle}
              className="flex justify-between items-center cursor-pointer"
            >
              <h4>{langSrc === "en" ? "Tiếng Anh" : "Tiếng Việt"}</h4>
              <img src={downIcon} alt="down-icon" className="w-3" />
            </div>
            {showOptionSrc && (
              <ul className="absolute top-full mt-1 left-0 w-full h-auto bg-white border border-gray-500">
                <li
                  onClick={() => setLanguageSrc("en")}
                  className="py-1 px-3 hover:bg-green-400 cursor-pointer"
                >
                  Tiếng Anh
                </li>
                <li
                  onClick={() => setLanguageSrc("vi")}
                  className="py-1 px-3 hover:bg-green-400 cursor-pointer"
                >
                  Tiếng Việt
                </li>
              </ul>
            )}
          </div>
          <textarea
            placeholder="Nhập văn bản "
            value={textSrc}
            onChange={handleOnChange}
            className="min-h-box mt-1 rounded-b-lg outline-none p-3 text-lg font-mono"
          ></textarea>
        </div>

        {/* two */}

        <div className="flex flex-col md:flex-1">
          <div className="bg-white relative py-2 px-3 rounded-t-lg border border-gray-500 font-mono">
            <div className="flex justify-between items-center">
              <h4>{langSrc === "vi" ? "Tiếng Anh" : "Tiếng Việt"}</h4>
            </div>
          </div>
          <textarea
            value={textResult}
            readOnly
            placeholder="Bản dịch"
            className="min-h-box mt-1 rounded-b-lg outline-none p-3 text-lg font-mono"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default App;
