function Qoute() {
    return (
    <main className="flex flex-col justify-center items-center min-h-screen gap-10">
      <header className=" w-full text-white bg-black p-10 shadow-md border border-black">
        <div className="flex justify-between items-center">
        <h1> On The Go</h1>
        <button type="button" className="bg-gray-500 hover:bg-gray-400 text-white py-2 px-6 border border-black text-lg">Get A Qoute</button>
        </div>
      </header>
      <div classname= "flex justify-center items-center w-full h-screen">
        <div className=" w-full max-w-xl bg-white p-10 shadow-md border border-black">
          <h1 className="text-2xl text-black font-bold mb-8 flex justify-center"> Tell Us A Bit More About You</h1>
          <form>
            <div className="form-group mb-8 flex items-center">
              <label htmlFor="firstname" className="block text-black font-bold min-w-[150px] text-center">First Name:</label>
              <input type="text" placeholder="What Is Your First Name?" name="firstname" className="block w-4/5 p-2 text-center border border-black text-sm mx-auto" />
            </div>
  
            <div className="form-group mb-8 flex items-center">
              <label htmlFor="lastname" className="block text-black font-bold min-w-[150px] text-center">Last Name:</label>
              <input type="text" placeholder="What Is Your Last Name?" name="lastname" className="block w-4/5 p-2 text-center border border-black text-sm mx-auto" />
            </div>
  
            <div className="form-group mb-8 flex items-center">
              <label htmlFor="companyname" className="block text-black font-bold min-w-[150px] text-center">Company Name:</label>
              <input type="text" placeholder="What Company Do You Work For?" name="companyname" className="block w-4/5 p-2 text-center border border-black text-sm mx-auto" />
            </div>
  
            <div className="form-group mb-8 flex items-center">
              <label htmlFor="companyemail" className="block text-black font-bold min-w-[150px] text-center">Company Email:</label>
              <input type="text" placeholder="What's Your Company Email Address?" name="companyemail" className="block w-4/5 p-2 text-center border border-black text-sm mx-auto" />
            </div>
  
            <div className="form-group mb-8 flex items-center">
              <label htmlFor="videodescription" className="block text-black font-bold min-w-[150px] text-center">Video Description:</label>
              <textarea type="text" placeholder="Describe Your Project..." name="videodescription" className="block w-4/5 p-2 text-center border border-black text-sm mx-auto" />
            </div>
  
            <div className="form-group mb-8 flex items-center">
              <label htmlFor="estimatebudget" className="block text-black font-bold min-w-[150px] text-center">Estimate Budget:</label>
              <select type="text" name="estimatebudget" className="block w-4/5 p-2 text-center border border-black text-sm mx-auto">
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
      </div>
      <footer className=" w-full text-white bg-black p-10 shadow-md border border-black ">
       <div className="gap-5 flex flex-col">
          <h1>On The Go</h1>
          <h3>Turning wild imaginations into reality</h3>
          <h3>CALGARY, ALBERTA    ONTHEGO@GMAIL.COM</h3>
          <h3>+1 (587) 433 8076</h3>
          <h5>CANADA</h5>
          <h5>@2024 ONTHEGO Productions</h5>
          <h6>ONTHEGO Productions is registered in Canada</h6>
          <h6>Company number: 123456789</h6>
        </div>
      <button type="button" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 rounded-md border border-black text-lg mt-5">Back</button>
      </footer>
  </main>
    );
  }
  
  export default Qoute;
  