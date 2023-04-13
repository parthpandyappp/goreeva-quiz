import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col grow h-full w-full">
      <section className="flex flex-col gap-2 justify-center items-center h-full w-full items-center">
        <img
          className="h-1/4"
          src="https://i.ibb.co/KW06YFX/undraw-quick-chat-re-bit5.png"
          alt=""
        />
        <h1 className="text-4xl font-semibold">Goreeva Quiz</h1>
        <p className="text-sm">
          Play, learn, and conquer -Feed your curiosity, fuel your passion
        </p>
        <div className="flex gap-3 items-center">
          <Link to="/create-quiz">
            <button className="bg-red-400 px-2 py-1 rounded text-white">
              Create a quiz
            </button>
          </Link>
          <Link to="/attempt">
            <button className="border-2 border-red-400 px-2 py-1 rounded">
              Attempt a quiz
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export { Home };
