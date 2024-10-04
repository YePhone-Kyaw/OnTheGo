"use client";
import NavBar from "@/app/_components/nav-bar";
import Footer from "@/app/_components/footer";
import { useState} from "react";



export default function ServicesPage() {
  const [videoType, setVideoType] = useState("Any");
  const [industry, setIndustry] = useState("Any");


 

  return (
    <div className="relative">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section with Bordered Video and Text inside */}
      <section className="relative h-screen w-full flex justify-center items-center z-0 bg-amber-100">
        {/* Container with border that holds the video and the text */}
        <div className="relative w-[85%] h-[70%]   overflow-hidden z-10 flex items-center justify-center">
          {/* Background video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/servicesbackground.mp4"
            autoPlay
            loop
            muted
          />
          {/* Dark overlay to make text readable */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

          {/* Text inside the bordered video container */}
          <div className="relative z-10 text-center text-white p-4">
            <h2 className="text-sm font-semibold mb-2 tracking-wide">
              <img src="/projectlogo.png" alt="Logo" className="h-6 inline-block" />
              ONTHEGO
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
              PRODUCTION SERVICES
            </h1>
            <p className="text-sm max-w-lg mx-auto mb-6">
              Our ambitious crew handles production, providing the tools and
              experience to bring your ideas to life. From location planning,
              casting, to filming for commercial, documentary, and photography
              projects, we leverage the power of emotion with every action.
            </p>

            {/* Buttons inside the bordered video */}
            <div className="flex justify-center space-x-4">
              <button className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-600 transition duration-300 text-sm">
                Start your project
              </button>
              <button className="border-2 border-white text-white font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 text-sm">
                Join our crew
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section with Filters */}
      <section className="py-20 bg-black z-10 relative">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-white text-center mb-12">Our Services</h2>

          {/* Filter Options with Tabs */}
          <div className="flex justify-center mb-16 space-x-16">
            <div>
              <h3 className="text-2xl text-white font-semibold mb-4">Filter by Video Type</h3>
              <div className="flex space-x-4">
                {["Any", "Promotional Video", "Corporate Video", "Explainer Video"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setVideoType(type)}
                    className={`px-4 py-2 rounded-lg border-2 ${videoType === type ? "bg-black text-white" : "bg-white text-black"} hover:bg-black hover:text-white transition duration-300`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-white font-semibold mb-4">Filter by Industry</h3>
              <div className="flex space-x-4">
                {["Any", "Fashion", "Food", "Real Estate"].map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setIndustry(ind)}
                    className={`px-4 py-2 rounded-lg border-2 ${industry === ind ? "bg-black text-white" : "bg-white text-black"} hover:bg-black hover:text-white transition duration-300`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Services Cards with Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Promotional Video */}
            <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <video
                src=""
                alt="Promotional Video"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition duration-300 flex justify-center items-center">
                <button className="bg-white text-black px-6 py-2 rounded-full text-lg opacity-0 group-hover:opacity-100 transition duration-300">
                  Watch Sample
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Promotional Video</h3>
                <p>Create eye-catching promotional videos to promote your brand in the best light.</p>
              </div>
            </div>

            {/* Corporate Video */}
            <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <video
                src=""
                alt="Corporate Video"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition duration-300 flex justify-center items-center">
                <button className="bg-white text-black px-6 py-2 rounded-full text-lg opacity-0 group-hover:opacity-100 transition duration-300">
                  Watch Sample
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Corporate Video</h3>
                <p>Professional corporate videos for internal communications or external marketing.</p>
              </div>
            </div>

            {/* Social Video Marketing */}
            <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <video
                src=""
                alt="Social Video Marketing"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition duration-300 flex justify-center items-center">
                <button className="bg-white text-black px-6 py-2 rounded-full text-lg opacity-0 group-hover:opacity-100 transition duration-300">
                  Watch Sample
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Social Video Marketing</h3>
                <p>Maximize reach and engagement with videos optimized for social media platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Contact Form Section */}
       <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `url('/formlogo.jpg')` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto text-white text-center py-20">
          <h2 className="text-5xl font-bold mb-6">LET'S GO INTO BATTLE</h2>
          <p className="mb-8">Leave your details. We'll get back to you within 24 hours.</p>

          {/* Contact Form */}
          <form className="mx-auto max-w-3xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First name*" className="p-3 rounded bg-gray-200 text-black" />
              <input type="text" placeholder="Last name*" className="p-3 rounded bg-gray-200 text-black" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" placeholder="Email*" className="p-3 rounded bg-gray-200 text-black" />
              <input type="text" placeholder="Phone Number*" className="p-3 rounded bg-gray-200 text-black" />
            </div>
            <input type="text" placeholder="Company name*" className="p-3 rounded bg-gray-200 text-black w-full" />
            <textarea placeholder="Message*" className="p-3 rounded bg-gray-200 text-black w-full h-32"></textarea>
            <button type="submit" className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded hover:bg-yellow-600 transition">
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="py-16 bg-amber-100 text-center">
  <div className="container mx-auto">
    {/* Section Title */}
    <h2 className="text-5xl font-bold mb-8 tracking-wider">PRODUCTION QUESTION?</h2>
    <p className="text-lg mb-12 max-w-3xl mx-auto">
      Do you have a question about our process? Looking for a video production company? Curious about what brave ideas we have for your brand? Get in touch or check out our FAQ below.
    </p>

    {/* FAQ Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 ">
      {/* Left Column */}
      <div className="space-y-6 text-left ">
        <div className="flex items-start space-x-4 ">
          <div className="text-4xl font-bold text-black">X</div>
          <p className="text-lg">How do we accommodate tight timelines for video production work?</p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="text-4xl font-bold text-black">X</div>
          <p className="text-lg">What video production capabilities do we offer?</p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="text-4xl font-bold text-black">X</div>
          <p className="text-lg">What distinguishes our video production services for high-budget video projects?</p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="text-4xl font-bold text-black">X</div>
          <p className="text-lg">Can ONTHEGO Productions handle the specific video production needs of luxury brand videos?</p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="text-4xl font-bold text-black">X</div>
          <p className="text-lg">How does ONTHEGO Productions approach color grading for premium-branded video content?</p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="text-4xl font-bold text-black">X</div>
          <p className="text-lg">How does ONTHEGO Productions manage confidentiality and security during the video production process?</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-6 text-left">
        <div className="flex items-start space-x-4">
          <div className="text-4xl font-bold text-black">X</div>
          <p className="text-lg">How does ONTHEGO Productions video production process enhance emotional storytelling?</p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="text-4xl font-bold text-black">X</div>
          <p className="text-lg">What makes ONTHEGO Productions the preferred post-production studio for high-budget marketing campaigns?</p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="text-4xl font-bold text-black">X</div>
          <p className="text-lg">How does ONTHEGO Productions ensure a seamless video production workflow for complex projects?</p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="text-4xl font-bold text-black">X</div>
          <p className="text-lg">What advanced video production technologies does ONTHEGO Productions utilize?</p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="text-4xl font-bold text-black">X</div>
          <p className="text-lg">What video production services does ONTHEGO Productions offer to enhance storytelling?</p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="text-4xl font-bold text-black">X</div>
          <p className="text-lg">How can clients be involved in the video production process with ONTHEGO Productions?</p>
        </div>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </div>
  );
}