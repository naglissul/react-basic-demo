import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useParams } from "react-router-dom";
import MainPage from "./MainPage";

interface Entry {
  cat: string;
  desc: string;
  id: number;
  img: string;
  price: number;
  title: string;
}

interface Data {
  Items: Entry[];
  LastEvaluatedKey: {
    id: string;
  };
}

function App() {
  const [count, setCount] = useState<number>(0);
  //const [entries, setEntries] = useState<Data>();

  const entries = useState<Data>()[0];
  const setEntries = useState<Data>()[1];

  const { num } = useParams<{ num: string }>();

  useEffect(() => {
    fetch("https://api.demoblaze.com/entries")
      .then((res) => res.json())
      .then((data) => {
        setEntries(data);
      });
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <h1>Paduotas skaicius: {num}</h1>

      <MainPage num1={1} num2={2}>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button>Click me</button>
        <input type="text" />
      </MainPage>

      <pre>{JSON.stringify(entries, null, 2)}</pre>
    </>
  );
}

export default App;
