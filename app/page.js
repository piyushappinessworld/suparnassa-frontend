import Experience from "@/components/AboutUsPage/Experience/Experience";
import Banner from "@/components/HomePage/Banner/Banner";
import Discover from "@/components/HomePage/Discover/Discover";
import Properties from "@/components/HomePage/Properties/Properties";
import Reviews from "@/components/HomePage/Reviews/Reviews";
import Solutions from "@/components/HomePage/Solutions/Solutions";

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <Discover />
      <Solutions />
      <Properties />
      {/* <Reviews /> */}
      <Experience />
    </div>
  );
}
