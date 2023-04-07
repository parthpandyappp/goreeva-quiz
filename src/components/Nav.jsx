import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { signInWithGoogle, saveUserAndValidate, handleLogout } from "../utils";
import { useRecoilState } from "recoil";
import { authState } from "../recoil";

const Nav = () => {
  const [bufferData, setBufferData] = useState(null);
  const [authUser, setAuthUser] = useRecoilState(authState);

  useEffect(() => {
    if (bufferData !== null) {
      (async () => {
        const user = await saveUserAndValidate(bufferData);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);
        setAuthUser({ ...authUser, authUser: user, isLoggedIn: true });
      })();
    }
  }, [bufferData]);

  console.log("USER: ", authUser);

  return (
    <nav className="flex-none px-2 py-2 border-2">
      <section className="flex justify-between">
        <Link to="/">
          <h1 className="text-xl font-bold flex items-center cursor-pointer">
            <span className="text-2xl">🧶</span>Goreeva
          </h1>
        </Link>
        <div className="flex gap-2 items-center">
          {authUser.isLoggedIn ? (
            <>
              <p>Hi, {authUser?.authUser?.name.split(" ")[0]}👋</p>
              <button
                className="bg-red-400 rounded px-4 py-1 text-white"
                onClick={() => handleLogout(setAuthUser)}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="bg-red-400 rounded px-4 py-1 text-white"
              onClick={() => signInWithGoogle(setBufferData)}
            >
              Login
            </button>
          )}
        </div>
      </section>
    </nav>
  );
};

export { Nav };
