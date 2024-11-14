import React from 'react';
import { Sparkles } from 'lucide-react';
import WaitlistForm from '@repo/design-system/components/ui/waitlist-form';
import FinancialDataFlow from './animations/hero-animation';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 bg-white" id="hero">
      <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20 gap-8 lg:gap-12">
        {/* Left side - Content */}
        <div className="flex-1 space-y-6 lg:space-y-8 max-w-2xl">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Serverless{' '}
              <span className="inline lg:block">Data</span>{' '}
              <span className="inline lg:block">Workspace</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Use SQL, Python or R to create complete serverless ETL pipelines, write Notebooks to explore your data, and publish data apps for your executives or shareholders.
            </p>
          </div>

          <WaitlistForm />

          <div className="pt-6 lg:pt-8 border-t">
            <div className="flex items-center gap-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground">
                Join the waiting list for access to free credits at launch!
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Visual */}
        <div className="hidden lg:block flex-1 w-full max-w-xl">
          <FinancialDataFlow />
        </div>
      </div>
    </div>
  );
};

export default Hero;