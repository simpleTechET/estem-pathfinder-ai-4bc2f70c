import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Target, Brain, Users, BookOpen, Award, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import professional images
import drSarahChen from '@/assets/dr-sarah-chen.jpg';
import marcusRodriguez from '@/assets/marcus-rodriguez.jpg';
import drAishaPatel from '@/assets/dr-aisha-patel.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Your Future Starts Here
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Designed for Ethiopian students. No more confusion about what to study. 
            Get a clear path from where you are to your dream career, with personalized courses just for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/assessment">
              <Button size="lg" className="text-lg px-8 py-6">
                Find My Perfect Career
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Free assessment • Takes 10-15 minutes • Get instant results
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-gradient-card border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-assessment-blue rounded-full mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Clear Direction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No confusion. Get exactly the courses and steps you need for YOUR goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-personality-openness rounded-full mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Smart Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tests your academic abilities, personality, and interests to find perfect matches.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-assessment-green rounded-full mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Ethiopian Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Includes Ethiopian history, local context, and global career opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment Preview */}
      <section className="bg-gradient-card py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              How We Help You Choose
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Three key areas we assess to find your perfect career match
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-assessment-blue rounded-full">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Your Academic Strengths</h3>
                <p className="text-muted-foreground">
                  Logic, math, science, and Ethiopian history questions to assess your natural abilities
                </p>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-personality-openness rounded-full">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Your Personality Type</h3>
                <p className="text-muted-foreground">
                  How you work best, relate to others, and handle challenges - the science of YOU
                </p>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-assessment-teal rounded-full">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Your Dreams & Values</h3>
                <p className="text-muted-foreground">
                  What kind of impact you want to make and what matters most to you in life
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Inspiration */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Students Like You Who Made It
              </h2>
              <p className="text-lg text-muted-foreground">
                Real stories from people who found their passion and built amazing careers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-card border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6 text-center">
                  <img 
                    src={drSarahChen} 
                    alt="Dr. Sarah Chen"
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-semibold text-lg mb-2">Dr. Sarah Chen</h4>
                  <p className="text-assessment-blue font-medium mb-2">Machine Learning Engineer</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Biology → Python → AI Research
                  </p>
                  <blockquote className="text-sm italic">
                    "I never thought my biology background would be my superpower in ML."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6 text-center">
                  <img 
                    src={marcusRodriguez} 
                    alt="Marcus Rodriguez"
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-semibold text-lg mb-2">Marcus Rodriguez</h4>
                  <p className="text-assessment-blue font-medium mb-2">Quantitative Analyst</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Physics → Self-taught Programming → Finance
                  </p>
                  <blockquote className="text-sm italic">
                    "Math is universal - it opens doors everywhere."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6 text-center">
                  <img 
                    src={drAishaPatel} 
                    alt="Dr. Aisha Patel"
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-semibold text-lg mb-2">Dr. Aisha Patel</h4>
                  <p className="text-assessment-blue font-medium mb-2">Molecular Biologist</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Chemistry → Research → PhD → Biotech Startup
                  </p>
                  <blockquote className="text-sm italic">
                    "Every failed experiment taught me something valuable."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Stop Feeling Lost About Your Future
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join Ethiopian students who've found clarity and confidence in their career choices
            </p>
            
            <Link to="/assessment">
              <Button size="lg" className="text-lg px-8 py-6">
                Discover My Career Path
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <div className="flex items-center justify-center mt-8 space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Science-backed
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Personalized results
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Real career stories
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;