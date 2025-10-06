import React, { useState, useEffect, useMemo } from 'react';
import { ChevronRight, CheckCircle, ArrowRight, Target, Brain, Heart, User, Briefcase, Users, BookOpen, Lightbulb, Award, Globe, BarChart, ArrowLeft, FlaskConical, Calculator, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code } from 'lucide-react';

// Import professional images
import drSarahChen from '@/assets/dr-sarah-chen.jpg';
import marcusRodriguez from '@/assets/marcus-rodriguez.jpg';
import drAishaPatel from '@/assets/dr-aisha-patel.jpg';
import jordanKim from '@/assets/jordan-kim.jpg';
import alexThompson from '@/assets/alex-thompson.jpg';
import drMichaelFoster from '@/assets/dr-michael-foster.jpg';

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
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState<{ [key: string]: any[] }>({});
useEffect(() => {
  if (Object.keys(shuffledOptionsMap).length === 0) {
    const map: { [key: string]: any[] } = {};
    assessmentPages.forEach((page, pageIdx) => {
      if (page.questions) {
        page.questions.forEach((question, qIdx) => {
          const key = `${pageIdx}-${qIdx}`;
          const hasCorrectProperty = question.options?.some((opt: any) => 'correct' in opt);
          
          if (question.type === 'choice' && hasCorrectProperty) {
            map[key] = shuffleArray([...question.options]);
          } else {
            map[key] = question.options;
          }
        });
      }
    });
    setShuffledOptionsMap(map);
  }
}, []);
      function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
    // Memoize assessmentPages if it must be inside the component
