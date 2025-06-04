// File: src/pages/FAQ.jsx
import React from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'How long does a tattoo take to heal?',
    answer: 'Most tattoos heal on the surface within 2–3 weeks. Complete internal healing can take up to 6–8 weeks depending on size and placement.'
  },
  {
    question: 'What are the key stages of tattoo healing?',
    answer: 'Healing occurs in three stages: (1) Oozing and inflammation for the first 3 days, (2) peeling and scabbing from days 4–14, and (3) surface healing and dryness from days 15–30.'
  },
  {
    question: 'Can I shower after getting a tattoo?',
    answer: 'Yes, but avoid soaking it. Use lukewarm water and fragrance-free soap, pat dry with a clean towel, and never scrub the tattooed area.'
  },
  {
    question: 'How do I care for my tattoo during the peeling stage?',
    answer: 'Avoid picking or scratching. Moisturize lightly 2–3 times a day with a recommended ointment like Aquaphor or unscented lotion.'
  },
  {
    question: 'What should I avoid during the healing process?',
    answer: 'Avoid swimming, hot tubs, direct sunlight, tight clothing on the tattoo, and excessive sweating for at least 2 weeks.'
  },
  {
    question: 'Does staying hydrated help with healing?',
    answer: 'Absolutely. Hydration supports your immune system and skin regeneration, aiding in faster and smoother tattoo healing.'
  },
  {
    question: 'How painful is getting a tattoo?',
    answer: 'Pain varies by person and body part. Bony or sensitive areas like ribs, spine, and ankles are usually more painful. Most describe it as a scratching or burning sensation.'
  },
  {
    question: 'What is your deposit policy?',
    answer: 'A non-refundable deposit is required to book an appointment. It goes toward the final price and secures your artist’s time.'
  },
  {
    question: 'Can I reschedule or cancel my appointment?',
    answer: 'Yes, but you must provide at least 48 hours notice. Last-minute cancellations or no-shows will forfeit the deposit.'
  },
  {
    question: 'Is it safe to get a tattoo while pregnant or breastfeeding?',
    answer: 'It is not recommended due to potential risk of infection and the lack of studies proving safety during pregnancy or lactation.'
  },
  {
    question: 'When can I work out after getting a tattoo?',
    answer: 'Wait at least 48–72 hours. Strenuous activity can stretch or irritate the skin and introduce bacteria to the area.'
  },
  {
    question: 'What if my tattoo gets infected?',
    answer: 'Signs include redness, swelling, pus, and severe pain. Contact your artist and seek medical attention promptly. Do not try to treat a serious infection on your own.'
  }
];

export default function FAQ() {
  return (
    <div className="faq-page">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}