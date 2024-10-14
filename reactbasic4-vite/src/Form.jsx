import { useState } from "react";

function Form1() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const inputName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const inputAge = (e) => {
    console.log(e.target.value);
    setAge(e.target.value);
  };

  return (
    <>
      <h2>폼 1.jsx</h2>
      이름; <input type="text" value={name} onChange={inputName} />
      나이; <input type="text" value={age} onChange={inputAge} />
      나이;{" "}
      <input
        type="text"
        value={age}
        onChange={(e) => {
          setAge(Number(e.target.value));
        }}
      />
    </>
  );
}

export default Form1;
