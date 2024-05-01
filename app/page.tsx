import Image from "next/image";
import NavBar from "./(components)/NavBar";
import Hero from "./(components)/Hero";
import SearchBar from "./(components)/SearchBar";
import PopularMin from "./(components)/PopularMin";
import AllCategory from "./(components)/AllCategory";
import BrowseTallent from "./(components)/BrowseTalent";
import ServiceProviderCTA from "./(components)/ServiceProviderCTA";
import Blog from "./(components)/Blog";
import ProviderCTA from "./(components)/ProviderCTA";
import Footer from "./(components)/Footer";

export default function Home() {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <SearchBar />
        <PopularMin />
        <AllCategory />
        <BrowseTallent />
        <ServiceProviderCTA />
        <Blog />
        <ProviderCTA />
        <Footer />
      </div>
    </main>
  );
}
