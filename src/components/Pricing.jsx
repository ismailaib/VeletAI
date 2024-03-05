import React from 'react';
import '../styles/pricing.css';

const Service = ({ service ,leftVariant, rightVariant}) => {
  return (
    <div className="service">
      <h2>{service.title}</h2>
      {service.plans.map((plan, index) => (
        <div key={index} className="plan">
          <h3>{plan.name}</h3>
          <p>{plan.description}</p>
          <p>Price: ${plan.price}/month</p>
        </div>
      ))}
    </div>
  );
};

const Pricing = () => {
  const cardsData = [
    {
      id: 1,
      title: "PrettifyPro",
      plans: [
        { name: "Basic Plan", description: "Up to 1000 lines of code per month", price: "Free" },
        { name: "Pro Plan", description: "Up to 5000 lines of code per month", price: "Free" },
        { name: "Enterprise Plan", description: "Custom pricing with unlimited lines of code", price: "Free" }
      ]
    },
    {
      id: 2,
      title: "BackgroundMagic",
      plans: [
        { name: "Starter Plan", description: "Up to 100 images per month", price: "Free" },
        { name: "Standard Plan", description: "Up to 500 images per month", price: 29.99 },
        { name: "Premium Plan", description: "Up to 1000 images per month", price: 49.99 }
      ]
    },
    {
      id: 3,
      title: "ImageGenius",
      plans: [
        { name: "Basic Plan", description: "Access to basic image generation tools", price: "Free" },
        { name: "Pro Plan", description: "Advanced image editing features", price: 39.99 },
        { name: "Agency Plan", description: "Unlimited access to all features", price: 99.99 }
      ]
    },
    {
      id: 4,
      title: "TextPerfect",
      plans: [
        { name: "Essential Plan", description: "Basic grammar and style correction", price: "Free" },
        { name: "Advanced Plan", description: "Advanced grammar and punctuation correction", price: 24.99 },
        { name: "Corporate Plan", description: "Team collaboration features", price: 49.99 }
      ]
    },
    {
      id: 5,
      title: "IdeaForge",
      plans: [
        { name: "Basic Plan", description: "Access to basic idea generation prompts", price: "Free" },
        { name: "Pro Plan", description: "Advanced idea customization options", price: 14.99 },
        { name: "Business Plan", description: "Customizable idea categories", price: 29.99 }
      ]
    }
  ];

  return (
    <div className="pricing">
      <div className='services'>
      {cardsData.map((service, index) => (
        <Service key={index} service={service} />
      ))}
      </div>
    </div>
  );
};

export default Pricing;
