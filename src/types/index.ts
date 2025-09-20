export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
  service: string;
}