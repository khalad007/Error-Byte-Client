import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import { MdExpandMore } from "react-icons/md";

const Faq = () => {
    return (
        <div>
            <div >
                <Accordion>
                    <AccordionSummary
                        expandIcon={<MdExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ fontWeight: 'bold', fontSize: '2rem' }}>Q: How do I sign up for courses on the platform?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            A:: To sign up for courses, click on the "Sign Up" button on the top right corner of the homepage. Follow the prompts to create an account, and then you can browse and enroll in courses.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<MdExpandMore />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontWeight: 'bold', fontSize: '2rem' }}>Q: How can I track my progress in a course?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>

                            A: Your course progress can be tracked within the course dashboard. Each course will have a progress bar or percentage completion indicator, allowing you to monitor your advancement.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<MdExpandMore />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontWeight: 'bold', fontSize: '2rem' }}>Q: Can I access the courses on multiple devices?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            A: Yes, our platform is accessible on various devices such as desktops, laptops, tablets, and smartphones. You can seamlessly switch between devices, and your progress will be synchronized.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div>
    );
};

export default Faq;