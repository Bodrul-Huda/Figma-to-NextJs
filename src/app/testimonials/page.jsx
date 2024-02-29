import Subscribe from "@/components/Subscribe";
import TestimonialList from "@/components/TestimonialList";

const Page = () => {
  return (
    <>
      <div className="relative px-6 bg-gradient-to-tr from-teamBg to-95% via-teamBg via-80% to-green-100 from-5%  py-20">
        <div className="container mx-auto">
          <h4 className="mb-1 mt-16 text-2xl font-bold font-heading">
            Testimonial List
          </h4>
          <div className=" flex text-sm space-x-4">
            <p>Home</p>
            <p className="font-thin">&#10095;</p>
            <p className="text-button1">Testimonial List</p>
          </div>
        </div>
      </div>

      <TestimonialList />
      <Subscribe />
    </>
  );
};

export default Page;
