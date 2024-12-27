import BlogPageContent from "@/Components/BlogPage/BlogPageContent";
import Blog_page from "@/Components/BlogPage/Blog_page";
import Accomplish from "@/Components/HeroPage/Accomplish";
import CaseStudy from "@/Components/HeroPage/CaseStudy";
import CTA from "@/Components/HeroPage/CTA";
import Testimonial from "@/Components/HeroPage/Testimonial";

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
