import React from 'react';
import { Check } from 'lucide-react';

export function Pricing() {
  const tiers = [
    {
      name: 'Free',
      price: '0',
      description: 'Perfect for getting started and exploring the platform',
      features: [
        'Create a profile',
        'Browse projects',
        'Join up to 2 teams',
        'Basic collaboration tools',
        'Community support'
      ],
      cta: 'Get Started',
      mostPopular: false
    },
    {
      name: 'Pro',
      price: '19',
      description: 'Everything you need for serious collaboration',
      features: [
        'All Free features',
        'Unlimited team joins',
        'Create unlimited projects',
        'Advanced collaboration tools',
        'Priority support',
        'Custom project showcase',
        'Mentor matching'
      ],
      cta: 'Subscribe',
      mostPopular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For organizations and educational institutions',
      features: [
        'All Pro features',
        'Custom branding',
        'API access',
        'SSO integration',
        'Dedicated support',
        'Analytics dashboard',
        'Custom integrations'
      ],
      cta: 'Contact Sales',
      mostPopular: false
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl shadow-lg bg-white p-8 ${
                tier.mostPopular ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              {tier.mostPopular && (
                <span className="absolute top-0 -translate-y-1/2 bg-indigo-600 text-white px-3 py-1 text-sm font-semibold tracking-wide rounded-full">
                  Most Popular
                </span>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-medium text-gray-900">{tier.name}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold tracking-tight text-gray-900">
                    ${tier.price}
                  </span>
                  {tier.price !== 'Custom' && (
                    <span className="ml-1 text-xl font-semibold text-gray-500">/month</span>
                  )}
                </div>
                <p className="mt-6 text-gray-500">{tier.description}</p>
              </div>

              <ul className="mt-6 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <Check className="h-5 w-5 text-indigo-600 shrink-0" />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button
                  className={`w-full py-3 px-4 rounded-md shadow ${
                    tier.mostPopular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                  } font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}