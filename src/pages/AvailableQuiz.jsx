import { useEffect, useState } from "react";
import { QuizCard } from "../components";
import { getQuizData } from "../utils";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState, quizState } from "../recoil";
import { FiLoader } from "react-icons/fi";

const AvailableQuiz = () => {
  const [quizData, setQuizData] = useRecoilState(quizState);
  const user = useRecoilValue(authState);

  useEffect(() => {
    (async () => {
      setQuizData(await getQuizData(user.authUser.uid));
    })();
  }, []);
  return (
    <div className="flex flex-col grow h-full w-full text-center mt-2">
      <h1 className="text-3xl font-bold">Grab a quest & excel</h1>
      {quizData.length > 0 ? (
        <section className="flex flex-wrap justify-center gap-2 mt-4 w-3/4 mx-auto">
          {quizData?.map((d) => {
            return (
              <QuizCard
                key={d.id}
                title={d.title}
                content={d.description}
                qdata={d}
              />
            );
          })}
        </section>
      ) : (
        <section className="flex justify-center items-center h-full">
          <p className="flex gap-1 text-lg">
            Loading
            <span>
              <FiLoader className="text-3xl" />
            </span>
          </p>
        </section>
      )}
    </div>
  );
};

export { AvailableQuiz };
