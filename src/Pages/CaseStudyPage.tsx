import CaseBusinessChallenge from "@/Components/CaseStudyPage/CaseBusinessChallenge";
import CaseStudyHome from "@/Components/CaseStudyPage/CaseStudyHome";
import CaseStudyImpact from "@/Components/CaseStudyPage/CaseStudyImpact";
import CaseStudySection from "@/Components/CaseStudyPage/CaseStudySection";
import CaseStudyTestimonial from "@/Components/CaseStudyPage/CaseStudyTestimonial";
import CaseStudyOurSolution from "@/Components/CaseStudyPage/CaseStudyOurSolution";
import CaseStudyConclusion from "@/Components/CaseStudyPage/CaseStudyConclusion";
import CTA from "@/Components/CaseStudyPage/CTA";
import CaseStudyContact from "@/Components/CaseStudyPage/CaseStudyContact";

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