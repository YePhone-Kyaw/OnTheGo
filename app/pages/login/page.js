"use client";

import Footer from "@/app/_components/footer";
import LogIn from "@/app/_components/login";
import NavBar from "@/app/_components/nav-bar";
import Qoute from "@/app/GetQuote/quaote";


export default function LogInPage() {
    return (
        <main className="h-screen">
        <NavBar />
        <LogIn />
        <Footer />
        <Qoute />
        </main>
    )
}