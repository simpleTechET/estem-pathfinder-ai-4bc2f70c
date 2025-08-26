import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  BookOpen, 
  Code, 
  Calculator, 
  FlaskConical, 
  Globe, 
  Users, 
  Briefcase,
  Clock,
  Star,
  Play
} from 'lucide-react';

const Courses = () => {
  const navigate = useNavigate();

  const courseCategories = [
    {
      title: 'Technology & Programming',
      description: 'Build the digital future',
      icon: Code,
      color: 'assessment.blue',
      courses: [
        {
          title: 'Introduction to Python Programming',
          description: 'Learn the fundamentals of programming with Python, one of the most popular programming languages.',
          level: 'Beginner',
          duration: '8 weeks',
          rating: 4.8,
          lessons: 24,
          skills: ['Variables & Data Types', 'Loops & Conditions', 'Functions', 'Basic Projects']
        },
        {
          title: 'Web Development Basics',
          description: 'Create your first websites using HTML, CSS, and JavaScript.',
          level: 'Beginner',
          duration: '10 weeks',
          rating: 4.7,
          lessons: 30,
          skills: ['HTML Structure', 'CSS Styling', 'JavaScript Basics', 'Responsive Design']
        },
        {
          title: 'Data Science for Beginners',
          description: 'Explore data analysis and visualization using Python and real-world datasets.',
          level: 'Intermediate',
          duration: '12 weeks',
          rating: 4.9,
          lessons: 36,
          skills: ['Data Analysis', 'Pandas', 'Matplotlib', 'Statistics Basics']
        }
      ]
    },
    {
      title: 'Science & Engineering',
      description: 'Discover how the world works',
      icon: FlaskConical,
      color: 'assessment.green',
      courses: [
        {
          title: 'Physics Fundamentals',
          description: 'Master the core concepts of physics from mechanics to electromagnetism.',
          level: 'Beginner',
          duration: '14 weeks',
          rating: 4.6,
          lessons: 42,
          skills: ['Mechanics', 'Thermodynamics', 'Waves', 'Electricity & Magnetism']
        },
        {
          title: 'Chemistry in Everyday Life',
          description: 'Understand chemical processes in the world around us.',
          level: 'Beginner',
          duration: '12 weeks',
          rating: 4.5,
          lessons: 36,
          skills: ['Atomic Structure', 'Chemical Bonds', 'Reactions', 'Organic Chemistry']
        },
        {
          title: 'Introduction to Bioengineering',
          description: 'Explore how engineering principles apply to biological systems.',
          level: 'Intermediate',
          duration: '16 weeks',
          rating: 4.8,
          lessons: 48,
          skills: ['Biology Basics', 'Engineering Principles', 'Medical Devices', 'Ethics']
        }
      ]
    },
    {
      title: 'Mathematics & Analytics',
      description: 'Master the language of logic',
      icon: Calculator,
      color: 'assessment.indigo',
      courses: [
        {
          title: 'Algebra & Pre-Calculus',
          description: 'Build a strong foundation in algebraic thinking and mathematical reasoning.',
          level: 'Beginner',
          duration: '16 weeks',
          rating: 4.4,
          lessons: 48,
          skills: ['Linear Equations', 'Quadratic Functions', 'Exponentials', 'Trigonometry']
        },
        {
          title: 'Statistics for Decision Making',
          description: 'Learn to analyze data and make informed decisions using statistical methods.',
          level: 'Intermediate',
          duration: '10 weeks',
          rating: 4.7,
          lessons: 30,
          skills: ['Descriptive Statistics', 'Probability', 'Hypothesis Testing', 'Data Visualization']
        },
        {
          title: 'Introduction to Financial Mathematics',
          description: 'Understand the mathematical principles behind finance and economics.',
          level: 'Intermediate',
          duration: '12 weeks',
          rating: 4.6,
          lessons: 36,
          skills: ['Compound Interest', 'Investment Analysis', 'Risk Assessment', 'Financial Modeling']
        }
      ]
    },
    {
      title: 'Social Sciences & Leadership',
      description: 'Understand people and society',
      icon: Users,
      color: 'assessment.pink',
      courses: [
        {
          title: 'Psychology Fundamentals',
          description: 'Explore how the human mind works and behavior patterns.',
          level: 'Beginner',
          duration: '12 weeks',
          rating: 4.8,
          lessons: 36,
          skills: ['Cognitive Psychology', 'Social Psychology', 'Research Methods', 'Ethics']
        },
        {
          title: 'Ethiopian History & Culture',
          description: 'Deep dive into Ethiopia\'s rich history and cultural heritage.',
          level: 'Beginner',
          duration: '10 weeks',
          rating: 4.9,
          lessons: 30,
          skills: ['Ancient Civilizations', 'Modern History', 'Cultural Practices', 'Regional Diversity']
        },
        {
          title: 'Leadership & Communication',
          description: 'Develop essential leadership skills and effective communication techniques.',
          level: 'Intermediate',
          duration: '8 weeks',
          rating: 4.7,
          lessons: 24,
          skills: ['Public Speaking', 'Team Management', 'Conflict Resolution', 'Emotional Intelligence']
        }
      ]
    },
    {
      title: 'Business & Entrepreneurship',
      description: 'Build and lead organizations',
      icon: Briefcase,
      color: 'assessment.orange',
      courses: [
        {
          title: 'Business Fundamentals',
          description: 'Learn the basics of how businesses operate and create value.',
          level: 'Beginner',
          duration: '10 weeks',
          rating: 4.6,
          lessons: 30,
          skills: ['Business Models', 'Marketing Basics', 'Finance Fundamentals', 'Operations']
        },
        {
          title: 'Entrepreneurship for Students',
          description: 'Turn your ideas into viable business concepts and learn startup basics.',
          level: 'Intermediate',
          duration: '12 weeks',
          rating: 4.8,
          lessons: 36,
          skills: ['Idea Validation', 'Business Planning', 'Funding', 'Pitching']
        },
        {
          title: 'Digital Marketing Essentials',
          description: 'Master online marketing strategies and social media management.',
          level: 'Beginner',
          duration: '8 weeks',
          rating: 4.5,
          lessons: 24,
          skills: ['Social Media', 'Content Creation', 'Analytics', 'Brand Building']
        }
      ]
    },
    {
      title: 'Global Studies & Languages',
      description: 'Connect with the world',
      icon: Globe,
      color: 'assessment.purple',
      courses: [
        {
          title: 'International Relations',
          description: 'Understand how countries interact and global issues are addressed.',
          level: 'Intermediate',
          duration: '14 weeks',
          rating: 4.7,
          lessons: 42,
          skills: ['Diplomacy', 'Global Economics', 'International Law', 'Cultural Awareness']
        },
        {
          title: 'Advanced English Communication',
          description: 'Perfect your English skills for academic and professional success.',
          level: 'Intermediate',
          duration: '16 weeks',
          rating: 4.9,
          lessons: 48,
          skills: ['Academic Writing', 'Professional Communication', 'Presentation Skills', 'Critical Reading']
        },
        {
          title: 'Environmental Science & Sustainability',
          description: 'Learn about environmental challenges and sustainable solutions.',
          level: 'Beginner',
          duration: '12 weeks',
          rating: 4.6,
          lessons: 36,
          skills: ['Climate Science', 'Ecology', 'Renewable Energy', 'Conservation']
        }
      ]
    }
  ];

  const CourseCard = ({ course, categoryColor }) => (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline">{course.level}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
            {course.rating}
          </div>
        </div>
        <CardTitle className="text-lg">{course.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm">{course.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-1" />
            {course.lessons} lessons
          </div>
        </div>

        <div>
          <h4 className="font-medium text-sm mb-2">What you'll learn:</h4>
          <div className="flex flex-wrap gap-1">
            {course.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <Button className="w-full" size="sm" style={{backgroundColor: `hsl(var(--${categoryColor.replace('.', '-')}))`}}>
          <Play className="w-4 h-4 mr-2" />
          Start Course
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-primary">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Personalized Learning Pathways
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover courses tailored to your interests and career goals. Each pathway is designed to take you from where you are to where you want to be.
          </p>
        </div>

        {/* Course Categories */}
        <div className="space-y-12">
          {courseCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={categoryIndex}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{backgroundColor: `hsl(var(--${category.color.replace('.', '-')}))`}}>
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.courses.map((course, courseIndex) => (
                    <CourseCard 
                      key={courseIndex} 
                      course={course} 
                      categoryColor={category.color}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <Card className="mt-16">
          <CardContent className="text-center py-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Not sure where to start?
            </h2>
            <p className="text-muted-foreground mb-6">
              Take our career assessment to get personalized course recommendations based on your personality and interests.
            </p>
            <Button 
              onClick={() => navigate('/assessment')}
              size="lg"
            >
              Take Career Assessment
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Courses;