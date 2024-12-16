import React from 'react';
import { CalendarCheck, Users, Target } from 'lucide-react';
import MainLayout from './components/layout/MainLayout';
import HeroSection from './components/HeroSection';
import EventSection from './components/events/EventSection';
import PhilosophySection from './components/PhilosophySection';
import StaffSection from './components/StaffSection';
import OrganizationSection from './components/organization/OrganizationSection';
import { hostedEvents, participationEvents, problemSolvingEvents } from './data/events';

function App() {
  return (
    <MainLayout>
      <HeroSection />
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">活動</h2>
          <div className="space-y-24">
            <EventSection 
              title="主催企画" 
              icon={CalendarCheck}
              events={hostedEvents}
            />
            <EventSection 
              title="イベント運営・参加" 
              icon={Users}
              events={participationEvents}
            />
            <EventSection 
              title="地域課題解決" 
              icon={Target}
              events={problemSolvingEvents}
            />
          </div>
        </div>
      </div>
      <PhilosophySection />
      <StaffSection />
      <OrganizationSection />
    </MainLayout>
  );
}

export default App;