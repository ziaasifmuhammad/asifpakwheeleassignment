

import "./globals.css";
import Navbar from "./components/Navbar";
import Sell from "./components/Sell";

import Footer from "./components/Footer";
import Body from "./components/Body";

import Thanks from "./components/Thanks"

import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>

      <div className="h-[80vh]">

      </div>
      <Navbar />

      <Hero />
      <Body />

      <Sell />

      <Thanks />

      <Footer />

    </div>
  )
}
