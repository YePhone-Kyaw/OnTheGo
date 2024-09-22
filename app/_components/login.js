import Link from "next/link";

export default function LogIn() {
  return (
    <div className="bg-white text-black pt-20 pb-20 pl-52 pr-52 items-center">
      <div className=" flex flex-col justify-center border-opacity-80 border-2 border-black p-20 text-center">
        <div className="flex flex-col space-y-10">
          <b>
            <h3 className="text-3xl">Sign In</h3>
          </b>
          <p>Use your email address to sign into your account</p>

          <b>
            <h4 className="text-xl underline">Email or UserID</h4>
          </b>
        </div>
        <div className="flex flex-col items-center">
          <input
            type="email"
            id="email"
            className="w-80 mt-5 p-2 border rounded"
            required
            placeholder="Email or UserID"
          />
          <input
            type="password"
            id="password"
            className="w-80 mt-5 p-2 border rounded"
            required
            placeholder="Enter Password"
          />
          <button className="w-80 mt-10 p-2 border rounded bg-orange-500">
            Log In
          </button>
          <p className="text-sm mt-5 max-w-80">
            By selecting Sign In, you agree to our <b>Terms</b> and acknowledge
            our <b>Privacy Statement</b>
          </p>
        </div>
        <b><p className="mt-14 text-xl">New to ONTHEGO Production?<Link href="/pages/signup" className="text-blue-800 underline">Create an account</Link></p></b>
      </div>
    </div>
  );
}
