import { createContext, useContext } from "react";

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
    const ctx = useContext(AccordionItemContext);

    if (!ctx) {
            throw new Error('AccordionItem-related components must be wrapped by <Accordion.Item>.');
    }
    return ctx;
}

export default function AccordionItem({ children, className, id }) {
    if (!id) {
        throw new Error('AccordionItem requires an id prop');
    }
    
    return (
        <AccordionItemContext.Provider value={id}>
            <li className={className}>{children}</li>
        </AccordionItemContext.Provider>
    );
}