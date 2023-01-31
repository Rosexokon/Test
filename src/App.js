import Hero from "./components/Home"
import Services from "./components/Courses"
import About from "./components/About"
import Features from "./components/Features"
import Stats from "./components/Stats"
import Socials from "./components/Socials"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Team from "./components/Team"
import FAQ from "./components/FAQ"

export default function Home () {
    return(
        <div className="bg-black font-Josefin">
        <Hero/>
        <About/>
        <Features/>
        <Team/>
        <Stats/>
        <Socials/>
        <Services/>
        <FAQ/>
        <CTA/>
        <Footer/>
        </div>
    )
}