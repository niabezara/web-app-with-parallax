import About from "@/components/About/About";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero/Hero";
import SubFooter from "@/components/SubFooter";

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-black relative flex flex-col">
      <section className="h-[300vh]">
        <Hero />
      </section>
      <section className=" bg-black z-[9999]">
        <About />
      </section>
      <section className=" bg-black z-[9999]">
        <Gallery />
      </section>
      <section className=" bg-black z-[9999]">
        <Footer />
      </section>
      <section className=" bg-black z-[9999]">
        <SubFooter />
      </section>
    </main>
  );
};

export default HomePage;
