import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/design-system/components/ui/accordion";
import { Button } from "@repo/design-system/components/ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

export const FAQ = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h4 className="max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl">
                Unlock the Power of Your Data with Datamizu
              </h4>
              <p className="max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight lg:max-w-lg">
                Datamizu is a serverless platform for managing ETL pipelines,
                training machine learning models, and performing data analysis.
                You can also create and share data applications, making insights
                accessible to your team and stakeholders.
              </p>
            </div>
            {/* <div className="">
              <Button className="gap-4" variant="outline" asChild>
                <Link href="/contact">
                  Any questions? Reach out <PhoneCall className="h-4 w-4" />
                </Link>
              </Button>
            </div> */}
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="what-is-datamizu">
            <AccordionTrigger>What is Datamizu?</AccordionTrigger>
            <AccordionContent>
              Datamizu is a serverless platform that allows you to manage ETL
              (Extract, Transform, Load) pipelines, train machine learning
              models, and perform in-depth data analysis. The platform also lets
              you create data applications that make insights easy to share with
              executives and stakeholders.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="who-is-datamizu-for">
            <AccordionTrigger>Who is Datamizu for?</AccordionTrigger>
            <AccordionContent>
              Datamizu is ideal for data scientists, analysts, and business
              teams who need a powerful yet easy-to-use tool for handling
              complex data tasks. It&apos;s designed for anyone looking to
              analyze and share data insights without the hassle of managing
              infrastructure.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="what-are-etl-pipelines">
            <AccordionTrigger>
              What are ETL pipelines, and why are they important?
            </AccordionTrigger>
            <AccordionContent>
              ETL pipelines allow you to Extract, Transform, and Load data from
              various sources. These pipelines are essential for cleaning and
              organizing raw data to enable meaningful analysis and support
              better decision-making. With Datamizu, you can create ETL
              pipelines using SQL, Python, or R effortlessly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="unique-features">
            <AccordionTrigger>
              What makes Datamizu&apos;s notebooks unique?
            </AccordionTrigger>
            <AccordionContent>
              Datamizu&apos;s notebooks offer a modern experience for data
              exploration, featuring AI-assisted code suggestions, collaborative
              editing, and built-in version control. Teams can work together in
              real-time, making it easier to create and share insights across
              the organization.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pricing">
            <AccordionTrigger>
              What kind of pricing does Datamizu offer?
            </AccordionTrigger>
            <AccordionContent>
              Datamizu follows a flexible, usage-based pricing model with
              monthly credits and predictable costs for usage beyond the
              included plan. This approach keeps Datamizu affordable for
              startups and scalable for enterprises.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="security">
            <AccordionTrigger>
              How secure is my data on Datamizu?
            </AccordionTrigger>
            <AccordionContent>
              Datamizu ensures data security with isolated infrastructure and
              99.99% uptime. You have full control over access permissions,
              giving you confidence that your data remains private and secure.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="non-technical">
            <AccordionTrigger>
              Can I use Datamizu if I&apos;m not a technical user?
            </AccordionTrigger>
            <AccordionContent>
              Yes! Datamizu is designed for both technical and non-technical
              users. Non-technical users can explore data insights through
              intuitive dashboards and create reports, while technical users can
              leverage advanced ETL and data analysis tools.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="early-access">
            <AccordionTrigger>
              What does the early access program offer?
            </AccordionTrigger>
            <AccordionContent>
              Early access includes $100 in platform credits, priority access to
              new features, and dedicated support. Signing up for early access
              allows you to experience Datamizu&apos;s capabilities firsthand
              and influence its development.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
);