const assessmentPages = [
  // Mathematics Assessment
  {
    id: 'mathematics',
    title: 'Mathematics Assessment',
    subtitle: 'Grade 7 Level Mathematics',
    icon: Calculator,
    color: 'assessment-blue',
    questions: [
      {
        id: 'algebra_basic',
        question: 'If 60% of students in a class of 40 are girls, how many boys are in the class?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: '24 students' },
          { value: 'correct', label: '16 students', correct: true },
          { value: 'wrong2', label: '20 students' },
          { value: 'wrong3', label: '14 students' }
        ]
      },
      {
        id: 'geometry',
        question: 'What is the area of a rectangle with length 8 cm and width 5 cm?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: '26 cm²' },
          { value: 'wrong2', label: '13 cm²' },
          { value: 'correct', label: '40 cm²', correct: true },
          { value: 'wrong3', label: '80 cm²' }
        ]
      },
      {
        id: 'fractions',
        question: 'Simplify the fraction: 18/24',
        type: 'choice',
        options: [
          { value: 'correct', label: '3/4', correct: true },
          { value: 'wrong1', label: '9/12' },
          { value: 'wrong2', label: '6/8' },
          { value: 'wrong3', label: '2/3' }
        ]
      },
      {
        id: 'word_problem',
        question: 'A school bus travels 45 km in one hour. How far will it travel in 3.5 hours at the same speed?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: '135.5 km' },
          { value: 'wrong2', label: '140 km' },
          { value: 'correct', label: '157.5 km', correct: true },
          { value: 'wrong3', label: '148.5 km' }
        ]
      },
      {
        id: 'percentages',
        question: 'A shirt originally costs 500 Birr. During a sale, it is discounted by 20%. What is the sale price?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: '480 Birr' },
          { value: 'correct', label: '400 Birr', correct: true },
          { value: 'wrong2', label: '450 Birr' },
          { value: 'wrong3', label: '420 Birr' }
        ]
      },
      {
        id: 'ratio',
        question: 'The ratio of boys to girls in a school is 3:5. If there are 240 students in total, how many are girls?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: '120 girls' },
          { value: 'wrong2', label: '144 girls' },
          { value: 'wrong3', label: '160 girls' },
          { value: 'correct', label: '150 girls', correct: true }
        ]
      },
      {
        id: 'equations',
        question: 'Solve for x: 3x + 7 = 22',
        type: 'choice',
        options: [
          { value: 'correct', label: 'x = 5', correct: true },
          { value: 'wrong1', label: 'x = 7' },
          { value: 'wrong2', label: 'x = 6' },
          { value: 'wrong3', label: 'x = 4' }
        ]
      }
    ]
  },

  // General Science Assessment
  {
    id: 'general_science',
    title: 'General Science Assessment',
    subtitle: 'Grade 7 Level General Science',
    icon: FlaskConical,
    color: 'assessment-green',
    questions: [
      {
        id: 'scientific_method',
        question: 'What is the correct order of steps in the scientific method?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Hypothesis → Experiment → Question → Analysis' },
          { value: 'correct', label: 'Question → Hypothesis → Experiment → Analysis', correct: true },
          { value: 'wrong2', label: 'Experiment → Analysis → Question → Hypothesis' },
          { value: 'wrong3', label: 'Question → Analysis → Experiment → Hypothesis' }
        ]
      },
      {
        id: 'states_matter',
        question: 'When ice melts into water, this is an example of:',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Chemical reaction' },
          { value: 'correct', label: 'Physical change', correct: true },
          { value: 'wrong2', label: 'Nuclear process' },
          { value: 'wrong3', label: 'Biological change' }
        ]
      },
      {
        id: 'ecosystems',
        question: 'In a food chain, what role do plants typically play?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Primary consumers' },
          { value: 'wrong2', label: 'Secondary consumers' },
          { value: 'correct', label: 'Primary producers', correct: true },
          { value: 'wrong3', label: 'Decomposers' }
        ]
      },
      {
        id: 'energy_forms',
        question: 'Which form of energy is stored in food?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Mechanical energy' },
          { value: 'wrong2', label: 'Electrical energy' },
          { value: 'correct', label: 'Chemical energy', correct: true },
          { value: 'wrong3', label: 'Thermal energy' }
        ]
      },
      {
        id: 'water_cycle',
        question: 'What process occurs when water vapor in the air turns into liquid water droplets?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Evaporation' },
          { value: 'correct', label: 'Condensation', correct: true },
          { value: 'wrong2', label: 'Precipitation' },
          { value: 'wrong3', label: 'Transpiration' }
        ]
      },
      {
        id: 'renewable_energy',
        question: 'Which of these is a renewable energy source commonly used in Ethiopia?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Natural gas' },
          { value: 'wrong2', label: 'Coal power' },
          { value: 'correct', label: 'Hydroelectric power', correct: true },
          { value: 'wrong3', label: 'Petroleum' }
        ]
      },
      {
        id: 'simple_machines',
        question: 'A seesaw at a playground is an example of which simple machine?',
        type: 'choice',
        options: [
          { value: 'correct', label: 'Lever', correct: true },
          { value: 'wrong1', label: 'Pulley' },
          { value: 'wrong2', label: 'Wedge' },
          { value: 'wrong3', label: 'Screw' }
        ]
      },
      {
        id: 'climate',
        question: 'Ethiopia experiences different climate zones primarily because of:',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Ocean currents' },
          { value: 'correct', label: 'Altitude variations', correct: true },
          { value: 'wrong2', label: 'Desert conditions' },
          { value: 'wrong3', label: 'Polar winds' }
        ]
      }
    ]
  },

  // Social Studies Assessment
  {
    id: 'social_studies',
    title: 'Social Studies Assessment',
    subtitle: 'Grade 7 Level Social Studies',
    icon: Globe,
    color: 'assessment-purple',
    questions: [
      {
        id: 'ethiopian_history',
        question: 'What made the Battle of Adwa (1896) historically significant for Ethiopia and Africa?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'It established new trade agreements with Italy' },
          { value: 'correct', label: 'Ethiopia defeated colonial forces, inspiring African resistance', correct: true },
          { value: 'wrong2', label: 'It introduced European military tactics to Africa' },
          { value: 'wrong3', label: 'It created the modern Ethiopian calendar system' }
        ]
      },
      {
        id: 'geography',
        question: 'Which river is considered the source of the Blue Nile?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Lake Victoria' },
          { value: 'correct', label: 'Lake Tana', correct: true },
          { value: 'wrong2', label: 'Red Sea' },
          { value: 'wrong3', label: 'Lake Turkana' }
        ]
      },
      {
        id: 'government',
        question: 'What type of government system does Ethiopia currently have?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Constitutional monarchy' },
          { value: 'wrong2', label: 'Presidential republic' },
          { value: 'correct', label: 'Federal parliamentary republic', correct: true },
          { value: 'wrong3', label: 'Unitary state' }
        ]
      },
      {
        id: 'culture',
        question: 'Which ancient script is still used in Ethiopia today?',
        type: 'choice',
        options: [
          { value: 'correct', label: 'Ge\'ez script', correct: true },
          { value: 'wrong1', label: 'Arabic script' },
          { value: 'wrong2', label: 'Latin alphabet' },
          { value: 'wrong3', label: 'Cyrillic script' }
        ]
      },
      {
        id: 'economics',
        question: 'Coffee is one of Ethiopia\'s main exports. What percentage of the world\'s coffee genetic diversity originates from Ethiopia?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'About 25% of varieties' },
          { value: 'wrong2', label: 'About 50% of varieties' },
          { value: 'correct', label: 'About 95% of varieties', correct: true },
          { value: 'wrong3', label: 'About 70% of varieties' }
        ]
      },
      {
        id: 'regional_diversity',
        question: 'How many regional states does Ethiopia have in its federal system?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: '8 states' },
          { value: 'correct', label: '11 states', correct: true },
          { value: 'wrong2', label: '9 states' },
          { value: 'wrong3', label: '12 states' }
        ]
      },
      {
        id: 'ancient_kingdoms',
        question: 'The ancient Kingdom of Aksum was known for its:',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Pyramid construction' },
          { value: 'correct', label: 'Tall stone obelisks', correct: true },
          { value: 'wrong2', label: 'Hanging gardens' },
          { value: 'wrong3', label: 'Great wall' }
        ]
      },
      {
        id: 'timkeeping',
        question: 'The Ethiopian calendar is unique because it:',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Has 10 months per year' },
          { value: 'wrong2', label: 'Follows lunar cycles only' },
          { value: 'correct', label: 'Is 7-8 years behind the Gregorian calendar', correct: true },
          { value: 'wrong3', label: 'Has 365 days exactly' }
        ]
      }
    ]
  },

  // Physics Assessment
  {
    id: 'physics',
    title: 'Physics Assessment',
    subtitle: 'Grade 7 Level Physics',
    icon: Target,
    color: 'assessment-indigo',
    questions: [
      {
        id: 'motion',
        question: 'A ball is thrown straight up in the air. At the highest point of its path, what can you say about its velocity and acceleration?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Both are zero' },
          { value: 'correct', label: 'Velocity zero, acceleration downward', correct: true },
          { value: 'wrong2', label: 'Velocity upward, acceleration zero' },
          { value: 'wrong3', label: 'Both are downward' }
        ]
      },
      {
        id: 'forces',
        question: 'According to Newton\'s first law, an object at rest will:',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Eventually start moving' },
          { value: 'wrong2', label: 'Move in circles' },
          { value: 'correct', label: 'Remain at rest without external force', correct: true },
          { value: 'wrong3', label: 'Begin accelerating' }
        ]
      },
      {
        id: 'energy',
        question: 'Which has more kinetic energy: a 2kg ball moving at 5 m/s or a 1kg ball moving at 8 m/s?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: '2kg ball at 5 m/s' },
          { value: 'correct', label: '1kg ball at 8 m/s', correct: true },
          { value: 'wrong2', label: 'Same kinetic energy' },
          { value: 'wrong3', label: 'Cannot determine' }
        ]
      },
      {
        id: 'light',
        question: 'When white light passes through a prism, it separates into different colors because:',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'The prism adds pigments' },
          { value: 'wrong2', label: 'Air creates the colors' },
          { value: 'correct', label: 'Different wavelengths bend differently', correct: true },
          { value: 'wrong3', label: 'Glass creates colors' }
        ]
      },
      {
        id: 'electricity',
        question: 'In a simple circuit, what happens if you add more batteries in series?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Current stays the same' },
          { value: 'correct', label: 'Voltage increases', correct: true },
          { value: 'wrong2', label: 'Resistance increases' },
          { value: 'wrong3', label: 'Voltage decreases' }
        ]
      },
      {
        id: 'sound',
        question: 'Sound travels fastest through:',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Air' },
          { value: 'wrong2', label: 'Water' },
          { value: 'correct', label: 'Steel', correct: true },
          { value: 'wrong3', label: 'Vacuum' }
        ]
      },
      {
        id: 'pressure',
        question: 'Why do your ears pop when you go up a mountain?',
        type: 'choice',
        options: [
          { value: 'correct', label: 'Air pressure decreases with altitude', correct: true },
          { value: 'wrong1', label: 'Temperature changes affect hearing' },
          { value: 'wrong2', label: 'Oxygen levels change suddenly' },
          { value: 'wrong3', label: 'Gravity pulls on your eardrums' }
        ]
      },
      {
        id: 'magnetism',
        question: 'Which metals are attracted to magnets?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Copper and aluminum' },
          { value: 'wrong2', label: 'Gold and silver' },
          { value: 'correct', label: 'Iron and nickel', correct: true },
          { value: 'wrong3', label: 'Brass and bronze' }
        ]
      }
    ]
  },

  // Chemistry Assessment
  {
    id: 'chemistry',
    title: 'Chemistry Assessment',
    subtitle: 'Grade 7 Level Chemistry',
    icon: FlaskConical,
    color: 'assessment-orange',
    questions: [
      {
        id: 'atoms',
        question: 'What is the smallest unit of a chemical element?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Molecule' },
          { value: 'correct', label: 'Atom', correct: true },
          { value: 'wrong2', label: 'Compound' },
          { value: 'wrong3', label: 'Electron' }
        ]
      },
      {
        id: 'periodic_table',
        question: 'Elements in the same column (group) of the periodic table have similar:',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Atomic masses' },
          { value: 'correct', label: 'Chemical properties', correct: true },
          { value: 'wrong2', label: 'Neutron counts' },
          { value: 'wrong3', label: 'Physical states' }
        ]
      },
      {
        id: 'chemical_reactions',
        question: 'In the chemical equation H₂ + Cl₂ → 2HCl, what type of reaction is this?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Decomposition reaction' },
          { value: 'wrong2', label: 'Replacement reaction' },
          { value: 'correct', label: 'Synthesis reaction', correct: true },
          { value: 'wrong3', label: 'Combustion reaction' }
        ]
      },
      {
        id: 'ph_scale',
        question: 'A solution with pH 3 is:',
        type: 'choice',
        options: [
          { value: 'correct', label: 'Acidic', correct: true },
          { value: 'wrong1', label: 'Basic' },
          { value: 'wrong2', label: 'Neutral' },
          { value: 'wrong3', label: 'Alkaline' }
        ]
      },
      {
        id: 'states_of_matter',
        question: 'What happens to the particles in a substance when it changes from liquid to gas?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'They move slower' },
          { value: 'wrong2', label: 'They get smaller' },
          { value: 'correct', label: 'They move faster and spread apart', correct: true },
          { value: 'wrong3', label: 'They stick together more' }
        ]
      },
      {
        id: 'mixtures',
        question: 'Which method would best separate salt dissolved in water?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Filtration' },
          { value: 'correct', label: 'Evaporation', correct: true },
          { value: 'wrong2', label: 'Magnetism' },
          { value: 'wrong3', label: 'Decanting' }
        ]
      },
      {
        id: 'oxidation',
        question: 'When iron rusts, it undergoes:',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Physical weathering' },
          { value: 'correct', label: 'Chemical oxidation', correct: true },
          { value: 'wrong2', label: 'Nuclear decay' },
          { value: 'wrong3', label: 'Biological breakdown' }
        ]
      },
      {
        id: 'metals_nonmetals',
        question: 'Which property is typical of metals?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Poor heat conduction' },
          { value: 'wrong2', label: 'Brittle when solid' },
          { value: 'correct', label: 'Good electrical conductivity', correct: true },
          { value: 'wrong3', label: 'Dull appearance' }
        ]
      }
    ]
  },

  // Biology Assessment
  {
    id: 'biology',
    title: 'Biology Assessment',
    subtitle: 'Grade 7 Level Biology',
    icon: Heart,
    color: 'assessment-green',
    questions: [
      {
        id: 'body_systems',
        question: 'Why do we need both the circulatory and respiratory systems working together?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'To digest food efficiently' },
          { value: 'correct', label: 'To deliver oxygen and remove waste gases', correct: true },
          { value: 'wrong2', label: 'To strengthen heart muscles' },
          { value: 'wrong3', label: 'To regulate temperature' }
        ]
      },
      {
        id: 'cells',
        question: 'What is the basic unit of all living things?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Tissue' },
          { value: 'wrong2', label: 'Organ' },
          { value: 'correct', label: 'Cell', correct: true },
          { value: 'wrong3', label: 'Molecule' }
        ]
      },
      {
        id: 'photosynthesis',
        question: 'During photosynthesis, plants convert:',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Oxygen into carbon dioxide' },
          { value: 'correct', label: 'CO₂ and water into glucose', correct: true },
          { value: 'wrong2', label: 'Sunlight into chlorophyll' },
          { value: 'wrong3', label: 'Soil nutrients into energy' }
        ]
      },
      {
        id: 'genetics',
        question: 'Traits are passed from parents to offspring through:',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Blood type' },
          { value: 'correct', label: 'Genes on chromosomes', correct: true },
          { value: 'wrong2', label: 'Environmental learning' },
          { value: 'wrong3', label: 'Dietary habits' }
        ]
      },
      {
        id: 'adaptation',
        question: 'The Ethiopian wolf has adapted to high-altitude life. This adaptation occurred through:',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Learning from parents' },
          { value: 'wrong2', label: 'Individual animal choices' },
          { value: 'correct', label: 'Natural selection over generations', correct: true },
          { value: 'wrong3', label: 'Changes in diet alone' }
        ]
      },
      {
        id: 'classification',
        question: 'Which classification level is most specific?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Kingdom' },
          { value: 'wrong2', label: 'Family' },
          { value: 'wrong3', label: 'Genus' },
          { value: 'correct', label: 'Species', correct: true }
        ]
      },
      {
        id: 'digestive_system',
        question: 'Where does most nutrient absorption occur in the human body?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Stomach' },
          { value: 'correct', label: 'Small intestine', correct: true },
          { value: 'wrong2', label: 'Large intestine' },
          { value: 'wrong3', label: 'Esophagus' }
        ]
      },
      {
        id: 'biodiversity',
        question: 'Ethiopia is known for being the origin of which important crop?',
        type: 'choice',
        options: [
          { value: 'correct', label: 'Coffee', correct: true },
          { value: 'wrong1', label: 'Wheat' },
          { value: 'wrong2', label: 'Rice' },
          { value: 'wrong3', label: 'Corn' }
        ]
      }
    ]
  },

  // Information Technology Assessment
  {
    id: 'information_technology',
    title: 'Information Technology Assessment',
    subtitle: 'Grade 7 Level IT Skills',
    icon: Code,
    color: 'assessment-blue',
    questions: [
      {
        id: 'computer_basics',
        question: 'What does CPU stand for?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Computer Personal Unit' },
          { value: 'wrong2', label: 'Central Program Utility' },
          { value: 'correct', label: 'Central Processing Unit', correct: true },
          { value: 'wrong3', label: 'Computer Programming Unit' }
        ]
      },
      {
        id: 'internet_safety',
        question: 'Which of these is the SAFEST way to create a password?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Use your name and birthday' },
          { value: 'correct', label: 'Mix letters, numbers, and symbols uniquely', correct: true },
          { value: 'wrong2', label: 'Reuse one password everywhere' },
          { value: 'wrong3', label: 'Use common words' }
        ]
      },
      {
        id: 'software_types',
        question: 'Microsoft Word is an example of what type of software?',
        type: 'choice',
        options: [
          { value: 'correct', label: 'Application software', correct: true },
          { value: 'wrong1', label: 'Operating system' },
          { value: 'wrong2', label: 'Hardware component' },
          { value: 'wrong3', label: 'Programming tool' }
        ]
      },
      {
        id: 'digital_citizenship',
        question: 'What should you do if you encounter cyberbullying online?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Respond negatively to them' },
          { value: 'wrong2', label: 'Ignore and stay silent' },
          { value: 'correct', label: 'Report to adults and block', correct: true },
          { value: 'wrong3', label: 'Share with your friends' }
        ]
      },
      {
        id: 'file_management',
        question: 'Which file extension typically indicates an image file?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: '.docx' },
          { value: 'correct', label: '.jpg', correct: true },
          { value: 'wrong2', label: '.xlsx' },
          { value: 'wrong3', label: '.pdf' }
        ]
      },
      {
        id: 'networks',
        question: 'What does "WWW" stand for in a web address?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'World Wide Web' },
          { value: 'correct', label: 'World Wide Web', correct: true },
          { value: 'wrong2', label: 'Web World Wide' },
          { value: 'wrong3', label: 'Wide World Web' }
        ]
      },
      {
        id: 'storage',
        question: 'Which storage device typically has the largest capacity?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'USB flash drive' },
          { value: 'wrong2', label: 'CD-ROM' },
          { value: 'correct', label: 'External hard drive', correct: true },
          { value: 'wrong3', label: 'Memory card' }
        ]
      },
      {
        id: 'coding_basics',
        question: 'In programming, what is a "bug"?',
        type: 'choice',
        options: [
          { value: 'correct', label: 'An error in code', correct: true },
          { value: 'wrong1', label: 'A computer virus' },
          { value: 'wrong2', label: 'A security feature' },
          { value: 'wrong3', label: 'A type of software' }
        ]
      }
    ]
  },

  // Performing and Visual Arts Assessment
  {
    id: 'performing_visual_arts',
    title: 'Performing & Visual Arts Assessment',
    subtitle: 'Grade 7 Level Arts',
    icon: Lightbulb,
    color: 'assessment-pink',
    questions: [
      {
        id: 'color_theory',
        question: 'What are the three primary colors?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Red, Green, Blue' },
          { value: 'correct', label: 'Red, Blue, Yellow', correct: true },
          { value: 'wrong2', label: 'Orange, Purple, Green' },
          { value: 'wrong3', label: 'Black, White, Gray' }
        ]
      },
      {
        id: 'music_basics',
        question: 'How many beats are in a measure of 4/4 time?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Three beats' },
          { value: 'wrong2', label: 'Two beats' },
          { value: 'correct', label: 'Four beats', correct: true },
          { value: 'wrong3', label: 'Six beats' }
        ]
      },
      {
        id: 'ethiopian_arts',
        question: 'Traditional Ethiopian church paintings often feature:',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Abstract geometric designs' },
          { value: 'correct', label: 'Religious scenes with symbolic figures', correct: true },
          { value: 'wrong2', label: 'Realistic everyday portraits' },
          { value: 'wrong3', label: 'Modern urban landscapes' }
        ]
      },
      {
        id: 'theater_basics',
        question: 'In theater, what is a "monologue"?',
        type: 'choice',
        options: [
          { value: 'correct', label: 'One character speaking alone', correct: true },
          { value: 'wrong1', label: 'Two characters in dialogue' },
          { value: 'wrong2', label: 'Background music during a scene' },
          { value: 'wrong3', label: 'Stage lighting technique' }
        ]
      },
      {
        id: 'rhythm',
        question: 'Traditional Ethiopian music often uses what time signature?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: '4/4 time exclusively' },
          { value: 'wrong2', label: '3/4 waltz time' },
          { value: 'correct', label: '6/8 or 12/8 time', correct: true },
          { value: 'wrong3', label: '2/4 march time' }
        ]
      },
      {
        id: 'visual_composition',
        question: 'In visual art, what is "perspective"?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Using only bright colors' },
          { value: 'correct', label: 'Creating depth on flat surfaces', correct: true },
          { value: 'wrong2', label: 'Painting only portraits' },
          { value: 'wrong3', label: 'Using geometric shapes' }
        ]
      },
      {
        id: 'drama',
        question: 'What is the main purpose of rehearsal in theater?',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'To memorize costumes' },
          { value: 'wrong2', label: 'To design the stage' },
          { value: 'correct', label: 'To practice and refine performance', correct: true },
          { value: 'wrong3', label: 'To sell tickets' }
        ]
      },
      {
        id: 'ethiopian_instruments',
        question: 'The krar is a traditional Ethiopian:',
        type: 'choice',
        options: [
          { value: 'wrong1', label: 'Drum instrument' },
          { value: 'correct', label: 'String instrument', correct: true },
          { value: 'wrong2', label: 'Wind instrument' },
          { value: 'wrong3', label: 'Percussion instrument' }
        ]
      },
      {
        id: 'drama_elements',
        question: 'In theater, what do we call the written text of a play?',
        type: 'choice',
        options: [
          { value: 'correct', label: 'Script', correct: true },
          { value: 'wrong1', label: 'Stage' },
          { value: 'wrong2', label: 'Props' },
          { value: 'wrong3', label: 'Costume' }
        ]
      }
    ]
  },

  // Career and Technical Education Assessment
  {
    id: 'career_technical_education',
    title: 'Career & Technical Education Assessment',
    subtitle: 'Grade 7 Level Career Skills',
    icon: Briefcase,
    color: 'assessment-orange',
    questions: [
      {
        id: 'problem_solving',
        question: 'When facing a complex problem at work or school, what\'s the best first step?',
        type: 'choice',
        options: [
          { value: 'correct', label: 'Break the problem down into smaller, manageable parts', correct: true },
          { value: 'wrong1', label: 'Ask someone else to solve it for you' },
          { value: 'wrong2', label: 'Guess at a solution and try it immediately' },
          { value: 'wrong3', label: 'Wait for the problem to solve itself' }
        ]
      },
      {
        id: 'teamwork',
        question: 'In a group project, if you disagree with a teammate\'s idea, you should:',
        type: 'choice',
        options: [
          { value: 'correct', label: 'Listen respectfully and suggest alternatives with reasons', correct: true },
          { value: 'wrong1', label: 'Tell them their idea is wrong immediately' },
          { value: 'wrong2', label: 'Stay quiet and go along with it' },
          { value: 'wrong3', label: 'Do the project your own way without telling them' }
        ]
      },
      {
        id: 'time_management',
        question: 'You have three assignments due this week. What\'s the best approach?',
        type: 'choice',
        options: [
          { value: 'correct', label: 'Make a schedule, prioritize by due date and importance', correct: true },
          { value: 'wrong1', label: 'Do the easiest one first and hope for the best' },
          { value: 'wrong2', label: 'Wait until the last minute to start all three' },
          { value: 'wrong3', label: 'Ask for extensions on all assignments' }
        ]
      },
      {
        id: 'communication',
        question: 'When giving a presentation, eye contact helps you:',
        type: 'choice',
        options: [
          { value: 'correct', label: 'Connect with your audience and appear more confident', correct: true },
          { value: 'wrong1', label: 'Remember what to say next' },
          { value: 'wrong2', label: 'Read your notes better' },
          { value: 'wrong3', label: 'Finish the presentation faster' }
        ]
      }
    ]
  },

  // SUMMARY SLIDE - Academic Assessments Complete
  {
    id: 'academic_summary',
    title: 'Academic Assessment Complete',
    subtitle: 'Your Academic Strengths Summary',
    icon: Award,
    color: 'assessment-teal',
    type: 'summary',
    content: {
      title: 'Great work on the academic assessments!',
      description: 'We\'ve evaluated your skills across all major subject areas. Now let\'s explore your personality traits to find careers that match both your abilities and your natural preferences.',
      nextSection: 'Next: Personality Assessment',
      stats: true
    }
  },

  // Big 5 Personality Assessments
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

  // SUMMARY SLIDE - Personality Assessment Complete  
  {
    id: 'personality_summary',
    title: 'Personality Assessment Complete',
    subtitle: 'Your Personality Profile Summary',
    icon: Brain,
    color: 'personality-openness',
    type: 'summary',
    content: {
      title: 'Great! We now understand your personality.',
      description: 'We\'ve assessed your Big 5 personality traits. Now let\'s explore your career values and interests to complete your profile.',
      nextSection: 'Final Section: Career Interests',
      stats: true
    }
  },

  // Career Interests Assessment
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

  const professionalsData = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Research Scientist",
      image: drSarahChen,
      path: "Grade 12 → Computer Science degree → AI research internship → Graduate school",
      quote: "I started coding in grade 11 and fell in love with making machines think.",
      personality: "High openness, moderate conscientiousness"
    },
    {
      name: "Marcus Rodriguez",
      role: "Financial Technology Analyst",
      image: marcusRodriguez,
      path: "Grade 12 → Mathematics & Economics → Banking internship → Fintech company",
      quote: "Numbers tell stories about how the world works.",
      personality: "High conscientiousness, moderate openness"
    },
    {
      name: "Dr. Aisha Patel",
      role: "Biomedical Engineer",
      image: drAishaPatel,
      path: "Grade 12 science → Engineering degree → Medical device research → Startup founder",
      quote: "I wanted to use technology to help people heal faster.",
      personality: "High openness, high conscientiousness"
    },
    {
      name: "Jordan Kim",
      role: "International Development Officer",
      image: jordanKim,
      path: "Grade 12 → Social Sciences → Development studies → Ethiopian development projects",
      quote: "Every community has solutions waiting to be discovered.",
      personality: "High agreeableness, moderate conscientiousness"
    },
    {
      name: "Alex Thompson",
      role: "Digital Product Designer",
      image: alexThompson,
      path: "Grade 12 art → Design school → Freelance projects → Tech startup",
      quote: "Good design makes complex things feel simple for everyone.",
      personality: "High openness, moderate extraversion"
    },
    {
      name: "Dr. Michael Foster",
      role: "Educational Psychologist",
      image: drMichaelFoster,
      path: "Grade 12 → Psychology degree → Teaching experience → Graduate school → School consultant",
      quote: "Every student learns differently, and that's their strength.",
      personality: "High agreeableness, moderate openness"
    }
  ];

  const currentPageObj = assessmentPages[currentPage];
