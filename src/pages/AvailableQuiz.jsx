import { useEffect, useState } from "react";
import { QuizCard } from "../components";
import { getQuizData } from "../utils";
import { useRecoilValue } from "recoil";
import { authState } from "../recoil";

const AvailableQuiz = () => {
  const [quizData, setQuizData] = useState([]);
  const user = useRecoilValue(authState);

  useEffect(() => {
    (async () => {
      setQuizData(await getQuizData(user.authUser.uid));
    })();
  }, []);
  return (
    <div className="flex flex-col grow h-full w-full text-center mt-2">
      <h1 className="text-3xl font-bold">Grab a quest & excel</h1>
      <section className="flex flex-wrap justify-center gap-2 mt-4 w-3/4 mx-auto">
        {quizData?.map((d) => {
          return (
            <QuizCard key={d.id} title={d.title} content={d.description} />
          );
        })}
      </section>
    </div>
  );
};

export { AvailableQuiz };
