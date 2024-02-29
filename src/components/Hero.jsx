import Link from "next/link";
import Image from "next/image";

const Hero = async () => {
  return (
    <div>
      <section className="relative bg-hero">
        <div className="relative pt-12 lg:pt-20 pb-36 z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center">
                <div className="w-full text-center lg:text-left">
                  <div className="max-w-md mx-auto lg:mx-0">
                    <h2 className="my-3 text-2xl lg:text-5xl font-bold font-heading">
                      Increase Your Customers Loyalty and Satisfaction
                    </h2>
                  </div>
                  <div className="max-w-sm mx-auto lg:mx-0">
                    <p className="mb-6 leading-loose">
                      We help businesses like yours earn more customers,
                      standout from competitors, make more money
                    </p>
                    <div>
                      <Link
                        className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full bg-button1 lg:w-auto py-2 px-6 leading-loose bg-buttonBorder hover:bg-green-700 text-white font-semibold rounded-lg transition duration-200"
                        href="#"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full lg:w-1/2 px-4">
                <div className="flex flex-wrap h-2/3 lg:mb-4 lg:ml-1 ">
                  <div className="w-full md:w-2/3 h-full p-2  rounded-2xl">
                    <Image
                      src="/Hero1.png"
                      alt="hero1"
                      width={500}
                      height={500}
                      className=" w-full h-full object-fill rounded-2xl"
                    />
                  </div>
                  <div className="w-full md:w-1/3 h-full p-2 rounded-2xl">
                    <Image
                      src="/Hero2.png"
                      alt="hero2"
                      width={500}
                      height={500}
                      className=" w-full h-full object-fill rounded-2xl"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap h-1/3 lg:mb-4  ">
                  <div className="w-full md:w-1/3 h-full md:h-56 p-2 rounded-2xl ">
                    <Image
                      src="/Hero3.png"
                      alt="hero3"
                      width={500}
                      height={500}
                      className=" w-full h-full object-fill rounded-2xl"
                    />
                  </div>
                  <div className="w-full md:w-2/3 h-full md:h-56 p-2  rounded-2xl">
                    <Image
                      src="/Hero4.png"
                      alt="hero4"
                      width={500}
                      height={500}
                      className=" w-full h-full object-fill rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
