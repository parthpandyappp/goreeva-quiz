import { Route, Routes } from "react-router-dom";
import { Home, CreateQuiz, AvailableQuiz, Quest } from "../pages";

const Endpoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-quiz" element={<CreateQuiz />} />
      <Route path="/attempt" element={<AvailableQuiz />} />
      <Route path="/quest/:qid" element={<Quest />} />
    </Routes>
  );
};

export { Endpoints as Routes };
