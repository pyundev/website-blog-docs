"use client";

import { Button } from "@repo/design-system/components/ui/button";
import { fonts } from "@repo/design-system/lib/fonts";
import { captureException } from "@sentry/nextjs";
import { MoveRight, Sparkles } from "lucide-react";
import type NextError from "next/error";
import { useEffect } from "react";

type GlobalErrorProperties = {
  readonly error: NextError & { digest?: string };
  readonly reset: () => void;
};

const GlobalError = ({ error, reset }: GlobalErrorProperties) => {
  useEffect(() => {
    captureException(error);
  }, [error]);

  return (
    <html lang="en" className={fonts}>
      <body>
        <div className="w-full">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center -mt-10 gap-8 py-20 lg:py-40">
              <div className="flex flex-col gap-4">
                <h1 className="max-w-2xl text-center font-regular text-5xl tracking-tighter md:text-7xl">
                  System Maintenance
                </h1>
                <p className="max-w-2xl text-center text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl">
                  Our system is currently undergoing maintenance. We'll be back
                  shortly with improved features and performance.
                </p>
              </div>
              <div className="flex flex-row gap-3">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => reset()}
                  className="gap-2"
                >
                  Try again <MoveRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="pt-6 lg:pt-8 border-t">
                <div className="flex items-center gap-4">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    We appreciate your patience while we make things better!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
