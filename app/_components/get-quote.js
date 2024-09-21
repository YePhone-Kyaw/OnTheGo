
function Quote() {
    return (
    <main className="flex flex-col justify-center items-center min-h-screen gap-10">
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-full max-w-xl bg-white p-10 shadow-md border border-black">
        <h1 className="text-2xl text-black font-bold mb-8 flex justify-center">
          Tell Us A Bit More About You
        </h1>
        <form>
          <div className="form-group mb-8 flex items-center">
            <label
              htmlFor="firstname"
              className="block text-black font-bold min-w-[150px] text-center"
            >
              First Name:
            </label>
            <input
              type="text"
              placeholder="What Is Your First Name?"
              name="First Name"
              className="block w-4/5 p-2 text-center border border-black text-sm mx-auto"
              required
            />
          </div>

          <div className="form-group mb-8 flex items-center">
            <label
              htmlFor="lastname"
              className="block text-black font-bold min-w-[150px] text-center"
            >
              Last Name:
            </label>
            <input
              type="text"
              placeholder="What Is Your Last Name?"
              name="Last Name"
              className="block w-4/5 p-2 text-center border border-black text-sm mx-auto"
              required
            />
          </div>

          <div className="form-group mb-8 flex items-center">
            <label
              htmlFor="companyname"
              className="block text-black font-bold min-w-[150px] text-center"
            >
              Company Name:
            </label>
            <input
              type="text"
              placeholder="What Company Do You Work For?"
              name="Company Name"
              className="block w-4/5 p-2 text-center border border-black text-sm mx-auto"
              required
            />
          </div>

          <div className="form-group mb-8 flex items-center">
            <label
              htmlFor="companyemail"
              className="block text-black font-bold min-w-[150px] text-center"
            >
              Company Email:
            </label>
            <input
              type="text"
              placeholder="What's Your Company Email Address?"
              name="Company Email"
              className="block w-4/5 p-2 text-center border border-black text-sm mx-auto"
              required
            />
          </div>

          <div className="form-group mb-8 flex items-center">
            <label
              htmlFor="videodescription"
              className="block text-black font-bold min-w-[150px] text-center"
            >
              Video Description:
            </label>
            <textarea
              type="text"
              placeholder="Describe Your Project..."
              name="Video Description"
              className="block w-4/5 p-2 text-center border border-black text-sm mx-auto"
              required
            />
          </div>

          <div className="form-group mb-8 flex items-center">
            <label
              htmlFor="estimatebudget"
              className="block text-black font-bold min-w-[150px] text-center"
            >
              Estimate Budget:
            </label>
            <select
              type="text"
              name="Estimate Budget"
              className="block w-4/5 p-2 text-center border border-black text-sm mx-auto"
            >
              <option value="price">
                What Is Your Estimate Project Budget?
              </option>
              <option value="$100-$200">$100-$200</option>
              <option value="$200-$400">$200-$400</option>
              <option value="$400-$600">$400-$600</option>
              <option value="$600-$800">$600-$800</option>
              <option value="$800 +">$800 +</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-6 rounded-md mx-auto block w-2/5 border border-black text-lg"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  </main>
    );
  }
  
  export default Quote;
  