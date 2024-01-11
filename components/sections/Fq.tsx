import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function Fq() {
  return (
    <>
      <div className="px-24   flex justify-center text-[18px] ">
        <Accordion
          type="single"
          collapsible
          className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700 bg-[#FFFFFF] px-16 py-10 w-[750px] text-[#170F49] border-2 rounded-[12px] border-[#38ACFF] shadow-2xl"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[#170F49] text-bold">
              How do I invite participants to my meeting?
            </AccordionTrigger>
            <AccordionContent>
              Once your meeting is scheduled, You will receive a unique meeting
              link or access <br />
              code. Share this with your participants through email, messaging,
              or any <br /> other preferred communication channel.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="px-24 py-10  flex justify-center text-[18px] ">
        <Accordion
          type="single"
          collapsible
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700 bg-[#FFFFFF] px-16 py-10 w-[750px] text-[#170F49] border-2 rounded-[12px] border-[#38ACFF] shadow-2xl"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[#170F49] text-bold">
              Is there a limit to the number of participants in a meeting?
            </AccordionTrigger>
            <AccordionContent>
              There are no restrictions on the number of participants.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="px-24  pb-10  flex justify-center text-[18px] ">
        <Accordion
          type="single"
          collapsible
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700 bg-[#FFFFFF] px-16 py-10 w-[750px] text-[#170F49] border-2 rounded-[12px] border-[#38ACFF] shadow-2xl "
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[#170F49] text-bold">
              Can I record meetings with MeetHub?
            </AccordionTrigger>
            <AccordionContent>
              Yes, MeetHub allows users to record meetings for future reference
              or sharing.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default Fq;
