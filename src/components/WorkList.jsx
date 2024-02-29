import Image from "next/image";

const WorkList = async () => {
  return (
    <>
      <section className="body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="pt-4 pb-12">
            <h6 className="text-button1 uppercase">Work List</h6>
            <h4 className="text-3xl font-semibold pt-2">
              We provide the Perfect Solution <br />
              to your business growth
            </h4>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 w-full md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className=" mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                    <div className="bg-hero h-20 w-20 rounded-xl flex items-center justify-center">
                      <Image
                        width="30"
                        height="30"
                        src="/workList/Activity.png"
                        alt="activity"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-black text-xl my-2">
                    Grow Your Business
                  </h3>
                  <p className="leading-relaxed text-base my-2">
                    We help identify the best ways to improve your business
                  </p>
                  <a className="my-8 inline-flex items-center docs-creator">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className=" mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                    <div className="bg-hero h-20 w-20 rounded-xl flex items-center justify-center">
                      <Image
                        width="30"
                        height="30"
                        src="/workList/Heart.png"
                        alt="activity"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-black text-xl my-2">
                    Improve brand loyalty
                  </h3>
                  <p className="leading-relaxed text-base my-2">
                    We help identify the best ways to improve your business
                  </p>
                  <a className="my-8 inline-flex items-center docs-creator">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className=" mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                    <div className="bg-hero h-20 w-20 rounded-xl flex items-center justify-center">
                      <Image
                        width="30"
                        height="30"
                        src="/workList/Work.png"
                        alt="activity"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-black text-xl my-2">
                    Improve Business Model
                  </h3>
                  <p className="leading-relaxed text-base my-2">
                    We help identify the best ways to improve your business
                  </p>
                  <a className="my-8 inline-flex items-center docs-creator">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkList;
