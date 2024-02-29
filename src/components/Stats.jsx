import Image from "next/image";

const Stats = async () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="md:flex  items-center justify-between space-x-1">
          <div className="mb-8 w-full md:w-1/5 text-center shadow-md py-8">
            <div className="bg-hero h-20 w-20 rounded-xl mx-auto flex items-center justify-center">
              <Image
                width="30"
                height="30"
                src="/projects/Group 3.png"
                alt="Group"
              />
            </div>
            <h3 className="text-2xl font-bold py-5">240452</h3>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="mb-8 w-full md:w-1/5 text-center shadow-md py-8">
            <div className="bg-hero h-20 w-20 rounded-xl mx-auto flex items-center justify-center">
              <Image
                width="30"
                height="30"
                src="/projects/Like.png"
                alt="Like"
              />
            </div>
            <h3 className="text-2xl font-bold py-5">6300</h3>
            <p className="text-gray-500">Solved Problems</p>
          </div>
          <div className="mb-8 w-full md:w-1/5 text-center shadow-md py-8">
            <div className="bg-hero h-20 w-20 rounded-xl mx-auto flex items-center justify-center">
              <Image
                width="30"
                height="30"
                src="/projects/Happy 1.png"
                alt="Happy"
              />
            </div>
            <h3 className="text-2xl font-bold py-5">25000</h3>
            <p className="text-gray-500">Happy Customers</p>
          </div>
          <div className="mb-8 w-full md:w-1/5 text-center shadow-md py-8">
            <div className="bg-hero h-20 w-20 rounded-xl mx-auto flex items-center justify-center">
              <Image
                width="30"
                height="30"
                src="/projects/projects.png"
                alt="projects"
              />
            </div>
            <h3 className="text-2xl font-bold py-5">360452</h3>
            <p className="text-gray-500">Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stats;
