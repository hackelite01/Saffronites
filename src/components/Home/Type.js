import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "E-mail Writing Demo",
          "E-mail Templates",
          "E-mail Formats",
          "Counsellors E-mail I'd",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
