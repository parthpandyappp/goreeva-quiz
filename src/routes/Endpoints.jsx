import { Route, Routes } from "react-router-dom";
import { Home, CreateQuiz, AvailableQuiz } from "../pages";

const Endpoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-quiz" element={<CreateQuiz />} />
      <Route path="/attempt" element={<AvailableQuiz />} />
    </Routes>
  );
};

export { Endpoints as Routes };
