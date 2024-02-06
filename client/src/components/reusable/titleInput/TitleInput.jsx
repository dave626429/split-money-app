import React, { useRef, useState } from "react";
import "./style.css";

export default function TitleInput() {
  const inputRef = useRef(null);
  const underlineRef = useRef(null);
  const [inputValue, setInputValue] = useState("Untitled Group");
  return (
    <div className="title-input-container">
      <input
        type="text"
        name=""
        className="title-input"
        ref={inputRef}
        value={inputValue}
        onBlur={(e) => {
          if (e.currentTarget.value.trim().length === 0) {
            console.log(e.currentTarget.value.trim().length);
            setInputValue("Untitled Group");
          }
        }}
        onChange={(e) => {
          const trimmedValue = e.target.value.replace(/\s+/g, " ");
          setInputValue(trimmedValue);
          let span = document.createElement("span");
          inputRef.current.parentElement.appendChild(span);
          span.style.fontSize = "16px";
          span.innerText = e.target.value.replace(/\s+/g, " ");

          const { offsetWidth } = span;
          inputRef.current.parentElement.removeChild(span);
          const maxWidth = 150;

          // console.log(maxWidth, offsetWidth);

          if (maxWidth < offsetWidth) {
            inputRef.current.style.maxWidth = offsetWidth + 6.5 * 2 + "px";
            underlineRef.current.style.maxWidth = offsetWidth + 6 + "px";
          }

          if (offsetWidth < 150) {
            inputRef.current.style.maxWidth =
              underlineRef.current.style.maxWidth = 150 + "px";
          }
        }}
      />
      <div ref={underlineRef} className="underline"></div>
    </div>
  );
}
