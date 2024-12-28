import BlogPageContent from "@/Component/BlogPage/BlogPageContent";
import Blog_page from "@/Component/BlogPage/Blog_page";
import Accomplish from "@/Component/HeroPage/Accomplish";
import CaseStudy from "@/Component/HeroPage/CaseStudy";
import CTA from "@/Component/HeroPage/CTA";
import Testimonial from "@/Component/HeroPage/Testimonial";

const BlogPage = () => {
  return (
    <>
      <Blog_page />
      <BlogPageContent />
      <CaseStudy />
      <Testimonial />
      <CTA />
      <Accomplish />
    </>
  );
};
export default BlogPage;
