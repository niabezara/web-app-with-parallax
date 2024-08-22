import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";

interface HomePageProps {
  locale: string;
}

const HomePage: React.FC<HomePageProps> = ({ locale }) => {
  return (
    <main className="min-h-screen bg-black">
      <Hero locale={locale} />
      <section id="about" className="pt-[100vh] bg-black h-screen z-[9999]">
        <About />
      </section>
    </main>
  );
};

export default HomePage;
