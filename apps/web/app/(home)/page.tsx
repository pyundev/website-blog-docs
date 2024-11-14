import { showBetaFeature } from "@repo/feature-flags";
import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import CTA from "./components/cta";
import { FAQ } from "./components/faq";
import Features from "./components/features";
import { Hero } from "./components/hero";
import Stats from "./components/stats";
// import { Testimonials } from "./components/testimonials";
import Notebook from "./components/Notebook";

const meta = {
  title: "Datamizu - Serverless Data Workspace & AI-Powered Insights",
  description:
    "Datamizu is a cutting-edge serverless data workspace for startups and enterprises, enabling effortless data management and visualization. Connect databases, merge data sources, and leverage AI-powered insights to unlock hidden value, enhance decision-making, and drive business growth—all in one secure, intuitive platform. Perfect for product analysis, customer insights, and collaborative reporting.",
};

export const metadata: Metadata = createMetadata(meta);

const Home = async () => {
  const betaFeature = await showBetaFeature();

  return (
    <>
      {betaFeature && (
        <div className="w-full bg-black py-2 text-center text-white">
          Beta feature now available
        </div>
      )}
      <Hero />
      <Features />
      <Stats />
      <Notebook />
      {/* <Testimonials /> */}
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;
