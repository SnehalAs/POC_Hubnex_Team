import CaseBusinessChallenge from "@/Component/CaseStudyPage/CaseBusinessChallenge";
import CaseStudyHome from "@/Component/CaseStudyPage/CaseStudyHome";
import CaseStudyImpact from "@/Component/CaseStudyPage/CaseStudyImpact";
import CaseStudySection from "@/Component/CaseStudyPage/CaseStudySection";
import CaseStudyTestimonial from "@/Component/CaseStudyPage/CaseStudyTestimonial";
import CaseStudyOurSolution from "@/Component/CaseStudyPage/CaseStudyOurSolution";
import CaseStudyConclusion from "@/Component/CaseStudyPage/CaseStudyConclusion";
import CTA from "@/Component/CaseStudyPage/CTA";
import CaseStudyContact from "@/Component/CaseStudyPage/CaseStudyContact";

const CaseStudyPage = () => {
    return (
        <>

        <CaseStudyHome></CaseStudyHome>
        <CaseBusinessChallenge></CaseBusinessChallenge>
        <CaseStudyOurSolution></CaseStudyOurSolution>
        <CaseStudyImpact></CaseStudyImpact>
        <CaseStudyConclusion></CaseStudyConclusion>
        <CaseStudySection></CaseStudySection>
        <CaseStudyTestimonial></CaseStudyTestimonial>
        <CTA></CTA>
        <CaseStudyContact></CaseStudyContact>
        
        
        </>

    );
};

export default CaseStudyPage;