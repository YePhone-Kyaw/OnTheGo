"use state";

import NavBar from "./_components/nav-bar";
import Footer from "./_components/footer";
import Link from "next/link";
import TypeOfVideos, { ExamplesOfWork, SectorOfExperience } from "./_components/video-section";

export default function Home() {
  return (
    <main className=" bg-white text-black">
        {/* Header section  */}
        <NavBar />
        {/* COMPANY INTRO VIDEO SECTION */}
        <section className="relative h-screen w-full">
            <div className="absolute top-1/4  left-10  text-start z-10">
                <h1 className="text-3xl mb-4">
                    COMPANY  SLOGAN <br /> OR  INTRODUCTORY <br /> MESSAGE
                </h1>
                <Link href="../get-quote">
                    <button className="bg-orange-500 hover:bg-orange-400 text-white py-2 px-4 rounded mt-20 border border-black ">
                        PLAY SHOW REEL
                    </button>
                </Link>
            </div>

            <video
                className="w-full h-full object-cover z-0"
                loop
                autoPlay
                muted
                src=""
            />
        </section>

        {/* BRAND PARTNERS SECTION */}
        <section className="mt-20">
            <h2 className=" font-bold text-2xl mb-12 ml-20">TRUSTED  BY  TOP  COMPANIES</h2>
            <div className=" flex justify-between px-24">
                <div>LOGO 1</div>
                <div>LOGO 2</div>
                <div>LOGO 3</div>
            </div>
        </section>

        {/* ABOUT SECTION */}
        <section className=" flex mt-20">
            <div className=" basis-1/2 flex-col pl-24">
            <h2 className="text-3xl text-white mb-4">A  Revolutionary  Video  Production <br/>Agency</h2>
            <p className=" mt-7">We collaborate with rapidly growing startups and <br/>global enterprise brands to attract new customers <br/>through the power of video marketing.</p>
            <Link href="/pages/get-quote">
            <button type="button" className="bg-orange-500 hover:bg-orange-400 text-white py-4 px-3 rounded-md block w-2/5 border border-black mt-16">
            GOT A PROJECT? LET’S TALK
            </button>
            </Link>
            </div>
            <div className=" basis-1/2">
                <video className=" w-full h-full px-10"
                controls
                muted
                src=""
                />
            </div>
        </section>

        {/* 3 REASONS TO WORK WITH US */}
        <section className="mt-20 px-20">
            <h2 className=" text-3xl font-bold text-white">3  REASONS  TO  WORK  WITH  US</h2>
            <div className=" flex justify-between">
                <div>
                    <div><h3 className=" font-bold text-xl my-10">CLEAR  &  CREATIVE <br/>STORYTELLING</h3></div>
                    <div><p>We communicate the value of <br/>complex tech products with clear <br/>and simple storytelling and a <br/>touch of creative flair.</p></div>
                </div>
                <div>
                    <div><h3 className=" font-bold text-xl my-10">CLEAR  &  CREATIVE <br/>STORYTELLING</h3></div>
                    <div><p>We communicate the value of <br/>complex tech products with clear <br/>and simple storytelling and a <br/>touch of creative flair.</p></div>
                </div>
                <div>
                    <div><h3 className=" font-bold text-xl my-10">CLEAR  &  CREATIVE <br/>STORYTELLING</h3></div>
                    <div><p>We communicate the value of <br/>complex tech products with clear <br/>and simple storytelling and a <br/>touch of creative flair.</p></div>
                </div>
                
            </div>
            <div className=" flex justify-center">
            <Link href="/pages/get-quote">
            <button type="button" className=" bg-orange-500 hover:bg-orange-400 text-white py-4 px-3 rounded-md block border border-black mt-16">
            BOOK A CALL
            </button>
            </Link>
            </div>
        </section>

        {/* VIDEO TYPE SECTION */}
        <section className="mt-20 px-20">
            <h2 className=" text-3xl font-bold ">TYPES OF VIDEO</h2>
            <p className=" mt-7">We communicate the value of complex tech <br/>products with clear and simple <br/>storytelling and a touch of creative <br/> flair.</p>
            <div className=" flex justify-between mt-10">
                <TypeOfVideos type="PRMOTIONAL VIDEO" src=""/>
                <TypeOfVideos type="CORPORATE VIDEO" src=""/>
                <TypeOfVideos type="SOCIAL VIDEO MARKETING" src=""/>
                
            </div>
        </section>

        {/* SECTOR OF EXPERIENCE*/}
        <section className="mt-20 px-20">
            <h2 className=" text-3xl font-bold ">SECTOR OF EXPERIENCE</h2>
            <p className=" mt-7">We communicate the value of complex tech products with clear <br/> and simple storytelling and a touch of creative flair.</p>
            <div className=" flex justify-between mt-10">
                <SectorOfExperience title="FASHION" src=""/>
                <SectorOfExperience title="FOOD" src=""/>
                <SectorOfExperience title="REAL ESTATE" src=""/>
                
            </div>
        </section>

        {/* SAMPLE WORK SECTION */}
        <section className="mt-20 px-20">
            <h2 className=" text-3xl font-bold ">EXAMPLES OF WORK</h2>
            <p className=" mt-7">We communicate the value of complex tech products with clear <br/> and simple storytelling and a touch of creative flair.</p>
            <div className=" flex justify-between mt-10">
            <ExamplesOfWork title="AFRICAN FASHION WEEK CALGARY" description=" FASHION RUNWAY SHOW" src=""/>
            <ExamplesOfWork title="GOLDMARKIST" description=" MUSIC VIDEO PRODUCTION" src=""/>
            <ExamplesOfWork title="BLACK HISTORY MONTH" description="Diversity and Inclusion" src=""/>
            </div>
            <div className=" flex justify-between mt-10">
            <ExamplesOfWork title="AFRICAN FASHION WEEK CALGARY" description=" FASHION RUNWAY SHOW" src=""/>
            <ExamplesOfWork title="GOLDMARKIST" description=" MUSIC VIDEO PRODUCTION" src=""/>
            <ExamplesOfWork title="BLACK HISTORY MONTH" description="Diversity and Inclusion" src=""/>
            </div>
        </section>

        {/* METRICS SECTION */}
        <section className="mt-20 px-20">
            <h2 className=" text-3xl font-bold ">DELIVERING REMARKABLE RESULTS</h2>
            <p className=" mt-7">We communicate the value of complex tech products with clear <br/> and simple storytelling and a touch of creative flair.</p>
            <div className=" flex justify-between">
                <div>
                    <div className=" mt-10 mb-5">Logo 1</div>
                    <div><h3 className=" font-bold text-xl mb-5">55,8000</h3></div>
                    <div><p>An Advertising Campaign to raise <br/>awareness for a career in Higher <br/>Education.</p></div>
                    <div>
                        <Link href="">
                        <h3 className=" font-bold text-sm mt-10 hover:text-gray-600">READ FULL CASE STUDY &rarr;</h3>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className=" mt-10 mb-5">Logo 1</div>
                    <div><h3 className=" font-bold text-xl mb-5">55,8000</h3></div>
                    <div><p>An Advertising Campaign to raise <br/>awareness for a career in Higher <br/>Education.</p></div>
                    <div>
                        <Link href="">
                        <h3 className=" font-bold text-sm mt-10 hover:text-gray-600">READ FULL CASE STUDY &rarr;</h3>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className=" mt-10 mb-5">Logo 1</div>
                    <div><h3 className=" font-bold text-xl mb-5">55,8000</h3></div>
                    <div><p>An Advertising Campaign to raise <br/>awareness for a career in Higher <br/>Education.</p></div>
                    <div>
                        <Link href="">
                        <h3 className=" font-bold text-sm mt-10 hover:text-gray-600">READ FULL CASE STUDY &rarr;</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        
        {/* PROJECT STEPS SECTION */}
        <section className="mt-20 px-20">
        <h2 className=" text-3xl font-bold ">GETTING STARTED IS A BREEZE</h2>
        <p className=" mt-7">We communicate the value of complex tech products with clear <br/>and simple storytelling and a touch of creative flair.</p>
        <div className=" flex justify-between">
                <div>
                    <div><h3 className=" font-bold text-xl my-10">BOOK A CALL</h3></div>
                    <div><p>We communicate the value of <br/>complex tech products with clear <br/>and simple storytelling and a <br/>touch of creative flair.</p></div>
                </div>
                <div>
                    <div><h3 className=" font-bold text-xl my-10">CREATIVE PRESENTATION</h3></div>
                    <div><p>We communicate the value of <br/>complex tech products with clear <br/>and simple storytelling and a <br/>touch of creative flair.</p></div>
                </div>
                <div>
                    <div><h3 className=" font-bold text-xl my-10">MEET THE TEAM</h3></div>
                    <div><p>We communicate the value of <br/>complex tech products with clear <br/>and simple storytelling and a <br/>touch of creative flair.</p></div>
                </div>
            </div>
            <div className=" flex">
                <div>
                    <div><h3 className=" font-bold text-xl my-10">PROJECT KICK-OFF</h3></div>
                    <div><p>We communicate the value of <br/>complex tech products with clear <br/>and simple storytelling and a <br/>touch of creative flair.</p></div>
                </div>
                <div className=" ml-80 pt-8">
                    <Link href="">
                    <button type="button" className=" bg-orange-500 hover:bg-orange-400 text-white py-4 px-3 rounded-md block border border-black mt-16">
                    BOOK A CALL
                    </button>
                    </Link>
                </div>
            </div>
        </section>

        {/* SERVICE PROPOSAL SECTION */}
        <section className="mt-20 px-20">
            <h2 className=" text-3xl font-bold text-white">WHY VIDEO MARKETING?</h2>
            <div className=" flex justify-between">
                <div>
                    <div><h3 className=" font-bold text-xl my-10">INCREASED ENGAGEMENT</h3></div>
                    <div><p>We communicate the value of <br/>complex tech products with clear <br/>and simple storytelling and a <br/>touch of creative flair.</p></div>
                </div>
                <div>
                    <div><h3 className=" font-bold text-xl my-10">BROADER REACH</h3></div>
                    <div><p>We communicate the value of <br/>complex tech products with clear <br/>and simple storytelling and a <br/>touch of creative flair.</p></div>
                </div>
                <div>
                    <div><h3 className=" font-bold text-xl my-10">STRONGER BRAND IDENTIY</h3></div>
                    <div><p>We communicate the value of <br/>complex tech products with clear <br/>and simple storytelling and a <br/>touch of creative flair.</p></div>
                </div>
            </div>
            <div className=" flex justify-between">
                <div>
                    <div><h3 className=" font-bold text-xl my-10">VISUAL EXPLANATION</h3></div>
                    <div><p>We communicate the value of <br/>complex tech products with clear <br/>and simple storytelling and a <br/>touch of creative flair.</p></div>
                </div>
                <div>
                    <div><h3 className=" font-bold text-xl my-10">BUILDING TRUST</h3></div>
                    <div><p>We communicate the value of <br/>complex tech products with clear <br/>and simple storytelling and a <br/>touch of creative flair.</p></div>
                </div>
                <div className=" pt-8">
                    <Link href="">
                    <button type="button" className=" bg-orange-500 hover:bg-orange-400 text-white py-4 px-3 rounded-md block border border-black mt-16 mr-28">
                    BOOK A CALL
                    </button>
                    </Link>
                </div>
            </div>
        </section>
        {/* FAQ SECTION */}
        <section className="mt-20 px-20">
            <h2 className=" text-3xl font-bold text-white">FAQ</h2>
            <div className=" flex justify-center">
            <div className="mr-72">
                    <details>
                        <summary className=" my-10"><h3 className=" font-bold text-xl">WHAT SERVICES DOES YOUR VIDEO <br/>PRODUCTION COMPANY OFFER??</h3>
                        </summary>
                        <p>FOORCHH Productions offers a full suite of video <br/>production services for businesses, including <br/>concept development, scriptwriting, pre- <br/>production, filming, post-production, animation, <br/>motion graphics, and sound design.<br/>
                        We also assist in distribution strategy to <br/> ensure your video reaches its intended audience.</p>
                    </details>
                </div>
                <div className="ml-72">
                    <details>
                        <summary className=" my-10"><h3 className=" font-bold text-xl">HOW LONG DOES THE PRODUCTION <br/>
                        PROCESS TYPICALLY TAKE??</h3>
                        </summary>
                        <p></p>
                    </details>
                </div>
            </div>
            <div className=" flex justify-center">
            <div className="mr-72">
                    <details>
                        <summary className=" my-10"><h3 className=" font-bold text-xl">DO YOU HAVE A PORTFOLIO I CAN <br/>REVIEW??</h3>
                        </summary>
                        <p></p>
                    </details>
                </div>
                <div className="ml-72">
                    <details>
                        <summary className=" my-10"><h3 className=" font-bold text-xl">HOW LONG DOES THE PRODUCTION <br/>
                        PROCESS TYPICALLY TAKE??</h3>
                        </summary>
                        <p></p>
                    </details>
                </div>
            </div>
            <div className=" flex justify-center">
            <div className="mr-72">
                    <details>
                        <summary className=" my-10"><h3 className=" font-bold text-xl">WHAT TYPE OF VIDEOS DO YOU <br/>SPECIALIZE IN??</h3>
                        </summary>
                        <p></p>
                    </details>
                </div>
                <div className="ml-72">
                    <details>
                        <summary className=" my-10"><h3 className=" font-bold text-xl">HOW LONG DOES THE PRODUCTION <br/>
                        PROCESS TYPICALLY TAKE??</h3>
                        </summary>
                        <p></p>
                    </details>
                </div>
            </div>
            <div className=" flex pl-14">
            <div>
                    <details>
                        <summary className=" my-10"><h3 className=" font-bold text-xl">HOW LONG DOES THE PRODUCTION <br/>
                        PROCESS TYPICALLY TAKE??</h3>
                        </summary>
                        <p></p>
                    </details>
                </div>
                
            </div>
            
        </section>
        {/* Footer section */}
        <Footer/>
    </main>
)
}
