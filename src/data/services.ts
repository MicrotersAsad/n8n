import { Service, Testimonial, PricingPlan } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'CRM Automation',
    description: 'Streamline your customer relationship management with automated workflows',
    features: [
      'Lead scoring and routing',
      'Email marketing automation',
      'Customer onboarding sequences',
      'Sales pipeline management',
      'Data synchronization'
    ],
    price: 'Starting at $299',
    icon: 'users'
  },
  {
    id: '2',
    title: 'E-commerce Integration',
    description: 'Connect your online store with inventory, shipping, and customer service systems',
    features: [
      'Order processing automation',
      'Inventory management',
      'Customer notifications',
      'Payment reconciliation',
      'Multi-platform sync'
    ],
    price: 'Starting at $399',
    icon: 'shopping-cart'
  },
  {
    id: '3',
    title: 'Marketing Automation',
    description: 'Automate your marketing campaigns and social media management',
    features: [
      'Social media scheduling',
      'Email campaign automation',
      'Lead generation workflows',
      'Analytics reporting',
      'Content distribution'
    ],
    price: 'Starting at $249',
    icon: 'megaphone'
  },
  {
    id: '4',
    title: 'Data Processing',
    description: 'Automate data collection, processing, and reporting workflows',
    features: [
      'Data extraction and transformation',
      'Automated reporting',
      'Database synchronization',
      'API integrations',
      'Real-time monitoring'
    ],
    price: 'Starting at $199',
    icon: 'database'
  },
  {
    id: '5',
    title: 'HR & Operations',
    description: 'Streamline HR processes and operational workflows',
    features: [
      'Employee onboarding',
      'Time tracking automation',
      'Document management',
      'Approval workflows',
      'Compliance monitoring'
    ],
    price: 'Starting at $349',
    icon: 'briefcase'
  },
  {
    id: '6',
    title: 'Custom Solutions',
    description: 'Tailored automation solutions for your specific business needs',
    features: [
      'Custom workflow design',
      'API development',
      'Third-party integrations',
      'Legacy system connections',
      'Ongoing support'
    ],
    price: 'Contact for quote',
    icon: 'settings'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    content: 'The automation workflows saved us 20 hours per week. Our team can now focus on strategic tasks instead of repetitive manual work.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'E-Commerce Plus',
    content: 'Incredible ROI! The e-commerce automation paid for itself within the first month. Orders are processed seamlessly now.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    company: 'Marketing Pro',
    content: 'Our lead generation increased by 300% after implementing their marketing automation workflows. Highly recommended!',
    rating: 5
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$199',
    period: 'one-time',
    description: 'Perfect for small businesses getting started with automation',
    features: [
      '1 automation workflow',
      'Up to 3 app integrations',
      'Basic support',
      '30-day warranty',
      'Setup documentation'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$499',
    period: 'one-time',
    description: 'Ideal for growing businesses with multiple automation needs',
    popular: true,
    features: [
      'Up to 5 automation workflows',
      'Up to 10 app integrations',
      'Priority support',
      '90-day warranty',
      'Training session included',
      'Custom modifications'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$999',
    period: 'one-time',
    description: 'Complete automation solution for large organizations',
    features: [
      'Unlimited automation workflows',
      'Unlimited app integrations',
      '24/7 premium support',
      '1-year warranty',
      'Dedicated account manager',
      'Monthly optimization reviews',
      'Advanced analytics',
      'Custom API development'
    ]
  }
];