import { Route, Routes } from "react-router-dom";
import Greeting from "./Greeting";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-red-500 text-center w-full uppercase mx-8">
        Greetings App
      </h1>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </>
  );
};

export default App;
