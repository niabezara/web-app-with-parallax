import HeroParallax from "../Parallax/HeroParallax";

interface HeroProps {
  locale: string;
}

const Hero: React.FC<HeroProps> = ({ locale }) => {
  return (
    <div className="h-screen relative">
      <HeroParallax locale={locale} />
    </div>
  );
};

export default Hero;
