"use client";

import Footer from "@/app/_components/footer";
import LogIn from "@/app/_components/login";
import NavBar from "@/app/_components/nav-bar";


export default function LogInPage() {
    return (
        <main className="h-screen">
        <NavBar />
        <LogIn />
        <Footer />
        </main>
    )
}