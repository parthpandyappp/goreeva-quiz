import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex-none px-2 py-2 border-2">
      <section className="flex justify-between">
        <Link to="/">
          <h1 className="text-xl font-bold flex items-center cursor-pointer">
            <span className="text-2xl">🧶</span>Goreeva
          </h1>
        </Link>
        <div className="flex gap-2 items-center">
          <p>Hi, Parth👋</p>
          <button className="bg-red-400 rounded px-4 py-1 text-white">
            Logout
          </button>
        </div>
      </section>
    </nav>
  );
};

export { Nav };
