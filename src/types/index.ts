import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'dark';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
}

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  isDark?: boolean;
}

export interface FaqItemData {
  question: string;
  answer: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  desc: string;
}

export interface WorkflowStep {
  num: string;
  title: string;
  desc: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  comment: string;
}

export interface ProblemCard {
  title: string;
  description: string;
  icon: 'graduation' | 'clock' | 'users';
}
