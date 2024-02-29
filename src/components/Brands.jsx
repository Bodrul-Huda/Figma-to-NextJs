const Brands = async () => {
  return (
    <section className="py-5">
      <div className="w-full py-6 mx-auto px-4 text-center bg-white opacity-70">
        <div className="flex item-center justify-between mx-12">
          <div className="mb-12 lg:mb-0 px-2">
            <div className="" href="#">
              <img
                className="mx-auto h-8"
                src="/brands/logos_google.png"
                alt="Google"
              />
            </div>
          </div>
          <div className="mb-12 lg:mb-0  px-2">
            <div href="#">
              <img
                className="mx-auto h-8"
                src="/brands/Trello-logo-blue 1.png"
                alt="Trello"
              />
            </div>
          </div>
          <div className="mb-12 lg:mb-0  px-2">
            <div href="#">
              <img
                className="mx-auto h-8"
                src="/brands/logos_monday.png"
                alt="Monday"
              />
            </div>
          </div>
          <div className="mb-12 lg:mb-0  px-2">
            <div href="#">
              <img
                className="mx-auto h-8"
                src="/brands/Notion.png"
                alt="Notion"
              />
            </div>
          </div>
          <div className="mb-12 lg:mb-0  px-2">
            <div href="#">
              <img
                className="mx-auto h-8"
                src="/brands/Slack.png"
                alt="Slack"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