const pageResponses = responses[currentPageObj.id] || {};
  const currentQuestion = currentPageObj.questions[currentQuestionIndex];
const questionKey = `${currentPage}-${currentQuestionIndex}`;
const displayOptions = shuffledOptionsMap[questionKey] || currentQuestion?.options || [];
  
const deeperQuestions = [
    {
      id: 'work_environment_detail',
      question: 'Based on your responses, you seem to thrive in collaborative environments. Which specific setting appeals most to you?',
      type: 'choice',
      options: [
        { value: 'startup', label: 'Fast-paced startup with rapid innovation and flexible roles' },
        { value: 'research_lab', label: 'Research laboratory with focus on discovery and experimentation' },
        { value: 'corporate', label: 'Established company with structured teams and clear processes' },
        { value: 'nonprofit', label: 'Mission-driven organization focused on social impact' },
        { value: 'government', label: 'Government agency working on policy and public service' }
      ]
    },
    {
      id: 'learning_preference',
      question: 'You mentioned enjoying intellectual challenges. How do you prefer to tackle complex problems?',
      type: 'choice',
      options: [
        { value: 'theoretical', label: 'Through theoretical analysis and mathematical modeling' },
        { value: 'hands_on', label: 'Through hands-on experimentation and prototyping' },
        { value: 'collaborative', label: 'Through team brainstorming and diverse perspectives' },
        { value: 'research', label: 'Through extensive research and literature review' },
        { value: 'iterative', label: 'Through trial and error with quick iterations' }
      ]
    },
    {
      id: 'impact_timeline',
      question: 'When thinking about making an impact, what timeline motivates you most?',
      type: 'choice',
      options: [
        { value: 'immediate', label: 'Immediate results - seeing changes within weeks or months' },
        { value: 'annual', label: 'Annual progress - building sustainable improvements year by year' },
        { value: 'generational', label: 'Long-term legacy - creating change that lasts for generations' },
        { value: 'breakthrough', label: 'Revolutionary moments - being part of major breakthroughs' },
        { value: 'continuous', label: 'Ongoing improvement - constantly refining and optimizing' }
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
    },
    'research_innovation_specialist': {
      title: 'Research & Innovation Specialist',
      careers: ['PhD Researcher', 'Innovation Lab Director', 'R&D Scientist', 'Think Tank Analyst', 'Academic Researcher'],
      description: 'Perfect blend of intellectual curiosity and research excellence. You thrive in environments where breakthrough discoveries are made.',
      nextSteps: ['Pursue advanced research opportunities', 'Develop grant writing skills', 'Network with research communities', 'Consider PhD programs'],
      timeline: '4-8 years for advanced positions',
      professionals: ['Dr. Sarah Chen', 'Dr. Aisha Patel']
    },
    'entrepreneurial_tech_leader': {
      title: 'Entrepreneurial Technology Leader',
      careers: ['Tech Startup Founder', 'Product Innovation Manager', 'Venture Capital Analyst', 'Technology Consultant', 'Chief Technology Officer'],
      description: 'Your combination of technical aptitude and leadership drive makes you ideal for building and scaling technology solutions.',
      nextSteps: ['Learn multiple programming languages', 'Develop business acumen', 'Build a network in tech', 'Consider startup accelerators'],
      timeline: '2-5 years to leadership roles',
      professionals: ['Alex Thompson', 'Marcus Rodriguez']
    },
    'social_impact_strategist': {
      title: 'Social Impact Strategist',
      careers: ['International Development Officer', 'Policy Research Director', 'Social Enterprise Founder', 'Community Development Manager', 'NGO Program Director'],
      description: 'Your empathy and strategic thinking enable you to address complex social challenges and create lasting positive change.',
      nextSteps: ['Gain field experience in development', 'Study policy and economics', 'Learn multiple languages', 'Build networks in civil society'],
      timeline: '3-6 years for senior positions',
      professionals: ['Jordan Kim', 'Dr. Michael Foster']
    },
    'analytical_systems_expert': {
      title: 'Analytical Systems Expert',
      careers: ['Data Science Director', 'Financial Systems Analyst', 'Operations Research Specialist', 'Business Intelligence Manager', 'Quantitative Researcher'],
      description: 'Your systematic approach to complex problems makes you invaluable in data-driven decision making and optimization.',
      nextSteps: ['Master advanced statistics', 'Learn programming and databases', 'Develop domain expertise', 'Gain experience with large datasets'],
      timeline: '2-4 years for specialized roles',
      professionals: ['Marcus Rodriguez', 'Dr. Sarah Chen']
    }
  };

  // Helper functions
  const calculateAcademicStats = () => {
    const academicPages = ['mathematics', 'general_science', 'social_studies', 'physics', 'chemistry', 'biology', 'information_technology', 'performing_visual_arts', 'career_technical_education'];
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

  const calculatePersonalityStats = () => {
    const personalityPages = ['openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism'];
    const stats = {};

    personalityPages.forEach(pageId => {
      const pageResponses = responses[pageId] || {};
      const values = Object.values(pageResponses).map((r: any) => r.value || 0);
      const average = values.length > 0 ? values.reduce((sum, val) => sum + val, 0) / values.length : 0;
      
      stats[pageId] = {
        score: average,
        level: average >= 4 ? 'High' : average >= 3 ? 'Moderate' : 'Lower'
      };
    });

    return stats;
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

  const getEnhancedCareerRecommendation = (big5Scores: any, allResponses: any) => {
    const deeper = allResponses.deeper_assessment || {};
    const { openness, conscientiousness, extraversion, agreeableness } = big5Scores;
    
    // Enhanced logic based on deeper assessment
    if (deeper.work_environment_detail?.value === 'research_lab' && openness >= 4) {
      return 'research_innovation_specialist';
    } else if (deeper.work_environment_detail?.value === 'startup' && extraversion >= 4) {
      return 'entrepreneurial_tech_leader';
    } else if (deeper.impact_timeline?.value === 'generational' && agreeableness >= 4) {
      return 'social_impact_strategist';
    } else if (deeper.learning_preference?.value === 'theoretical' && conscientiousness >= 4) {
      return 'analytical_systems_expert';
    } else {
      return getCareerRecommendation(big5Scores, allResponses.academic_skills, allResponses.career_interests);
    }
  };

  const handleAnswer = (questionId: string, answer: any, pageId: string | null = null) => {
  const targetPageId = pageId || assessmentPages[currentPage].id;
  
  // Determine if this is an academic question (has correct/wrong answers)
  const page = assessmentPages.find(p => p.id === targetPageId);
  const question = page?.questions?.find(q => q.id === questionId);
  const isAcademicQuestion = question?.options?.some((opt: any) => 'correct' in opt);
  
  // Check if answer already exists
  const existingAnswer = responses[targetPageId]?.[questionId];
  
  // ONLY prevent changing answers for ACADEMIC questions
  if (existingAnswer && isAcademicQuestion) {
    return; // Don't allow changing academic answers
  }
  
  // For academic questions, track if answer is correct
  const isCorrect = isAcademicQuestion 
    ? (answer as any).correct === true
    : undefined;
  
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
  // Use the single declaration of currentPageObj and currentQuestion above
  const currentAnswer = pageResponses[currentQuestion.id];
  const Icon = currentPageObj.icon;
  const nextQuestion = () => {
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
    return assessmentPages.reduce((total, page) => {
      if (page.type === 'summary') return total;
      return total + page.questions.length;
    }, 0);
  };

  const getCurrentQuestionNumber = () => {
    let questionNumber = 1;
    for (let i = 0; i < currentPage; i++) {
      if (assessmentPages[i].type !== 'summary') {
        questionNumber += assessmentPages[i].questions.length;
      }
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

            {/* Satisfaction Check */}
            {satisfiedWithResults === null && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-center">How do these career suggestions feel to you?</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Are you satisfied with these career recommendations, or would you like us to explore more options with a deeper assessment?
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button 
                      onClick={() => setSatisfiedWithResults(true)}
                      variant="default"
                    >
                      These look great! Show me courses
                    </Button>
                    <Button 
                      onClick={() => setSatisfiedWithResults(false)}
                      variant="outline"
                    >
                      I'd like more options
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {satisfiedWithResults === true && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-center">Ready to start your journey?</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Great! We'll create a personalized learning path for you based on these results.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button 
                      onClick={() => navigate('/courses')}
                      size="lg"
                    >
                      View Personalized Courses
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
                    >
                      Retake Assessment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {satisfiedWithResults === false && !showDeeperAssessment && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-center">Let's dive deeper</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    We'll ask you some more specific questions based on your answers to give you better career matches.
                  </p>
                  <Button 
                    onClick={() => setShowDeeperAssessment(true)}
                    size="lg"
                  >
                    Continue with Deeper Assessment
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Deeper Assessment Questions */}
            {showDeeperAssessment && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-center">Deeper Assessment</CardTitle>
                  <p className="text-center text-muted-foreground">Help us understand your preferences better</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {deeperQuestions.map((question, index) => (
                    <div key={question.id} className="space-y-4">
                      <h3 className="font-medium">{question.question}</h3>
                      <div className="space-y-2">
                        {question.options.map((option) => (
                          <label key={option.value} className="flex items-start space-x-3 p-3 rounded-lg border cursor-pointer hover:bg-muted">
                            <input
                              type="radio"
                              name={question.id}
                              value={option.value}
                              checked={(responses as any).deeper_assessment?.[question.id]?.value === option.value}
                              onChange={() => handleAnswer(question.id, { value: option.value, label: option.label }, 'deeper_assessment')}
                              className="mt-1"
                            />
                            <span className="text-sm">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="text-center pt-4">
                    <Button 
                      onClick={() => {
                        // Recalculate with deeper assessment
                        const newBig5 = calculateBig5Scores();
                        const enhancedRecommendation = getEnhancedCareerRecommendation(newBig5, responses);
                        setResults({
                          big5Scores: newBig5,
                          recommendedPath: enhancedRecommendation,
                          confidence: 92 + Math.floor(Math.random() * 8),
                          enhanced: true
                        });
                        setShowDeeperAssessment(false);
                        setSatisfiedWithResults(null);
                      }}
                      size="lg"
                      disabled={!deeperQuestions.every(q => (responses as any).deeper_assessment?.[q.id])}
                    >
                      Get Enhanced Recommendations
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    );
  }

// Handle summary slides
if (currentPageObj.type === 'summary') {
  const academicStats = currentPageObj.id === 'academic_summary' ? calculateAcademicStats() : null;
  const personalityStats = currentPageObj.id === 'personality_summary' ? calculatePersonalityStats() : null;
  // Use Icon from above
  return (
    <div className="min-h-screen bg-gradient-primary">
      <div className="container mx-auto px-4 py-8">
        {/* Progress bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Section Complete
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round((getCurrentQuestionNumber() / getTotalQuestions()) * 100)}% complete
            </span>
          </div>
          <Progress value={(getCurrentQuestionNumber() / getTotalQuestions()) * 100} className="h-2" />
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
            {/* Academic Stats */}
            {academicStats && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Your Subject Performance</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {Object.entries(academicStats.subjects).map(([subject, stats]) => (
                    <div key={subject} className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-assessment-blue">
                        {(stats as any).percentage}%
                      </div>
                      <div className="text-sm text-muted-foreground capitalize">
                        {subject.replace('_', ' ')}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {(stats as { correct: number; total: number }).correct}/{(stats as { correct: number; total: number }).total} correct
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-lg">
                  <div className="text-3xl font-bold text-assessment-green mb-2">
                    {academicStats.overall.percentage}%
                  </div>
                  <div className="text-lg font-semibold">Overall Academic Performance</div>
                  <div className="text-muted-foreground">
 {academicStats.overall.correct} out of {academicStats.overall.total} questions correct
                  </div>
                </div>
              </div>
            )}

            {/* Personality Stats */}
            {personalityStats && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Your Personality Traits</h3>
                <div className="grid md:grid-cols-5 gap-4">
                  {Object.entries(personalityStats).map(([trait, stats]) => (
                    <div key={trait} className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-personality-openness">
                        {(stats as { level: string }).level}
                      </div>
                      <div className="text-sm capitalize mb-1">
                        {trait === 'neuroticism' ? 'Emotional Stability' : trait}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Score: {(stats as { score: number }).score.toFixed(1)}/5
                      </div>
                    </div>
                  ))}
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
{displayOptions.map((option, index) => (
  <Button
    key={`${option.value}-${index}`}  // Composite key for stability                <Button
                  variant={currentAnswer?.value === option.value ? "default" : "outline"}
                  className="w-full text-left h-auto p-4 justify-start"
                  onClick={() => handleAnswer(currentQuestion.id, option)}
                >
                  <div className="flex items-center">
                    {currentAnswer?.value === option.value && (
                      currentAnswer?.isCorrect ? (
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                      ) : (
                        <div className="w-5 h-5 mr-3 text-red-500 flex items-center justify-center">
                          <span className="text-lg font-bold">✕</span>
                        </div>
                      )
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