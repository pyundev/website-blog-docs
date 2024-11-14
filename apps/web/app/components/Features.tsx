import { Sparkles, Users, TrendingDown } from "lucide-react";

function App() {
  return (
    <div className=" bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-fill-transparent">
            It&apos;s never been so easier to collect, store and visualize data.
          </h1>
          <p className="text-xl text-muted-foreground">
            Build powerful data pipelines, give your executives and stakeholders
            direct access to insights, and pay only for what you use—all on a
            platform designed to simplify your data journey.
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Sparkles className="w-8 h-8" />}
            title="Effortless Serverless Architecture"
            description="Easily build ETL pipelines without managing any infrastructure. Scale seamlessly as you grow."
          />
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Empower Non-Technical Teams"
            description="Let your entire team explore and visualize data through intuitive notebooks and interactive dashboards."
          />
          <FeatureCard
            icon={<TrendingDown className="w-8 h-8" />}
            title="Flexible, Cost-Effective Pricing"
            description="Enjoy monthly credits with a predictable price. Pay only for what you use beyond your plan's limits."
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* <Button size="lg" className="w-full sm:w-auto">
            Explore Platform
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Find an Event →
          </Button> */}
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 flex flex-col items-center text-center transition-shadow">
      <div className="p-3 rounded-lg bg-black text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default App;
