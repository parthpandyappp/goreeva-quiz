import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../recoil";
import { notifyUserToLogin } from "../utils";
import { motion } from "framer-motion";

const Home = () => {
  const user = useRecoilValue(authState);
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="flex flex-col grow h-full w-full"
    >
      <section className="flex flex-col gap-2 justify-center items-center h-full w-full items-center">
        <motion.img
          initial={{ scale: 0.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="h-1/4"
          src="https://i.ibb.co/KW06YFX/undraw-quick-chat-re-bit5.png"
          alt=""
        />
        <h1 className="text-4xl font-semibold">Goreeva Quiz</h1>
        <p className="text-sm">
          Play, learn, and conquer -Feed your curiosity, fuel your passion
        </p>
        <div className="flex gap-3 items-center">
          <motion.button
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
            className="border-2 border-red-400 bg-red-400 px-2 py-1 rounded text-white"
            onClick={() =>
              !user.isLoggedIn ? notifyUserToLogin() : navigate("/create-quiz")
            }
          >
            Create a quiz
          </motion.button>
          <motion.button
            initial={{ x: 250 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
            className="border-2 border-red-400 px-2 py-1 rounded"
            onClick={() =>
              !user.isLoggedIn ? notifyUserToLogin() : navigate("/attempt")
            }
          >
            Attempt a quiz
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export { Home };
