import Arrow from "@/components/Arrow";
import Hero from "@/components/Hero";
import SmallBar from "@/components/SmallBar";
import BlueBar from "@/components/BlueBar";
import GreenBox from "@/components/GreenBox";
import Tutorial from "@/components/Tutorial";
import BackEnd from "@/components/BackEnd";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Arrow /> */}
      <SmallBar />
      <div>
        <div className="flex absolute">
          {/* Sidebar or Space on the Left */}
          {/* <div className="w-[420px] relative"></div> */}
        </div>
        <BlueBar />
        <div className="flex-1 flex flex-col md:flex-row">
          <GreenBox />
          <Tutorial />
        </div>

        <BackEnd />
      </div>
      {/* <BlueBar />
      <GreenBox />
      <Tutorial />
      <BackEnd /> */}
      <Footer />
    </div>
  );
}
