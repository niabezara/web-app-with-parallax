import HeroParallax from "../Parallax/HeroParallax";

interface HeroProps {
  locale: string;
}

const Hero: React.FC<HeroProps> = ({ locale }) => {
  return (
    <div className="relative h-screen">
      <HeroParallax locale={locale} />
    </div>
  );
};

export default Hero;
