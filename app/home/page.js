import Footer from "@/app/_components/footer";
import NavBar from "@/app/_components/nav-bar";


export default function HomePage() {
    return (
        <main>
            <NavBar />
            <div className="border-2 bg-white text-black h-screen">
                <p>Home Page</p>
            </div>
            <Footer />
        </main>
    )
}