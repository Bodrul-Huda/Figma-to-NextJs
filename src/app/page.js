import Brands from "@/components/Brands";
import FeaturedProject from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Subscribe from "@/components/Subscribe";
import WorkList from "@/components/WorkList";

export default function Home() {
  return (
    <>
      <div>
        <div className="relative">
          <Hero />
          <div className="absolute bottom-0 right-0 left-0">
            <Brands />
          </div>
        </div>
        <section>
          <WorkList />
        </section>
        <Stats />
        <FeaturedProject />
        <Subscribe />
      </div>
    </>
  );
}
