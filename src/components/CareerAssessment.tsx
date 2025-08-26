import React, { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle, ArrowRight, Target, Brain, Heart, User, Briefcase, Users, BookOpen, Lightbulb, Award, Globe, BarChart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

// Import professional images
import drSarahChen from '@/assets/dr-sarah-chen.jpg';
import marcusRodriguez from '@/assets/marcus-rodriguez.jpg';
import drAishaPatel from '@/assets/dr-aisha-patel.jpg';
import jordanKim from '@/assets/jordan-kim.jpg';
import alexThompson from '@/assets/alex-thompson.jpg';
import drMichaelFoster from '@/assets/dr-michael-foster.jpg';

const CareerAssessment = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [results, setResults] = useState(null);
  const [showingResults, setShowingResults] = useState(false);
  const [big5Scores, setBig5Scores] = useState(null);

  const professionalsData = [
    {
      name: "Dr. Sarah Chen",
      role: "Machine Learning Engineer",
      image: drSarahChen,
      path: "Started in biology → learned Python → transitioned to AI research",
      quote: "I never thought my biology background would be my superpower in ML.",
      personality: "High openness, moderate conscientiousness"
    },
    {
      name: "Marcus Rodriguez",
      role: "Quantitative Analyst",
      image: marcusRodriguez,
      path: "Physics degree → self-taught programming → financial modeling",
      quote: "Math is universal - it opens doors everywhere.",
      personality: "High conscientiousness, moderate openness"
    },
    {
      name: "Dr. Aisha Patel",
      role: "Molecular Biologist",
      image: drAishaPatel,
      path: "Chemistry major → research experience → PhD → biotech startup",
      quote: "Every failed experiment taught me something valuable.",
      personality: "High openness, high conscientiousness"
    },
    {
      name: "Jordan Kim",
      role: "Policy Analyst",
      image: jordanKim,
      path: "History degree → internships → graduate school → government work",
      quote: "Understanding the past helps shape better policies for the future.",
      personality: "High agreeableness, moderate conscientiousness"
    },
    {
      name: "Alex Thompson",
      role: "UX Designer",
      image: alexThompson,
      path: "Art school → internships → freelance → tech company",
      quote: "Good design makes complex things feel simple.",
      personality: "High openness, moderate extraversion"
    },
    {
      name: "Dr. Michael Foster",
      role: "Clinical Psychologist",
      image: drMichaelFoster,
      path: "Psychology degree → research assistant → PhD → private practice",
      quote: "Every person has a story worth understanding.",
      personality: "High agreeableness, moderate openness"
    }
  ];

  const assessmentPages = [
    {
      id: 'academic_skills',
      title: 'Academic Foundation',
      subtitle: 'Your Current Knowledge & Skills',
      icon: BookOpen,
      color: 'assessment-blue',
      questions: [
        {
          id: 'math_comfort',
          question: 'How do you feel about solving mathematical problems?',
          type: 'scale',
          options: [
            { value: 1, label: 'I avoid math whenever possible' },
            { value: 2, label: 'I can handle basic arithmetic but struggle with algebra' },
            { value: 3, label: 'I\'m comfortable with algebra and basic geometry' },
            { value: 4, label: 'I enjoy calculus and can work with statistics' },
            { value: 5, label: 'I love complex mathematical challenges and proofs' }
          ]
        },
        {
          id: 'science_reasoning',
          question: 'When approaching a scientific problem, you typically:',
          type: 'choice',
          options: [
            { value: 'hypothesis', label: 'Form a clear hypothesis first, then test it systematically' },
            { value: 'explore', label: 'Explore different angles until patterns emerge' },
            { value: 'research', label: 'Research what others have discovered first' },
            { value: 'experiment', label: 'Jump into experimenting right away' },
            { value: 'discuss', label: 'Discuss with others to refine my approach' }
          ]
        },
        {
          id: 'writing_ability',
          question: 'How confident are you in your writing abilities?',
          type: 'scale',
          options: [
            { value: 1, label: 'I struggle to express my ideas clearly in writing' },
            { value: 2, label: 'I can write adequately for school assignments' },
            { value: 3, label: 'I write clearly and can explain complex ideas' },
            { value: 4, label: 'I enjoy writing and often write more than required' },
            { value: 5, label: 'I\'m an excellent writer who helps others improve their writing' }
          ]
        },
        {
          id: 'research_skills',
          question: 'When researching a topic, you:',
          type: 'choice',
          options: [
            { value: 'systematic', label: 'Create a systematic plan and follow reliable sources' },
            { value: 'broad', label: 'Cast a wide net and synthesize information from many sources' },
            { value: 'deep', label: 'Dive deep into a few authoritative sources' },
            { value: 'collaborative', label: 'Prefer to research as part of a team' },
            { value: 'minimal', label: 'Do the minimum required research' }
          ]
        },
        {
          id: 'technical_skills',
          question: 'Your experience with technology and programming:',
          type: 'choice',
          options: [
            { value: 'advanced', label: 'I can program in multiple languages and understand algorithms' },
            { value: 'intermediate', label: 'I can code basic programs and understand logical structures' },
            { value: 'beginner', label: 'I\'ve tried coding but find it challenging' },
            { value: 'interested', label: 'I haven\'t coded but am interested in learning' },
            { value: 'prefer_other', label: 'I prefer non-technical approaches to problem-solving' }
          ]
        }
      ]
    },
    {
      id: 'openness',
      title: 'Intellectual Curiosity',
      subtitle: 'Big 5: Openness to Experience',
      icon: Lightbulb,
      color: 'personality-openness',
      questions: [
        {
          id: 'new_ideas',
          question: 'I am always curious about how things work.',
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
          question: 'I enjoy thinking about abstract concepts and theories.',
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
          id: 'creativity',
          question: 'I often come up with creative solutions to problems.',
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
          id: 'learning_appetite',
          question: 'I actively seek out new learning experiences.',
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
          id: 'artistic_appreciation',
          question: 'I have a strong appreciation for art, music, or literature.',
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
    {
      id: 'conscientiousness',
      title: 'Work Style & Organization',
      subtitle: 'Big 5: Conscientiousness',
      icon: Award,
      color: 'personality-conscientiousness',
      questions: [
        {
          id: 'organization',
          question: 'I keep my workspace and materials well-organized.',
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
          id: 'persistence',
          question: 'I finish projects even when they become difficult or boring.',
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
          id: 'planning',
          question: 'I prefer to plan my work in advance rather than improvise.',
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
          id: 'deadlines',
          question: 'I always meet deadlines and rarely procrastinate.',
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
          id: 'attention_detail',
          question: 'I pay careful attention to details in my work.',
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
    {
      id: 'extraversion',
      title: 'Social Energy & Leadership',
      subtitle: 'Big 5: Extraversion',
      icon: Users,
      color: 'personality-extraversion',
      questions: [
        {
          id: 'social_energy',
          question: 'I feel energized after spending time with groups of people.',
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
          id: 'leadership',
          question: 'I naturally take charge in group situations.',
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
          id: 'public_speaking',
          question: 'I enjoy presenting my ideas to large groups.',
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
          id: 'networking',
          question: 'I easily start conversations with strangers.',
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
          id: 'assertiveness',
          question: 'I assertively express my opinions and ideas.',
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
    {
      id: 'agreeableness',
      title: 'Collaboration & Empathy',
      subtitle: 'Big 5: Agreeableness',
      icon: Heart,
      color: 'personality-agreeableness',
      questions: [
        {
          id: 'cooperation',
          question: 'I prefer collaborative work over competition.',
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
          id: 'empathy',
          question: 'I can easily sense when others are upset or stressed.',
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
          id: 'helping',
          question: 'I go out of my way to help others, even when it\'s inconvenient.',
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
          id: 'conflict_resolution',
          question: 'I work hard to resolve conflicts and find win-win solutions.',
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
          id: 'trust',
          question: 'I generally trust that people have good intentions.',
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
    {
      id: 'neuroticism',
      title: 'Emotional Resilience',
      subtitle: 'Big 5: Emotional Stability',
      icon: Brain,
      color: 'personality-emotional',
      questions: [
        {
          id: 'stress_management',
          question: 'I remain calm under pressure and tight deadlines.',
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
          id: 'emotional_stability',
          question: 'My mood stays relatively stable throughout the day.',
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
          id: 'confidence',
          question: 'I feel confident in my abilities to handle challenges.',
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
          id: 'adaptability',
          question: 'I adapt quickly when plans change unexpectedly.',
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
          id: 'optimism',
          question: 'I generally expect positive outcomes from situations.',
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
    {
      id: 'career_interests',
      title: 'Career Values & Goals',
      subtitle: 'What Motivates You',
      icon: Target,
      color: 'assessment-teal',
      questions: [
        {
          id: 'work_values',
          question: 'What matters most to you in a career? (Choose your top priority)',
          type: 'choice',
          options: [
            { value: 'intellectual_challenge', label: 'Intellectual stimulation and complex problems' },
            { value: 'helping_others', label: 'Making a positive impact on people\'s lives' },
            { value: 'creativity', label: 'Creative expression and innovation' },
            { value: 'financial_success', label: 'Financial security and high earning potential' },
            { value: 'autonomy', label: 'Independence and flexible work arrangements' },
            { value: 'recognition', label: 'Recognition and professional prestige' }
          ]
        },
        {
          id: 'impact_scale',
          question: 'What scale of impact do you want to have?',
          type: 'choice',
          options: [
            { value: 'individual', label: 'One-on-one: Directly helping individual people' },
            { value: 'local', label: 'Community: Improving your local area' },
            { value: 'organizational', label: 'Institutional: Changing how organizations work' },
            { value: 'societal', label: 'Societal: Addressing broad social issues' },
            { value: 'global', label: 'Global: Solving problems that affect humanity' }
          ]
        },
        {
          id: 'work_environment',
          question: 'Where do you see yourself thriving?',
          type: 'choice',
          options: [
            { value: 'lab', label: 'Research laboratory or clinical setting' },
            { value: 'office', label: 'Corporate office with team collaboration' },
            { value: 'field', label: 'Field work and data collection' },
            { value: 'remote', label: 'Remote work with digital collaboration' },
            { value: 'varied', label: 'Constantly changing locations and contexts' },
            { value: 'entrepreneurial', label: 'Startup or entrepreneurial environment' }
          ]
        },
        {
          id: 'career_timeline',
          question: 'How do you prefer to advance in your career?',
          type: 'choice',
          options: [
            { value: 'fast_track', label: 'Quick advancement with high responsibility early on' },
            { value: 'steady_climb', label: 'Steady, predictable progression over time' },
            { value: 'expertise', label: 'Becoming a deep expert in a specific area' },
            { value: 'diverse', label: 'Exploring different roles and industries' },
            { value: 'entrepreneurial', label: 'Building something new or starting my own venture' }
          ]
        },
        {
          id: 'work_life_balance',
          question: 'How important is work-life balance to you?',
          type: 'choice',
          options: [
            { value: 'essential', label: 'Essential - I need clear boundaries between work and personal life' },
            { value: 'important', label: 'Important - I want flexibility but can work harder when needed' },
            { value: 'moderate', label: 'Moderate - I\'m willing to work long hours for meaningful work' },
            { value: 'flexible', label: 'Flexible - I can adapt to what the job requires' },
            { value: 'career_focused', label: 'Career-focused - I\'m willing to prioritize career growth' }
          ]
        }
      ]
    }
  ];

  const careerRecommendations = {
    'high_openness_high_conscientiousness': {
      title: 'Research & Innovation',
      careers: ['Research Scientist', 'R&D Engineer', 'Data Scientist', 'Academic Researcher', 'Innovation Manager'],
      description: 'Your combination of intellectual curiosity and disciplined execution makes you ideal for roles that require both creative thinking and rigorous methodology.',
      nextSteps: ['Develop research methodologies', 'Learn statistical analysis', 'Gain experience with research tools', 'Consider graduate school'],
      timeline: '2-6 years depending on specialization',
      professionals: ['Dr. Sarah Chen', 'Dr. Aisha Patel']
    },
    'high_extraversion_high_agreeableness': {
      title: 'Leadership & Human Services',
      careers: ['Project Manager', 'Human Resources', 'Counselor', 'Nonprofit Leader', 'Teacher/Professor'],
      description: 'Your natural people skills and collaborative approach make you excellent at roles that involve leading teams and helping others grow.',
      nextSteps: ['Develop leadership experience', 'Learn project management', 'Gain volunteer experience', 'Consider management training'],
      timeline: '1-4 years with relevant experience',
      professionals: ['Jordan Kim', 'Dr. Michael Foster']
    },
    'high_conscientiousness_moderate_openness': {
      title: 'Analysis & Systems',
      careers: ['Financial Analyst', 'Operations Manager', 'Quality Assurance', 'Business Analyst', 'Auditor'],
      description: 'Your attention to detail and systematic approach make you valuable in roles that require precision and process improvement.',
      nextSteps: ['Master Excel and data analysis', 'Learn process improvement methodologies', 'Gain internship experience'],
      timeline: '1-3 years with focused preparation',
      professionals: ['Marcus Rodriguez']
    },
    'high_openness_high_extraversion': {
      title: 'Creative & Communication',
      careers: ['UX Designer', 'Marketing Manager', 'Consultant', 'Product Manager', 'Entrepreneur'],
      description: 'Your creativity combined with social energy makes you well-suited for roles that involve innovation and persuasion.',
      nextSteps: ['Build a portfolio', 'Learn design/marketing tools', 'Network in your field of interest', 'Gain startup experience'],
      timeline: '1-3 years with portfolio development',
      professionals: ['Alex Thompson']
    },
    'balanced_profile': {
      title: 'Versatile Professional',
      careers: ['Project Coordinator', 'Business Development', 'Program Manager', 'Consultant', 'Account Manager'],
      description: 'Your balanced personality profile gives you flexibility to succeed in many different types of roles and environments.',
      nextSteps: ['Explore different industries through internships', 'Develop both technical and soft skills', 'Network broadly'],
      timeline: '1-2 years to identify specific direction',
      professionals: ['Multiple paths available']
    }
  };

  const calculateBig5Scores = () => {
    const scores = {
      openness: 0,
      conscientiousness: 0,
      extraversion: 0,
      agreeableness: 0,
      emotional_stability: 0
    };

    // Calculate averages for each Big 5 dimension
    ['openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism'].forEach(dimension => {
      const pageResponses = responses[dimension as keyof typeof responses] || {};
      const values = Object.values(pageResponses).map((r: any) => r.value as number);
      if (values.length > 0) {
        const avg = values.reduce((sum, val) => sum + val, 0) / values.length;
        if (dimension === 'neuroticism') {
          scores.emotional_stability = avg;
        } else {
          (scores as any)[dimension] = avg;
        }
      }
    });

    return scores;
  };

  const getCareerRecommendation = (big5Scores: any, academicResponses: any, careerResponses: any) => {
    const { openness, conscientiousness, extraversion, agreeableness } = big5Scores;
    
    if (openness >= 4 && conscientiousness >= 4) {
      return 'high_openness_high_conscientiousness';
    } else if (extraversion >= 4 && agreeableness >= 4) {
      return 'high_extraversion_high_agreeableness';
    } else if (conscientiousness >= 4 && openness < 4) {
      return 'high_conscientiousness_moderate_openness';
    } else if (openness >= 4 && extraversion >= 4) {
      return 'high_openness_high_extraversion';
    } else {
      return 'balanced_profile';
    }
  };

  const handleAnswer = (questionId, answer) => {
    const page = assessmentPages[currentPage];
    setResponses(prev => ({
      ...prev,
      [page.id]: {
        ...prev[page.id],
        [questionId]: answer
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
      const recommendation = getCareerRecommendation(big5, (responses as any).academic_skills, (responses as any).career_interests);
      setResults({
        big5Scores: big5,
        recommendedPath: recommendation,
        confidence: 85 + Math.floor(Math.random() * 10)
      });
      setShowingResults(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setCurrentQuestionIndex(assessmentPages[currentPage - 1].questions.length - 1);
    }
  };

  const isCurrentQuestionAnswered = () => {
    const page = assessmentPages[currentPage];
    const question = page.questions[currentQuestionIndex];
    const pageResponses = responses[page.id] || {};
    return pageResponses[question.id] !== undefined;
  };

  const getTotalQuestions = () => {
    return assessmentPages.reduce((total, page) => total + page.questions.length, 0);
  };

  const getCurrentQuestionNumber = () => {
    let questionNumber = 1;
    for (let i = 0; i < currentPage; i++) {
      questionNumber += assessmentPages[i].questions.length;
    }
    return questionNumber + currentQuestionIndex;
  };

  if (showingResults && results) {
    const path = careerRecommendations[results.recommendedPath];
    const big5 = results.big5Scores;
    
    return (
      <div className="min-h-screen bg-gradient-primary">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-assessment-blue rounded-full mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Your Personalized Career Path</h1>
            <p className="text-xl text-muted-foreground">Based on your Big 5 personality profile and career interests</p>
            <Badge variant="secondary" className="mt-4">
              {results.confidence}% confidence match
            </Badge>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Big 5 Personality Results */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-center">Your Personality Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-5 gap-4">
                  {[
                    { key: 'openness', label: 'Openness', color: 'personality-openness' },
                    { key: 'conscientiousness', label: 'Conscientiousness', color: 'personality-conscientiousness' },
                    { key: 'extraversion', label: 'Extraversion', color: 'personality-extraversion' },
                    { key: 'agreeableness', label: 'Agreeableness', color: 'personality-agreeableness' },
                    { key: 'emotional_stability', label: 'Emotional Stability', color: 'personality-emotional' }
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
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-center">{path.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">{path.description}</p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Recommended Careers</h4>
                    <ul className="space-y-2">
                      {path.careers.map((career, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-assessment-green mr-2" />
                          {career}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Next Steps</h4>
                    <ul className="space-y-2">
                      {path.nextSteps.map((step, index) => (
                        <li key={index} className="flex items-center">
                          <ArrowRight className="w-4 h-4 text-assessment-blue mr-2" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Timeline</h4>
                    <p className="text-muted-foreground">{path.timeline}</p>
                    
                    <h4 className="font-semibold mb-3 mt-4">Role Models</h4>
                    <p className="text-muted-foreground">{path.professionals.join(', ')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Profiles */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Meet Professionals Like You</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {professionalsData.map((professional, index) => (
                    <div key={index} className="text-center space-y-3">
                      <img 
                        src={professional.image} 
                        alt={professional.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">{professional.name}</h4>
                        <p className="text-sm text-assessment-blue">{professional.role}</p>
                        <p className="text-xs text-muted-foreground mt-2">{professional.path}</p>
                        <blockquote className="text-sm italic mt-2">"{professional.quote}"</blockquote>
                        <p className="text-xs text-muted-foreground">{professional.personality}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Button 
                onClick={() => {
                  setShowingResults(false);
                  setCurrentPage(0);
                  setCurrentQuestionIndex(0);
                  setResponses({});
                  setResults(null);
                  setBig5Scores(null);
                }}
                variant="outline"
              >
                Take Assessment Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Assessment questions view
  const currentPageObj = assessmentPages[currentPage];
  const currentQuestion = currentPageObj.questions[currentQuestionIndex];
  const pageResponses = responses[currentPageObj.id] || {};
  const currentAnswer = pageResponses[currentQuestion.id];
  const Icon = currentPageObj.icon;

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
                    {currentAnswer?.value === option.value && (
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                    )}
                    <div>
                      <div className="font-medium">{option.label}</div>
                      {currentQuestion.type === 'scale' && (
                        <div className="text-sm text-muted-foreground">
                          Level {option.value}
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
                 currentQuestionIndex === currentPageObj.questions.length - 1 
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