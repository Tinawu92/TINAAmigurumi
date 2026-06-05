import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import MakersSpotlight from "@/components/home/MakersSpotlight";
import HowItWorks from "@/components/home/HowItWorks";
import SellerCTA from "@/components/home/SellerCTA";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedProducts />
      <MakersSpotlight />
      <HowItWorks />
      <SellerCTA />
      <Testimonials />
    </>
  );
}