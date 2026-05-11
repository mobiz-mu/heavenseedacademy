import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProgrammesPreview from "@/components/home/ProgrammesPreview";
import EnrollmentCTA from "@/components/home/EnrollmentCTA";
import ParentTestimonials from "@/components/home/ParentTestimonials";
import GalleryPreview from "@/components/home/GalleryPreview";
import BlogPreview from "@/components/home/BlogPreview";
import HomeContact from "@/components/home/HomeContact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhyChooseUs />
      <ProgrammesPreview />
      <EnrollmentCTA />
      <ParentTestimonials />
      <GalleryPreview />
      <BlogPreview />
      <HomeContact />
    </>
  );
}