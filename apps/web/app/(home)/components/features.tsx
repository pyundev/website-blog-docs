import { Button } from "@repo/design-system/components/ui/button";
import { Sparkles, Users, TrendingDown, MoveRight } from "lucide-react";
import Link from "next/link";

export default function Feature() {
  return (
    <div
      className="w-full bg-gradient-to-b from-background to-muted"
      id="product"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
          <div className="flex flex-col gap-4">
            <h1 className="max-w-3xl text-blue-500 text-center font-regular text-5xl tracking-tighter md:text-6xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              It&apos;s never been so easier to collect, store and visualize
              data.
            </h1>
            <p className="max-w-3xl text-center text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl">
              Build powerful data pipelines, give your executives and
              stakeholders direct access to insights, and pay only for what you
              use—all on a platform designed to simplify your data journey.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-6 md:grid-cols-3 gap-8 w-full max-w-5xl">
            <FeatureCard
              icon={<Sparkles className="h-8 w-8" />}
              title="Effortless Serverless Architecture"
              description="Easily build ETL pipelines without managing any infrastructure. Scale seamlessly as you grow."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Empower Non-Technical Teams"
              description="Let your entire team explore and visualize data through intuitive notebooks and interactive dashboards."
            />
            <FeatureCard
              icon={<TrendingDown className="h-8 w-8" />}
              title="Flexible, Cost-Effective Pricing"
              description="Enjoy monthly credits with a predictable price. Pay only for what you use beyond your plan's limits."
            />
          </div>

          {/* <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" asChild>
              <Link href="/explore">
                Explore Platform <MoveRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" className="gap-4" variant="outline" asChild>
              <Link href="/events">
                Find an Event <MoveRight className="h-4 w-4" />
              </Link>
            </Button>
          </div> */}
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
    <div className="flex flex-col items-center text-center transition-shadow rounded-lg p-3">
      <div className="p-3 rounded-lg bg-primary text-primary-foreground mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
