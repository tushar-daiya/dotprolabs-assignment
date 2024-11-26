import Comparison from "@/components/Comparison";
import FAQs from "@/components/FAQs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="min-h-screen relative">
          <Navbar />
          <Header />
        </div>
        <Comparison />
        <Features />
        <FAQs />
        <Footer />
      </div>
    </>
  );
}
