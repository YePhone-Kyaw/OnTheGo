
import Link from "next/link";
import Qoute from "./quote/page";
import LogInPage from "./pages/login/page";

export default function Home() {
  return (
    <main>
    {/* <LogInPage />
    <Qoute /> */}
    <header><font size = "10"><b>Main Page</b></font></header>
    <button className=" font-bold px-14 py-2 text-white bg-black border-2 border-white m-2 rounded hover:bg-purple-700 active:bg-blue-700">
      <Link href="pages/login">Login</Link>
    </button>
    <br></br>
    <Qoute />
    </main>
  );
}
