import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSecion from "@/components/HeroSecion";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonial from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSecion />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonial />
      <UpcomingWebinar />
      <Instructors />
      <Footer />
    </main>
  );
}
