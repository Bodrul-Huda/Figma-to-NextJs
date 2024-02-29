import Link from "next/link";

const AllProject = async () => {
  return (
    <section>
      <div className="py-20 radius-for-skewed">
        <div className="max-w-6xl px-4 pb-6 lg:pb-16">
          <div className="flex flex-wrap justify-center lg:justify-center ">
            <div className="w-full lg:w-4/5 mb-4 lg:mb-0">
              <h2 className=" text-button1 uppercase py-2">All Project</h2>
              <h2 className="font-semibold text-2xl py-2">
                Better Agency/SEO Solution At <br /> Your Fingertips
              </h2>
            </div>
          </div>
        </div>
        <div className="container px-4 mx-auto">
          <div className="container px-5 py-2 mx-auto">
            <div className="flex flex-wrap -m-4">
              <Link href="#" className="p-4 md:w-1/2 w-full ">
                <div className=" mb-4 p-4 bg-white rounded-lg shadow-md h-full ">
                  <div className=" mx-auto rounded-lg">
                    <img
                      className=" w-full relative h-full rounded-lg"
                      src="/allProject/Rectangle 2097(4).png"
                      alt=""
                    />
                  </div>
                  <p className="font-bold text-3xl pt-3">
                    Lorem ipsum dolor sit consectutar
                  </p>
                </div>
              </Link>
              <Link href="#" className="p-4 md:w-1/2 w-full ">
                <div className=" mb-4 p-4 bg-white rounded-lg shadow-md h-full ">
                  <div className=" mx-auto rounded-lg">
                    <img
                      className=" w-full relative h-full rounded-lg"
                      src="/allProject/Rectangle 2097(5).png"
                      alt=""
                    />
                  </div>
                  <p className="font-bold text-3xl pt-3">
                    Lorem ipsum dolor sit consectutar
                  </p>
                </div>
              </Link>
              <Link href="#" className="p-4 md:w-1/2 w-full ">
                <div className=" mb-4 p-4 bg-white rounded-lg shadow-md h-full ">
                  <div className=" mx-auto rounded-lg">
                    <img
                      className=" w-full relative h-full rounded-lg"
                      src="/allProject/Rectangle 2097(6).png"
                      alt=""
                    />
                  </div>
                  <p className="font-bold text-3xl pt-3">
                    Lorem ipsum dolor sit consectutar
                  </p>
                </div>
              </Link>
              <Link href="#" className="p-4 md:w-1/2 w-full ">
                <div className=" mb-4 p-4 bg-white rounded-lg shadow-md h-full ">
                  <div className=" mx-auto rounded-lg">
                    <img
                      className=" w-full relative h-full rounded-lg"
                      src="/allProject/Rectangle 2097(7).png"
                      alt=""
                    />
                  </div>
                  <p className="font-bold text-3xl pt-3">
                    Lorem ipsum dolor sit consectutar
                  </p>
                </div>
              </Link>
              <Link href="#" className="p-4 md:w-1/2 w-full ">
                <div className=" mb-4 p-4 bg-white rounded-lg shadow-md h-full ">
                  <div className=" mx-auto rounded-lg">
                    <img
                      className=" w-full relative h-full rounded-lg"
                      src="/allProject/Rectangle 2097(8).png"
                      alt=""
                    />
                  </div>
                  <p className="font-bold text-3xl pt-3">
                    Lorem ipsum dolor sit consectutar
                  </p>
                </div>
              </Link>
              <Link href="#" className="p-4 md:w-1/2 w-full ">
                <div className=" mb-4 p-4 bg-white rounded-lg shadow-md h-full ">
                  <div className=" mx-auto rounded-lg">
                    <img
                      className=" w-full relative h-full rounded-lg"
                      src="/allProject/Rectangle 2097(9).png"
                      alt=""
                    />
                  </div>
                  <p className="font-bold text-3xl pt-3">
                    Lorem ipsum dolor sit consectutar
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProject;
