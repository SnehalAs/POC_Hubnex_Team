import { useEffect, useState } from "react";
import "./CaseStudyImpact.css"
import AnimatedCircularProgressBar from "../ui/animated-circular-progress-bar";

const CaseStudyImpact: React.FC = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);

    useEffect(() => {
        const handleIncrement = (prev: number) => {
            if (prev === 100) {
                return 0;
            }
            return prev + 10;
        };
        setValue1(handleIncrement);
        const interval = setInterval(() => setValue1(handleIncrement), 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleIncrement = (prev: number) => {
            if (prev === 100) {
                return 0;
            }
            return prev + 10;
        };
        setValue2(handleIncrement);
        const interval = setInterval(() => setValue2(handleIncrement), 600);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleIncrement = (prev: number) => {
            if (prev === 100) {
                return 0;
            }
            return prev + 10;
        };
        setValue3(handleIncrement);
        const interval = setInterval(() => setValue3(handleIncrement), 1600);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-10 m-8 pt-2">
            <div className="w-full bg-white-100">
                <h2 className="text-3xl font-semibold">
                    Impact
                </h2>
                <p className="mt-4 text-xl text-gray-500">
                    We were successful in the development and deployment of the app before the planned timeline and supported their vision of making mental health more accessible to their patients, minus the hassles.

                </p>
            </div>

            <div className="w-full flex flex-col relative ">
                
                {/* Prograssive-bar Column */}
                <div className="flex items-center justify-between gap-4 my-8">
                    <div className=" flex relative p-4">
                        <AnimatedCircularProgressBar
                            className='circular-progress'
                            max={100}
                            min={0}
                            value={value1}
                            gaugePrimaryColor='rgb(79 70 229)'
                            gaugeSecondaryColor='rgba(0, 0, 0, 0.1)'
                        />
                    </div>
                    <div className="flex-1 h-full">
                        <h1 className="text-lg font-semibold my-2">
                            Enhanced Patient Engagement:
                        </h1>
                        <p className="text-sm">
                            We were successful in the development and deployment of the app before the planned timeline and supported their vision of making mental health more accessible to their patients, minus the hassles.
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4 my-8">
                    <div className=" flex relative p-4">
                        <AnimatedCircularProgressBar
                            className='circular-progress'
                            max={100}
                            min={0}
                            value={value2}
                            gaugePrimaryColor='rgb(79 70 229)'
                            gaugeSecondaryColor='rgba(0, 0, 0, 0.1)'
                        />

                    </div>
                    <div className="flex-1 h-full">
                        <h1 className="text-lg font-semibold my-2">
                            Improved Treatment Adherence:
                        </h1>
                        <p className="text-sm">
                            Positive feedback from healthcare providers regarding improved patient adherence to treatment plans and therapy sessions was facilitated through the mobile application, resulting in more effective therapy outcomes.
                        </p>
                    </div>
                </div>
               

                <div className="flex items-center justify-between gap-4 my-8">
                    <div className=" flex relative p-4">

                    <AnimatedCircularProgressBar
                        className='circular-progress'
                        max={100}
                        min={0}
                        value={value3}
                        gaugePrimaryColor='rgb(79 70 229)'
                        gaugeSecondaryColor='rgba(0, 0, 0, 0.1)'
                    />

                </div>
                <div className="flex-1 h-full">
                    <h1 className="text-lg font-semibold my-2">
                        Performance Scalability:
                    </h1>
                    <p className="text-sm">
                        Seamless scalability and optimal performance of the mobile application, even during periods of peak user activity helped us ensure uninterrupted service availability and user satisfaction.
                    </p>
                </div>
                </div>
            </div>

        </div>

    )
};

export default CaseStudyImpact;