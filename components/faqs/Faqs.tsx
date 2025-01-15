import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Faqs, permissions, supportedChromeAPIs } from "@/constant/faqs";
import { FiPlus } from "react-icons/fi";
import { cn } from "@/lib/utils";

export default function FAQs() {
  return (
    <section className='pt-[52px]'>
      <div className='my-container'>
        <h2 className='sm:text-5xl text-3xl font-bold mb-2'>
          Frequently Asked Questions
        </h2>
        <Accordion type='single' collapsible defaultValue='item-1'>
          {Faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id || index}
              value={`item-${index + 1}`}
              className={cn("py-8 border-b-2 w-full")}
            >
              <AccordionTrigger className='md:text-[25px] text-[22px]  font-bold hover:no-underline flex justify-between items-center'>
                {faq.question}
                <FiPlus
                  className='group-data-[state=open]:rotate-45 transition-transform duration-300 text-black'
                  size={18}
                />
              </AccordionTrigger>
              <AccordionContent className='pt-[22px] text-lg max-w-[90%] transition-opacity duration-[400ms] ease-[cubic-bezier(0.40,0.00,0.20,1.00)]'>
                {faq.answer}
                {faq.id === 5 && (
                  <>
                    <h2 className='font-bold mt-2 mb-4'>
                      Supported Permissions:
                    </h2>
                    <ul className='list-disc pl-8'>
                      <li className=' max-w-fit  mb-6 mt-3 '>
                        Access to{" "}
                        <code className='bg-[#f4f4f4] px-2 rounded-md'>
                          http:///
                        </code>{" "}
                        and{" "}
                        <code className='bg-[#f4f4f4] px-2 rounded-md'>
                          https:///
                        </code>
                      </li>
                      {permissions.map((item, i) => (
                        <li key={i} className=' max-w-fit  mb-6 mt-3 '>
                          <code className='bg-[#f4f4f4] px-2 rounded-md'>
                            {item}
                          </code>
                        </li>
                      ))}
                    </ul>
                    If a .crx file requests permissions beyond this list, an
                    error message will appear during installation.
                  </>
                )}
                {faq.id === 6 && (
                  <>
                    <ul className='list-disc pl-8'>
                      {supportedChromeAPIs.map((item, i) => (
                        <li key={i} className=' max-w-fit  mb-6 mt-3 '>
                          <code className='bg-[#f4f4f4] px-2 rounded-md'>
                            {item}
                          </code>
                        </li>
                      ))}
                    </ul>
                    We continuously expand API support to make more extensions
                    compatible.
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
