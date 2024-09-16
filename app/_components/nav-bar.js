"use client";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-between bg-black text-black px-10 py-10 w-full">
        <button>
          <p className="text-white">On The Go Logo</p>
        </button>
        <div className="flex space-x-10">
          <button className="bg-white px-10 py-5 rounded-md">
            Get A Quote
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={50}
              height={50}
              className="fill-current bg-white p-1 rounded-md"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
