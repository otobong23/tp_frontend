"use client"
import { useState } from 'react';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full md:max-w-[80%] mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className=" rounded-lg mb-2 overflow-hidden"
        >
          {/* Header */}
          <div className={`accordion-content transition-max-height duration-700 ease-in-out ${activeIndex === index ? "max-h-[450px]" : "max-h-[95px] md:max-h-[120px]"
            } overflow-hidden bg-white p-4`}>
            <div
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between cursor-pointer p-4"
            >
              <div className="flex items-center gap-9">
                <span className="text-gray-400 text-[32px] md:text-[48px] font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-bold text-[20px] md:text-[32px]">{item.title}</h3>

                </div>
              </div>

              {/* Plus / Close Icon */}
              <div>
                <div className="text-gray-600">
                  {activeIndex === index ? (
                    <span className="text-2xl font-bold">×</span> // Close icon
                  ) : (
                    <span className="text-2xl font-bold">+</span> // Plus icon
                  )}
                </div>
              </div>

            </div>
            <div className=''>
              <p className='ms-[5.8rem] md:ms-[7rem] md:w-[70%]'>{item.content}</p>
            </div>
          </div>

          {/* Content */}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
