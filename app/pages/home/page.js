"use client";

import Footer from "@/app/_components/footer";
import NavBar from "@/app/_components/nav-bar";
import Link from "next/link";

export default function HomePage() {
    return (
        <main>
            {/* Header section  */}
            <NavBar />
            {/* COMPANY INTRO VIDEO SECTION */}
            <section className="relative h-screen w-full">
                <div className="absolute top-1/4  left-10  text-start z-10">
                    <h1 className="text-3xl text-white mb-4">
                        COMPANY  SLOGAN <br /> OR  INTRODUCTORY <br /> MESSAGE
                    </h1>
                    <Link href="../get-quote">
                        <button className="bg-orange-500 hover:bg-orange-400 text-white py-2 px-4 rounded mt-20">
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
                <h1 className=" font-bold text-2xl mb-12 ml-20">TRUSTED  BY  TOP  COMPANIES</h1>
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
                <div className=" flex justify-center ">
                <Link href="/pages/get-quote">
                <button type="button" className=" bg-orange-500 hover:bg-orange-400 text-white py-4 px-3 rounded-md block border border-black mt-16">
                BOOK A CALL
                </button>
                </Link>
                </div>
            </section>
            {/* Footer section */}
            <Footer />
        </main>
    );
}