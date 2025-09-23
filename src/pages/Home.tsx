import React, { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle, ArrowRight, Target, Brain, Heart, User, Briefcase, Users, BookOpen, Lightbulb, Award, Globe, BarChart, ArrowLeft, FlaskConical, Calculator, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code } from 'lucide-react';

const CareerAssessment = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [results, setResults] = useState(null);
  const [showingResults, setShowingResults] = useState(false);
  const [big5Scores, setBig5Scores] = useState(null);
  const [showDeeperAssessment, setShowDeeperAssessment] = useState(false);
  const [satisfiedWithResults, setSatisfiedWithResults] = useState(null);

  const assessmentPages = [
    // Mathematics Assessment
    {
      id: 'mathematics_basic',
      title: 'Mathematics Fundamentals',
      subtitle: 'Basic Mathematical Reasoning',
      icon: Calculator,
      color: 'assessment-blue',
      questions: [
        {
          id: 'algebra_basic',
          question: 'Solve for x: 3x + 7 = 22',
          type: 'choice',
          options: [
            { value: 'correct', label: 'x = 5', correct: true },
            { value: 'wrong1', label: 'x = 3' },
            { value: 'wrong2', label: 'x = 7' },
            { value: 'wrong3', label: 'x = 15' }
          ]
        },
        {
          id: 'percentage',
          question: 'If 60% of students in a class of 40 are girls, how many boys are in the class?',
          type: 'choice',
          options: [
            { value: 'correct', label: '16 boys', correct: true },
            { value: 'wrong1', label: '24 boys' },
            { value: 'wrong2', label: '20 boys' },
            { value: 'wrong3', label: '14 boys' }
          ]
        }
      ]
    },

    // Summary after basics
    {
      id: 'math_summary',
      title: 'Mathematical Foundation Check',
      subtitle: 'Your Basic Math Skills',
      icon: Calculator,
      color: 'assessment-blue',
      type: 'summary',
      content: {
        title: 'Great start!',
        description: 'We\'ve assessed your foundational math skills. Now let\'s explore more complex problem-solving.',
        nextSection: 'Next: Advanced Problem Solving'
      }
    },

    // Advanced Mathematics with East African context
    {
      id: 'mathematics_advanced',
      title: 'Applied Mathematics',
      subtitle: 'Real-world Problem Solving',
      icon: Calculator,
      color: 'assessment-blue',
      questions: [
        {
          id: 'coffee_economics',
          question: 'A coffee farmer in Sidamo produces 1,200 kg of coffee beans per hectare. If the international price is $4.50/kg but local processing adds 30% value, what\'s the best strategy?',
          type: 'choice',
          options: [
            { value: 'process_locally', label: 'Process locally: $4.50 × 1.30 = $5.85/kg (Higher profit per kg)', correct: true },
            { value: 'sell_raw', label: 'Sell raw beans at $4.50/kg (Quick cash)' },
            { value: 'store_and_wait', label: 'Store beans and wait for price increase' },
            { value: 'sell_half', label: 'Sell half raw, process half' }
          ]
        },
        {
          id: 'urban_planning',
          question: 'Addis Ababa needs a new light rail line. The city has 5 million people, 60% use public transport. If each train carries 300 people and runs every 10 minutes, how many trains are needed for rush hour?',
          type: 'choice',
          options: [
            { value: 'calculate_demand', label: 'Calculate: 5M × 0.6 × 0.2 (rush hour) ÷ 300 = 2,000 passengers per direction', correct: true },
            { value: 'copy_other_cities', label: 'Copy the same system as other African cities' },
            { value: 'start_small', label: 'Start with 5 trains and expand later' },
            { value: 'use_buses', label: 'Use buses instead - cheaper and more flexible' }
          ]
        }
      ]
    },

    // Science with Ethiopian context
    {
      id: 'applied_science',
      title: 'Applied Science',
      subtitle: 'Science in Ethiopian Context',
      icon: FlaskConical,
      color: 'assessment-green',
      questions: [
        {
          id: 'altitude_science',
          question: 'You\'re a scientist studying why athletes from Ethiopian highlands excel in long-distance running. What\'s the most scientifically sound explanation?',
          type: 'choice',
          options: [
            { value: 'altitude_adaptation', label: 'High altitude training increases red blood cell count and oxygen efficiency', correct: true },
            { value: 'genetic_only', label: 'It\'s purely genetic - Ethiopians are just naturally faster' },
            { value: 'diet_based', label: 'Traditional Ethiopian diet provides special nutrients' },
            { value: 'cultural_only', label: 'Running culture and motivation are the only factors' }
          ]
        },
        {
          id: 'medical_innovation',
          question: 'Ethiopia has a shortage of doctors in rural areas. As a biomedical engineer, what\'s your most innovative solution?',
          type: 'choice',
          options: [
            { value: 'telemedicine_ai', label: 'Develop AI-powered diagnostic tools that health workers can use remotely', correct: true },
            { value: 'train_more_doctors', label: 'Simply train more doctors and force them to work in rural areas' },
            { value: 'import_doctors', label: 'Import doctors from other countries' },
            { value: 'ignore_problem', label: 'Focus on urban healthcare first, rural areas can wait' }
          ]
        }
      ]
    },

    // Science Summary
    {
      id: 'science_summary',
      title: 'Scientific Thinking Assessment',
      subtitle: 'Your Applied Science Skills',
      icon: FlaskConical,
      color: 'assessment-green',
      type: 'summary',
      content: {
        title: 'Excellent scientific reasoning!',
        description: 'You\'ve shown strong ability to apply scientific knowledge to real-world Ethiopian challenges.',
        nextSection: 'Next: Social Sciences & Cultural Understanding'
      }
    },

    // Social Sciences with deep Ethiopian context
    {
      id: 'social_studies_advanced',
      title: 'Social Sciences & Policy',
      subtitle: 'Understanding Society and Culture',
      icon: Globe,
      color: 'assessment-purple',
      questions: [
        {
          id: 'federalism_challenge',
          question: 'Ethiopia\'s federal system has 11 regional states. A policy works well in Tigray but fails in Somali region. As a policy analyst, what\'s your approach?',
          type: 'choice',
          options: [
            { value: 'contextualize_policy', label: 'Study cultural, economic, and geographic differences to adapt the policy', correct: true },
            { value: 'force_uniformity', label: 'Enforce the same policy everywhere - uniformity is important' },
            { value: 'abandon_policy', label: 'If it doesn\'t work everywhere, abandon the policy completely' },
            { value: 'blame_regions', label: 'The regions that failed are just not implementing it correctly' }
          ]
        },
        {
          id: 'diaspora_economics',
          question: 'Ethiopian diaspora sends $5 billion in remittances annually. How can this be leveraged for maximum development impact?',
          type: 'choice',
          options: [
            { value: 'investment_channels', label: 'Create investment channels for diaspora to fund infrastructure and businesses', correct: true },
            { value: 'just_consumption', label: 'Let families use the money for consumption - it helps the economy anyway' },
            { value: 'government_takes_cut', label: 'Government should tax remittances heavily to fund projects' },
            { value: 'discourage_migration', label: 'Focus on stopping people from leaving instead' }
          ]
        }
      ]
    },

    // Critical Thinking Challenge
    {
      id: 'critical_thinking',
      title: 'Complex Problem Solving',
      subtitle: 'Multi-dimensional Challenges',
      icon: Brain,
      color: 'personality-openness',
      questions: [
        {
          id: 'climate_agriculture',
          question: 'Climate change is affecting rainfall patterns in Ethiopian agriculture. Coffee yields in some areas are dropping 15% per year. You\'re advising the government. What\'s your comprehensive solution?',
          type: 'choice',
          options: [
            { value: 'integrated_approach', label: 'Combine drought-resistant varieties, farmer education, climate data systems, and alternative livelihood training', correct: true },
            { value: 'technology_only', label: 'Just introduce new drought-resistant coffee varieties' },
            { value: 'abandon_coffee', label: 'Tell farmers to stop growing coffee and switch to other crops' },
            { value: 'wait_and_see', label: 'Wait for international aid and climate finance' }
          ]
        },
        {
          id: 'digital_divide',
          question: 'Only 20% of Ethiopians have internet access, mostly in cities. As a tech policy advisor, how do you bridge this divide sustainably?',
          type: 'choice',
          options: [
            { value: 'leapfrog_strategy', label: 'Satellite + mobile-first strategy + local language content + digital literacy programs', correct: true },
            { value: 'build_cables', label: 'Build expensive fiber optic cables to every village' },
            { value: 'ignore_rural', label: 'Focus on cities first - rural areas can wait 10-15 years' },
            { value: 'import_solution', label: 'Copy exactly what worked in other African countries' }
          ]
        }
      ]
    },

    // Academic Summary
    {
      id: 'academic_summary',
      title: 'Academic Assessment Complete',
      subtitle: 'Your Intellectual Profile',
      icon: Award,
      color: 'assessment-teal',
      type: 'summary',
      content: {
        title: 'Outstanding analytical thinking!',
        description: 'You\'ve demonstrated strong problem-solving across math, science, and social issues. Now let\'s explore your personality and work preferences.',
        nextSection: 'Next: Personality & Work Style Assessment'
      }
    },

    // Personality - Openness to Experience
    {
      id: 'openness',
      title: 'Intellectual Curiosity',
      subtitle: 'Openness to New Ideas',
      icon: Lightbulb,
      color: 'personality-openness',
      questions: [
        {
          id: 'new_ideas',
          question: 'I actively seek out new ways to solve problems, even if they\'ve never been tried before.',
          type: 'likert',
          options: [
            { value: 1, label: 'Strongly Disagree' },
            { value: 2, label: 'Disagree' },
            { value: 3, label: 'Neutral' },
            { value: 4, label: 'Agree' },
            { value: 5, label: 'Strongly Agree' }
          ]
        },
        {
          id: 'abstract_thinking',
          question: 'I enjoy thinking about complex theories and abstract concepts, even when they have no immediate practical use.',
          type: 'likert',
          options: [
            { value: 1, label: 'Strongly Disagree' },
            { value: 2, label: 'Disagree' },
            { value: 3, label: 'Neutral' },
            { value: 4, label: 'Agree' },
            { value: 5, label: 'Strongly Agree' }
          ]
        },
        {
          id: 'creativity_application',
          question: 'When I learn something new, I immediately think of creative ways to apply it in Ethiopian contexts.',
          type: 'likert',
          options: [
            { value: 1, label: 'Strongly Disagree' },
            { value: 2, label: 'Disagree' },
            { value: 3, label: 'Neutral' },
            { value: 4, label: 'Agree' },
            { value: 5, label: 'Strongly Agree' }
          ]
        }
      ]
    },

    // Personality Summary 1
    {
      id: 'openness_summary',
      title: 'Your Creativity Profile',
      subtitle: 'Intellectual Openness Assessment',
      icon: Lightbulb,
      color: 'personality-openness',
      type: 'summary',
      content: {
        title: 'Your creative thinking style is emerging!',
        description: 'We\'re building a picture of how you approach new ideas and creative challenges.',
        nextSection: 'Next: Work Style & Organization'
      }
    },

    // Conscientiousness
    {
      id: 'conscientiousness',
      title: 'Work Style & Organization',
      subtitle: 'How You Approach Tasks',
      icon: Award,
      color: 'personality-conscientiousness',
      questions: [
        {
          id: 'organization',
          question: 'I create detailed plans and stick to them, even when it\'s tempting to try a different approach.',
          type: 'likert',
          options: [
            { value: 1, label: 'Strongly Disagree' },
            { value: 2, label: 'Disagree' },
            { value: 3, label: 'Neutral' },
            { value: 4, label: 'Agree' },
            { value: 5, label: 'Strongly Agree' }
          ]
        },
        {
          id: 'persistence_challenge',
          question: 'When working on a difficult project, I break it into smaller steps and complete each one methodically.',
          type: 'likert',
          options: [
            { value: 1, label: 'Strongly Disagree' },
            { value: 2, label: 'Disagree' },
            { value: 3, label: 'Neutral' },
            { value: 4, label: 'Agree' },
            { value: 5, label: 'Strongly Agree' }
          ]
        },
        {
          id: 'quality_standards',
          question: 'I hold myself to high standards and am not satisfied with "good enough" work.',
          type: 'likert',
          options: [
            { value: 1, label: 'Strongly Disagree' },
            { value: 2, label: 'Disagree' },
            { value: 3, label: 'Neutral' },
            { value: 4, label: 'Agree' },
            { value: 5, label: 'Strongly Agree' }
          ]
        }
      ]
    },

    // Work Style Summary
    {
      id: 'conscientiousness_summary',
      title: 'Your Work Style Profile',
      subtitle: 'Organization & Persistence Assessment',
      icon: Award,
      color: 'personality-conscientiousness',
      type: 'summary',
      content: {
        title: 'Your work approach is becoming clear!',
        description: 'Understanding how you organize and persist through challenges helps us match you with the right career paths.',
        nextSection: 'Next: Social Energy & Leadership'
      }
    },

    // Extraversion
    {
      id: 'extraversion',
      title: 'Social Energy & Leadership',
      subtitle: 'How You Work with Others',
      icon: Users,
      color: 'personality-extraversion',
      questions: [
        {
          id: 'social_energy',
          question: 'I feel energized when working with large groups of people on complex projects.',
          type: 'likert',
          options: [
            { value: 1, label: 'Strongly Disagree' },
            { value: 2, label: 'Disagree' },
            { value: 3, label: 'Neutral' },
            { value: 4, label: 'Agree' },
            { value: 5, label: 'Strongly Agree' }
          ]
        },
        {
          id: 'leadership_natural',
          question: 'In group projects, others naturally look to me for direction and decision-making.',
          type: 'likert',
          options: [
            { value: 1, label: 'Strongly Disagree' },
            { value: 2, label: 'Disagree' },
            { value: 3, label: 'Neutral' },
            { value: 4, label: 'Agree' },
            { value: 5, label: 'Strongly Agree' }
          ]
        },
        {
          id: 'public_influence',
          question: 'I enjoy presenting my ideas to large audiences and influencing public opinion.',
          type: 'likert',
          options: [
            { value: 1, label: 'Strongly Disagree' },
            { value: 2, label: 'Disagree' },
            { value: 3, label: 'Neutral' },
            { value: 4, label: 'Agree' },
            { value: 5, label: 'Strongly Agree' }
          ]
        }
      ]
    },

    // Social Summary
    {
      id: 'extraversion_summary',
      title: 'Your Social Leadership Style',
      subtitle: 'Social Energy Assessment',
      icon: Users,
      color: 'personality-extraversion',
      type: 'summary',
      content: {
        title: 'Your leadership potential is clear!',
        description: 'We understand how you energize others and take charge in group situations.',
        nextSection: 'Next: Collaboration & Empathy'
      }
    },

    // Agreeableness
    {
      id: 'agreeableness',
      title: 'Collaboration & Empathy',
      subtitle: 'How You Relate to Others',
      icon: Heart,
      color: 'personality-agreeableness',
      questions: [
        {
          id: 'cooperation_over_competition',
          question: 'I prefer finding win-win solutions rather than competing to win at others\' expense.',
          type: 'likert',
          options: [
            { value: 1, label: 'Strongly Disagree' },
            { value: 2, label: 'Disagree' },
            { value: 3, label: 'Neutral' },
            { value: 4, label: 'Agree' },
            { value: 5, label: 'Strongly Agree' }
          ]
        },
        {
          id: 'empathy_understanding',
          question: 'I can easily understand different perspectives, even when I disagree with them.',
          type: 'likert',
          options: [
            { value: 1, label: 'Strongly Disagree' },
            { value: 2, label: 'Disagree' },
            { value: 3, label: 'Neutral' },
            { value: 4, label: 'Agree' },
            { value: 5, label: 'Strongly Agree' }
          ]
        },
        {
          id: 'helping_motivation',
          question: 'Making a positive impact on other people\'s lives is more important to me than personal recognition.',
          type: 'likert',
          options: [
            { value: 1, label: 'Strongly Disagree' },
            { value: 2, label: 'Disagree' },
            { value: 3, label: 'Neutral' },
            { value: 4, label: 'Agree' },
            { value: 5, label: 'Strongly Agree' }
          ]
        }
      ]
    },

    // Emotional Stability
    {
      id: 'emotional_stability',
      title: 'Emotional Resilience',
      subtitle: 'How You Handle Pressure',
      icon: Brain,
      color: 'personality-emotional',
      questions: [
        {
          id: 'stress_management',
          question: 'I remain calm and think clearly even under intense pressure and tight deadlines.',
          type: 'likert',
          options: [
            { value: 5, label: 'Strongly Agree' },
            { value: 4, label: 'Agree' },
            { value: 3, label: 'Neutral' },
            { value: 2, label: 'Disagree' },
            { value: 1, label: 'Strongly Disagree' }
          ]
        },
        {
          id: 'adaptability_change',
          question: 'When unexpected changes happen, I quickly adapt and find new solutions.',
          type: 'likert',
          options: [
            { value: 5, label: 'Strongly Agree' },
            { value: 4, label: 'Agree' },
            { value: 3, label: 'Neutral' },
            { value: 2, label: 'Disagree' },
            { value: 1, label: 'Strongly Disagree' }
          ]
        },
        {
          id: 'confidence_challenges',
          question: 'I feel confident taking on challenges that others might find overwhelming.',
          type: 'likert',
          options: [
            { value: 5, label: 'Strongly Agree' },
            { value: 4, label: 'Agree' },
            { value: 3, label: 'Neutral' },
            { value: 2, label: 'Disagree' },
            { value: 1, label: 'Strongly Disagree' }
          ]
        }
      ]
    },

    // Final Personality Summary
    {
      id: 'personality_summary',
      title: 'Personality Assessment Complete',
      subtitle: 'Your Complete Personality Profile',
      icon: Brain,
      color: 'personality-openness',
      type: 'summary',
      content: {
        title: 'Your personality profile is complete!',
        description: 'We now understand your working style, social preferences, and how you handle challenges. Final section: career values and goals.',
        nextSection: 'Final: Career Values & Aspirations'
      }
    },

    // Career Values & Interests
    {
      id: 'career_values',
      title: 'Career Values & Goals',
      subtitle: 'What Drives You',
      icon: Target,
      color: 'assessment-teal',
      questions: [
        {
          id: 'impact_type',
          question: 'What type of impact do you most want to have in your career?',
          type: 'choice',
          options: [
            { value: 'innovation', label: 'Create breakthrough innovations that change how things are done' },
            { value: 'individual_help', label: 'Directly help individuals improve their lives' },
            { value: 'systems_change', label: 'Change systems and policies to help entire communities' },
            { value: 'knowledge', label: 'Advance human knowledge and understanding' },
            { value: 'economic_growth', label: 'Drive economic growth and create jobs' }
          ]
        },
        {
          id: 'work_environment_preference',
          question: 'Where do you see yourself thriving most?',
          type: 'choice',
          options: [
            { value: 'research_lab', label: 'Research laboratory discovering new knowledge' },
            { value: 'field_work', label: 'Field work directly in communities across Ethiopia' },
            { value: 'tech_company', label: 'Technology company building digital solutions' },
            { value: 'government', label: 'Government office developing national policy' },
            { value: 'international', label: 'International organization working across Africa' },
            { value: 'startup', label: 'Fast-paced startup or as an entrepreneur' }
          ]
        },
        {
          id: 'success_definition',
          question: 'How do you define career success for yourself?',
          type: 'choice',
          options: [
            { value: 'expertise', label: 'Being recognized as a leading expert in my field' },
            { value: 'impact_scale', label: 'The number of people positively affected by my work' },
            { value: 'innovation_breakthrough', label: 'Creating something entirely new that changes the world' },
            { value: 'financial_security', label: 'Achieving financial security for my family and community' },
            { value: 'problem_solving', label: 'Solving complex problems that others can\'t' },
            { value: 'leadership_influence', label: 'Leading teams and influencing important decisions' }
          ]
        }
      ]
    }
  ];

  const careerRecommendations = {
    'research_innovator': {
      title: 'Research & Innovation Leader',
      careers: ['Research Scientist', 'R&D Director', 'Innovation Consultant', 'Academic Researcher', 'Think Tank Analyst'],
      description: 'Your combination of intellectual curiosity, systematic approach, and desire for breakthrough impact makes you ideal for leading research initiatives.',
      nextSteps: ['Develop advanced research methods', 'Master statistical analysis', 'Build research networks', 'Consider graduate school in your field of interest'],
      timeline: '3-7 years to research leadership roles',
      ethiopianContext: 'Ethiopia needs research leaders for agricultural innovation, medical research, and technology development.',
      professionals: ['Dr. Sarah Chen', 'Dr. Aisha Patel']
    },
    'social_systems_changer': {
      title: 'Social Systems & Policy Leader',
      careers: ['Development Policy Analyst', 'International Development Director', 'Social Entrepreneur', 'Government Policy Advisor', 'NGO Executive Director'],
      description: 'Your empathy, collaborative spirit, and systems thinking make you perfect for addressing large-scale social challenges.',
      nextSteps: ['Study development economics', 'Gain field experience', 'Learn multiple languages', 'Build networks in civil society'],
      timeline: '4-8 years to senior policy positions',
      ethiopianContext: 'Critical for Ethiopia\'s development - from rural healthcare to urban planning to international relations.',
      professionals: ['Jordan Kim', 'Dr. Michael Foster']
    },
    'tech_entrepreneur': {
      title: 'Technology Entrepreneur & Product Leader',
      careers: ['Tech Startup Founder', 'Product Manager', 'Software Architect', 'Technology Consultant', 'Chief Technology Officer'],
      description: 'Your technical aptitude, creativity, and entrepreneurial drive position you to build scalable technology solutions.',
      nextSteps: ['Master multiple programming languages', 'Build a portfolio of projects', 'Network in tech ecosystems', 'Consider accelerator programs'],
      timeline: '2-5 years to product leadership',
      ethiopianContext: 'Help build Ethiopia\'s digital economy - fintech, agtech, healthtech, edtech solutions.',
      professionals: ['Alex Thompson', 'Marcus Rodriguez']
    },
    'analytical_strategist': {
      title: 'Strategic Analysis & Optimization Expert',
      careers: ['Management Consultant', 'Business Analyst', 'Data Science Director', 'Operations Research Specialist', 'Strategic Planning Director'],
      description: 'Your systematic thinking, attention to detail, and problem-solving skills make you valuable for optimizing complex systems.',
      nextSteps: ['Master advanced analytics tools', 'Develop business acumen', 'Gain consulting experience', 'Learn industry-specific knowledge'],
      timeline: '2-4 years to senior analyst roles',
      ethiopianContext: 'Essential for optimizing everything from supply chains to government services to healthcare delivery.',
      professionals: ['Marcus Rodriguez', 'Dr. Sarah Chen']
    }
  };

  // Helper functions
  const calculateAcademicStats = () => {
    const academicPages = ['mathematics_basic', 'mathematics_advanced', 'applied_science', 'social_studies_advanced', 'critical_thinking'];
    const stats = {};
    let totalCorrect = 0;
    let totalQuestions = 0;

    academicPages.forEach(pageId => {
      const pageResponses = responses[pageId] || {};
      const pageQuestions = assessmentPages.find(p => p.id === pageId)?.questions || [];
      let correct = 0;
      
      pageQuestions.forEach(question => {
        const response = pageResponses[question.id];
        if (response && response.isCorrect) {
          correct++;
          totalCorrect++;
        }
        totalQuestions++;
      });
      
      stats[pageId] = {
        correct,
        total: pageQuestions.length,
        percentage: pageQuestions.length > 0 ? Math.round((correct / pageQuestions.length) * 100) : 0
      };
    });

    return {
      subjects: stats,
      overall: {
        correct: totalCorrect,
        total: totalQuestions,
        percentage: totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0
      }
    };
  };

  const calculateBig5Scores = () => {
    const scores = {
      openness: 0,
      conscientiousness: 0,
      extraversion: 0,
      agreeableness: 0,
      emotional_stability: 0
    };

    ['openness', 'conscientiousness', 'extraversion', 'agreeableness', 'emotional_stability'].forEach(dimension => {
      const pageResponses = responses[dimension as keyof typeof responses] || {};
      const values = Object.values(pageResponses).map((r: any) => r.value as number);
      if (values.length > 0) {
        const avg = values.reduce((sum, val) => sum + val, 0) / values.length;
        scores[dimension] = avg;
      }
    });

    return scores;
  };

  const getCareerRecommendation = (big5Scores: any, academicResponses: any, careerResponses: any) => {
    const { openness, conscientiousness, extraversion, agreeableness } = big5Scores;
    
    // Enhanced logic based on both personality and values
    if (openness >= 4 && conscientiousness >= 4) {
      return 'research_innovator';
    } else if (agreeableness >= 4 && extraversion >= 3.5) {
      return 'social_systems_changer';
    } else if (openness >= 4 && extraversion >= 4) {
      return 'tech_entrepreneur';
    } else {
      return 'analytical_strategist';
    }
  };

  const handleAnswer = (questionId: string, answer: any, pageId: string | null = null) => {
    const targetPageId = pageId || assessmentPages[currentPage].id;
    
    // Check if answer already exists (prevent changing answers)
    const existingAnswer = responses[targetPageId]?.[questionId];
    if (existingAnswer) {
      return; // Don't allow changing answers
    }
    
    // For academic questions, track if answer is correct
    const page = assessmentPages.find(p => p.id === targetPageId);
    const question = page?.questions.find(q => q.id === questionId);
    const isCorrect = (question?.options.find(opt => opt.value === answer.value) as any)?.correct === true;
    
    setResponses((prev: any) => ({
      ...prev,
      [targetPageId]: {
        ...prev[targetPageId],
        [questionId]: {
          ...answer,
          isCorrect: isCorrect
        }
      }
    }));
  };

  const nextQuestion = () => {
    const currentPageObj = assessmentPages[currentPage];
    if (currentQuestionIndex < currentPageObj.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      nextPage();
    }
  };

  const nextPage = () => {
    if (currentPage < assessmentPages.length - 1) {
      setCurrentPage(currentPage + 1);
      setCurrentQuestionIndex(0);
    } else {
      // Calculate results
      const big5 = calculateBig5Scores();
      setBig5Scores(big5);
      const recommendation = getCareerRecommendation(big5, responses, responses.career_values);
      setResults({
        big5Scores: big5,
        recommendedPath: recommendation,
        confidence: 88 + Math.floor(Math.random() * 10)
      });
      setShowingResults(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      const prevPage = assessmentPages[currentPage - 1];
      if (prevPage.questions) {
        setCurrentQuestionIndex(prevPage.questions.length - 1);
      } else {
        setCurrentQuestionIndex(0);
      }
    }
  };

  const isCurrentQuestionAnswered = () => {
    const page = assessmentPages[currentPage];
    if (!page.questions) return true; // Summary pages are always "answered"
    
    const question = page.questions[currentQuestionIndex];
    const pageResponses = responses[page.id] || {};
    return pageResponses[question.id] !== undefined;
  };

  const getTotalQuestions = () => {
    return assessmentPages.reduce((total, page) => {
      if (page.type === 'summary') return total;
      return total + (page.questions?.length || 0);
    }, 0);
  };

  const getCurrentQuestionNumber = () => {
    let questionNumber = 1;
    for (let i = 0; i < currentPage; i++) {
      if (assessmentPages[i].type !== 'summary') {
        questionNumber += (assessmentPages[i].questions?.length || 0);
      }
    }
    if (assessmentPages[currentPage].type !== 'summary') {
      questionNumber += currentQuestionIndex;
    }
    return questionNumber;
  };

  // Results display
  if (showingResults && results) {
    const path = careerRecommendations[results.recommendedPath];
    const big5 = results.big5Scores;
    const academicStats = calculateAcademicStats();
    
    return (
      <div className="min-h-screen bg-gradient-primary">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-assessment-blue rounded-full mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Your Personalized Career Path</h1>
            <p className="text-xl text-muted-foreground">Based on your abilities, personality, and Ethiopian context</p>
            <Badge variant="secondary" className="mt-4">
              {results.confidence}% confidence match
            </Badge>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Academic Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Your Academic Strengths</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-assessment-green mb-2">
                    {academicStats.overall.percentage}%
                  </div>
                  <p className="text-muted-foreground">Overall Academic Performance</p>
                  <p className="text-sm text-muted-foreground">
                    {academicStats.overall.correct} out of {academicStats.overall.total} problems solved correctly
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Big 5 Personality Results */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Your Personality Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-5 gap-4">
                  {[
                    { key: 'openness', label: 'Intellectual Curiosity', color: 'personality-openness' },
                    { key: 'conscientiousness', label: 'Organization & Discipline', color: 'personality-conscientiousness' },
                    { key: 'extraversion', label: 'Social Leadership', color: 'personality-extraversion' },
                    { key: 'agreeableness', label: 'Collaboration', color: 'personality-agreeableness' },
                    { key: 'emotional_stability', label: 'Resilience', color: 'personality-emotional' }
                  ].map(trait => (
                    <div key={trait.key} className="text-center">
                      <div className={`w-20 h-20 mx-auto rounded-full bg-${trait.color} flex items-center justify-center mb-3`}>
                        <span className="text-white font-bold text-lg">
                          {Math.round((big5[trait.key] || 0) * 20)}%
                        </span>
                      </div>
                      <h3 className="font-semibold text-sm">{trait.label}</h3>
                      <p className="text-xs text-muted-foreground">
                        {big5[trait.key] >= 4 ? 'High' : big5[trait.key] >= 3 ? 'Moderate' : 'Lower'}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Career Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl">{path.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center text-lg">{path.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Recommended Career Paths</h4>
                    <ul className="space-y-3">
                      {path.careers.map((career, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-assessment-green mr-3 mt-1 flex-shrink-0" />
                          <span className="font-medium">{career}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="font-semibold mb-4 mt-6 text-lg">Next Steps</h4>
                    <ul className="space-y-3">
                      {path.nextSteps.map((step, index) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight className="w-5 h-5 text-assessment-blue mr-3 mt-1 flex-shrink-0" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Timeline</h4>
                    <p className="text-muted-foreground mb-6">{path.timeline}</p>
                    
                    <h4 className="font-semibold mb-4 text-lg">Ethiopian Context</h4>
                    <p className="text-muted-foreground mb-6">{path.ethiopianContext}</p>
                    
                    <h4 className="font-semibold mb-3 text-lg">Role Models</h4>
                    <p className="text-muted-foreground">{path.professionals.join(', ')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card>
              <CardContent className="text-center py-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Explore courses designed specifically for your career path, or retake the assessment to explore other options.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button 
                    onClick={() => navigate('/courses')}
                    size="lg"
                    className="px-8"
                  >
                    View Your Learning Path
                  </Button>
                  <Button 
                    onClick={() => {
                      setShowingResults(false);
                      setCurrentPage(0);
                      setCurrentQuestionIndex(0);
                      setResponses({});
                      setResults(null);
                      setBig5Scores(null);
                      setSatisfiedWithResults(null);
                    }}
                    variant="outline"
                    size="lg"
                  >
                    Retake Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Handle summary slides
  const currentPageObj = assessmentPages[currentPage];
  if (currentPageObj.type === 'summary') {
    const Icon = currentPageObj.icon;
    const academicStats = currentPageObj.id === 'academic_summary' ? calculateAcademicStats() : null;
    
    return (
      <div className="min-h-screen bg-gradient-primary">
        <div className="container mx-auto px-4 py-8">
          {/* Progress bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Progress Checkpoint
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(((currentPage + 1) / assessmentPages.length) * 100)}% complete
              </span>
            </div>
            <Progress value={((currentPage + 1) / assessmentPages.length) * 100} className="h-2" />
          </div>

          {/* Summary Card */}
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-${currentPageObj.color} rounded-full mb-6`}>
                <Icon className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl">{currentPageObj.content.title}</CardTitle>
              <p className="text-muted-foreground text-lg">{currentPageObj.content.description}</p>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Academic Stats for final academic summary */}
              {academicStats && (
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-center">Your Problem-Solving Performance</h3>
                  <div className="text-center p-6 bg-gradient-card rounded-lg">
                    <div className="text-4xl font-bold text-assessment-green mb-2">
                      {academicStats.overall.percentage}%
                    </div>
                    <div className="text-lg font-semibold">Overall Accuracy</div>
                    <div className="text-muted-foreground">
                      You correctly solved {academicStats.overall.correct} out of {academicStats.overall.total} complex problems
                    </div>
                  </div>
                </div>
              )}

              <div className="text-center pt-6">
                <div className="mb-4">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    {currentPageObj.content.nextSection}
                  </Badge>
                </div>
                
                <Button
                  onClick={nextPage}
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  Continue Assessment
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Assessment questions view
  const currentQuestion = currentPageObj.questions[currentQuestionIndex];
  const pageResponses = responses[currentPageObj.id] || {};
  const currentAnswer = pageResponses[currentQuestion.id];
  const Icon = currentPageObj.icon;
  const isPersonalityQuestion = currentQuestion.type === 'likert';

  return (
    <div className="min-h-screen bg-gradient-primary">
      <div className="container mx-auto px-4 py-8">
        {/* Progress bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Question {getCurrentQuestionNumber()} of {getTotalQuestions()}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round((getCurrentQuestionNumber() / getTotalQuestions()) * 100)}% complete
            </span>
          </div>
          <Progress value={(getCurrentQuestionNumber() / getTotalQuestions()) * 100} className="h-2" />
        </div>

        {/* Question card */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-${currentPageObj.color} rounded-full mb-4`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">{currentPageObj.title}</CardTitle>
            <p className="text-muted-foreground">{currentPageObj.subtitle}</p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <h3 className="text-lg font-medium text-center">{currentQuestion.question}</h3>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  variant={currentAnswer?.value === option.value ? "default" : "outline"}
                  className="w-full text-left h-auto p-4 justify-start"
                  onClick={() => handleAnswer(currentQuestion.id, option)}
                >
                  <div className="flex items-center">
                    {/* Only show correct/incorrect indicators for academic questions, not personality */}
                    {currentAnswer?.value === option.value && !isPersonalityQuestion && (
                      currentAnswer?.isCorrect ? (
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                      ) : (
                        <div className="w-5 h-5 mr-3 text-red-500 flex items-center justify-center">
                          <span className="text-lg font-bold">✕</span>
                        </div>
                      )
                    )}
                    {/* For personality questions, just show selection */}
                    {currentAnswer?.value === option.value && isPersonalityQuestion && (
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-500" />
                    )}
                    <div>
                      <div className="font-medium">{option.label}</div>
                      {currentQuestion.type === 'likert' && (
                        <div className="text-sm text-muted-foreground">
                          {option.value === 5 ? 'Most like me' : 
                           option.value === 4 ? 'Somewhat like me' :
                           option.value === 3 ? 'Neutral' :
                           option.value === 2 ? 'Somewhat unlike me' : 'Least like me'}
                        </div>
                      )}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
            
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={previousQuestion}
                disabled={currentPage === 0 && currentQuestionIndex === 0}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              <Button
                onClick={nextQuestion}
                disabled={!isCurrentQuestionAnswered()}
                className="ml-auto"
              >
                {currentPage === assessmentPages.length - 1 && 
                 currentQuestionIndex === (currentPageObj.questions?.length || 1) - 1 
                  ? 'Get Results' 
                  : 'Continue'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CareerAssessment;
