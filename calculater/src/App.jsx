import React from 'react';
import Button from './components/Button';
import ButtonBox from './components/ButtonBox';
import Card from './components/Card';
import Screen from "./components/Screen"


const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],   
  [1, 2, 3, "+"],
  [0, ".", "="],
];

export default function App() {
  return (
    <Card>
      <Screen values={"Your screen values"} />
      <ButtonBox>
        {
          btnValues.flat().map((btn, i) => (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={() => {
                console.log(`${btn} clicked!`);
              }}
            />
          ))
        }
      </ButtonBox>
    </Card>
  );
}
