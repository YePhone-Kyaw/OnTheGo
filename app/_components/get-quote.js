
function Quote() {
    return (
    <main className="bg-white text-black pt-20 pb-20 pl-52 pr-52 items-center">
      <div className= "flex flex-col justify-center border-opacity-80 border-2 border-black p-20 text-center">
        
          <h1 className="text-2xl text-black font-bold mb-8 flex justify-center"> Tell Us A Bit More About You</h1>
          <form>
            <div className="form-group mb-8 flex items-center">
              <label htmlFor="firstname" className="block text-black font-bold min-w-[150px] text-center">First Name:</label>
              <input type="text" placeholder="What Is Your First Name?" name="firstname" className="block w-4/5 p-2 text-left border border-black text-sm mx-auto" />
            </div>
  
            <div className="form-group mb-8 flex items-center">
              <label htmlFor="lastname" className="block text-black font-bold min-w-[150px] text-center">Last Name:</label>
              <input type="text" placeholder="What Is Your Last Name?" name="lastname" className="block w-4/5 p-2 text-left border border-black text-sm mx-auto" />
            </div>
  
            <div className="form-group mb-8 flex items-center">
              <label htmlFor="companyname" className="block text-black font-bold min-w-[150px] text-center">Company Name:</label>
              <input type="text" placeholder="What Company Do You Work For?" name="companyname" className="block w-4/5 p-2 text-left border border-black text-sm mx-auto" />
            </div>
  
            <div className="form-group mb-8 flex items-center">
              <label htmlFor="companyemail" className="block text-black font-bold min-w-[150px] text-center">Company Email:</label>
              <input type="text" placeholder="What's Your Company Email Address?" name="companyemail" className="block w-4/5 p-2 text-left border border-black text-sm mx-auto" />
            </div>
  
            <div className="form-group mb-8 flex items-center">
              <label htmlFor="videodescription" className="block text-black font-bold min-w-[150px] text-center">Video Description:</label>
              <textarea type="text" placeholder="Describe Your Project..." name="videodescription" className="block w-4/5 p-2 text-left border border-black text-sm mx-auto" />
            </div>
  
            <div className="form-group mb-8 flex items-center">
              <label htmlFor="estimatebudget" className="block text-black font-bold min-w-[150px] text-center">Estimate Budget:</label>
              <select type="text" name="estimatebudget" className="block w-4/5 p-2 text-left border border-black text-sm mx-auto">
                              <option value="price"> What Is Your Estimate Project Budget?</option>
                              <option value="Price1">$100-$200</option>
                              <option value="price2">$200-$400</option>
                              <option value="price3">$400-$600</option>
                              <option value="price4">$600-$800</option>
                              <option value="price5">$800 +</option>
                              </select>  
            </div>
            <button type="button" className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-6 rounded-md mx-auto block w-2/5 border border-black text-lg">
              Submit Form
            </button>
          </form>
        </div>
  </main>
    );
  }
  
  export default Quote;
  