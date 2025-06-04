import React, { useState } from 'react';
import './FAQ.css';
import { FaPlus, FaChevronDown } from 'react-icons/fa';

const faqs = [
    {
        question: 'How long does a tattoo take to heal?',
        answer:
            'A tattoo typically takes 2-4 weeks to heal on the surface. Complete internal healing can take up to 3 months depending on your immune system and care routine.'
    },
    {
        question: 'What are the key stages of tattoo healing?',
        answer:
            'Healing progresses through these stages: 1) Redness and oozing in the first few days, 2) Scabbing and flaking in the first 1-2 weeks, 3) Dullness during deeper healing, 4) Full clarity and vibrance after 4+ weeks.'
    },
    {
        question: 'How should I clean my new tattoo?',
        answer:
            'Gently wash your tattoo with lukewarm water and a mild, fragrance-free soap 2-3 times daily. Pat it dry with a clean towel and apply a thin layer of tattoo-specific ointment or unscented lotion.'
    },
    {
        question: 'Can I work out after getting a tattoo?',
        answer:
            'It’s best to avoid heavy sweating, friction, or stretching the tattooed area for the first 3-5 days. Listen to your body and consult your artist if unsure.'
    },
    {
        question: 'Is it normal for my tattoo to itch?',
        answer:
            'Yes. Itching is part of the healing process. Avoid scratching or picking; instead, pat the area gently and keep it moisturized.'
    },
    {
        question: 'When can I go swimming after getting a tattoo?',
        answer:
            'Avoid pools, oceans, lakes, and hot tubs for at least 2-3 weeks. Prolonged soaking increases the risk of infection and ink loss.'
    },
    {
        question: 'How do I know if my tattoo is infected?',
        answer:
            'Watch for symptoms like increasing redness, swelling, heat, pus, or a foul smell. If you notice any of these, contact your artist and a medical provider immediately.'
    },
    {
        question: 'Can I apply sunscreen on a healing tattoo?',
        answer:
            'No. Avoid applying sunscreen until the tattoo is fully healed. Once healed, always use SPF 30+ to protect your ink from fading.'
    },
    {
        question: 'Do I need to stay hydrated after getting a tattoo?',
        answer:
            'Yes! Staying hydrated supports the healing process and keeps your skin in optimal condition, helping your tattoo look its best.'
    },
    {
        question: 'What happens if a scab comes off early?',
        answer:
            'If a scab is picked or falls off prematurely, it can cause ink loss or patchiness. Let scabs fall naturally and don’t touch them.'
    },
    {
        question: 'Do deposits go toward my final tattoo cost?',
        answer:
            'Yes, deposits secure your appointment and are applied toward the final cost. They are usually non-refundable, especially for late cancellations or no-shows.'
    },
    {
        question: 'How painful is getting a tattoo?',
        answer:
            'Pain varies based on placement, size, and your tolerance. Areas with thin skin or near bone (ribs, spine, knees) tend to be more painful. Most people describe it as a burning or scratching sensation.'
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = index => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-page">
            <h1 className="faq-title">Frequently Asked Questions</h1>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${openIndex === index ? 'open' : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            <span>{faq.question}</span>
                            <FaChevronDown className={`faq-icon ${openIndex === index ? 'rotate' : ''}`} />
                        </div>
                        <div className="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
