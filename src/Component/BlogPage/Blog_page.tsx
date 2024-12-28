const BlogPage = () => {
  return (
    <div className="w-full flex flex-col items-centers lg:ml-32 ml-4">
      <div className="w-11/12 flex justify-start items-center flex-wrap text-sm font-normal leading-[21px] my-4 gap-2">
        <span className="text-gray-500">Home</span>
        <img
          src="/assets/chevron-right.png"
          alt="Chevron Right"
          className="w-3 h-3"
        />
        <span className="text-gray-500">Blogs</span>
        <img
          src="/assets/chevron-right.png"
          alt="Chevron Right"
          className="w-3 h-3"
        />
        <span className="text-gray-800 font-medium">
          What is Delivery Management and Why Does It Matter?
        </span>
      </div>
    </div>
  );
};

export default BlogPage;
