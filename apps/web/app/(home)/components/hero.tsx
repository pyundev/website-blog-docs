import { Button } from "@repo/design-system/components/ui/button";
import WaitlistForm from "@repo/design-system/components/ui/waitlist-form";
import { env } from "@repo/env";
import { allPosts } from "content-collections";
import { MoveRight, PhoneCall, Sparkles } from "lucide-react";
import Link from "next/link";

export const Hero = () => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center -mt-10 gap-8 py-20 lg:py-40">
        <div>
          <Button variant="secondary" size="sm" className="gap-4" asChild>
            <Link href={`/blog/${allPosts[0]._meta.path}`}>
              Read our latest article <MoveRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="max-w-2xl text-center font-regular text-5xl tracking-tighter md:text-7xl">
            Serverless Data Workspace
          </h1>
          <p className="max-w-2xl text-center text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl">
            Use SQL, Python or R to create complete serverless ETL pipelines,
            write Notebooks to explore your data, and publish data apps for your
            executives or shareholders.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <WaitlistForm />
        </div>
        <div className="pt-6 lg:pt-8 border-t">
          <div className="flex items-center gap-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              Join the waiting list for access to 100$ in credits at launch!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
