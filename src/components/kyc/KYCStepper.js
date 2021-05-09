import React, { useState, useEffect } from 'react';

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const getSteps = () => {
    return ["Basic Information", "Documents", "Face Identification"];
}


export const KYCStepper = (props) => {

    const [alternative, setAlternative] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 769) {
            setAlternative(true);
        }else{
            setAlternative(false)
        }
    }, [alternative])

    const activeStep = props?.step;
    const steps = getSteps();

    return (
        <>
            <Stepper alternativeLabel={alternative} activeStep={activeStep} style={{ background: 'transparent', width: '100%' }}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </>
    )
}