import Gallery from "./Gallery/Gallery";
import HeroContainer from "./Hero/HeroContainer";

const Home = () => {
  return (
    <section>
      <HeroContainer />
      <div className="max-w-screen-xl mx-auto">
        <Gallery />
      </div>
    </section>
  );
};

export default Home;
