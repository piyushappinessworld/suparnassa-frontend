import Banner from "@/components/Banner/Banner";
import Discover from "@/components/Discover/Discover";
import Solutions from "@/components/Solutions/Solutions";

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <Discover />
      <Solutions />
    </div>
  );
}
