import React from "react";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@repo/design-system/components/ui/card";
import WaitlistForm from "@repo/design-system/components/ui/waitlist-form";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)]" />
      <div className="container relative mx-auto px-4 space-y-12 sm:space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="max-w-3xl text-center font-regular text-5xl tracking-tighter md:text-6xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Launching This December
          </h1>
          <p className="max-w-3xl text-center text-lg mt-4 text-muted-foreground leading-relaxed tracking-tight md:text-xl">
            We&apos;re putting in every effort to deliver the best data platform
            on the market—one that empowers your team with seamless pipelines,
            actionable insights, and powerful tools, all designed to transform
            how you work with data.
          </p>
        </div>

        <Card className="border-0 shadow-lg max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CardTitle className="text-2xl font-semibold">
                  Request Early Access
                </CardTitle>
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </div>
            <CardDescription className="text-muted-foreground mt-4">
              <div className="space-y-4">
                <p>Early access includes:</p>
                <ul className="space-y-2 list-none">
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-primary" />
                    <span>$100 platform credits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-primary" />
                    <span>Priority feature access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-primary" />
                    <span>Enterprise support</span>
                  </li>
                </ul>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <WaitlistForm />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>Join leading data teams on the waitlist</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
