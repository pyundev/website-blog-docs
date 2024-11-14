import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/design-system/components/ui/card";
import { ArrowUpRight, Globe2, Code } from "lucide-react";
import Drive from "@/public/drive.png";
import Slack from "@/public/slack.png";
import Image from "next/image";

export default function Advanced() {
  return (
    <section className="relative bg-zinc-950 text-zinc-100">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-zinc-900/50 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24 lg:py-28 space-y-8 sm:space-y-12 relative">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto space-y-4 sm:space-y-6 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            The flexibility of not having an infrastructure to manage.
          </h1>
          <p className="text-base sm:text-lg text-zinc-400">
            Sign in to your account, connect the desired data sources, and start
            processing your data in minutes.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:gap-8">
          {/* Top Row */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {/* Uptime Card */}
            <Card className="bg-zinc-900/50 border border-zinc-800 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Globe2 className="h-5 w-5 text-emerald-500" />
                  <CardTitle className="text-zinc-100 text-lg sm:text-xl">99.99% Uptime</CardTitle>
                </div>
                <CardDescription className="text-zinc-400 text-sm sm:text-base">
                  All pipelines run on isolated infrastructure, ensuring 99.99%
                  uptime. Scale your data processing without infrastructure worries.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1 mt-4">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="h-6 sm:h-8 flex-1 bg-emerald-500 rounded-sm"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Integrations Card */}
            <Card className="bg-zinc-900/50 border border-zinc-800 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-zinc-100 text-lg sm:text-xl">Popular Integrations</CardTitle>
                <CardDescription className="text-zinc-400 text-sm sm:text-base">
                  Connect and automate your workflow with popular platforms. Set up in minutes, no code required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Slack Integration */}
                  <Card className="bg-zinc-800/50 border border-zinc-700 p-3 sm:p-4 hover:bg-zinc-800 transition-colors duration-200">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="shrink-0">
                        <Image 
                          src={Slack} 
                          alt="Slack" 
                          width={32} 
                          height={32}
                          className="object-contain sm:w-10 sm:h-10"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-zinc-100 text-sm sm:text-base mb-1">Slack</h3>
                        <p className="text-xs sm:text-sm text-zinc-400">
                          Get notifications in your channels
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Google Drive Integration */}
                  <Card className="bg-zinc-800/50 border border-zinc-700 p-3 sm:p-4 hover:bg-zinc-800 transition-colors duration-200">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="shrink-0">
                        <Image 
                          src={Drive} 
                          alt="Google Drive" 
                          width={32} 
                          height={32}
                          className="object-contain sm:w-10 sm:h-10"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-zinc-100 text-sm sm:text-base mb-1">Google Drive</h3>
                        <p className="text-xs sm:text-sm text-zinc-400">
                          Auto-sync your data
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Code Examples Card */}
          <Card className="bg-zinc-900/50 border border-zinc-800 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-emerald-500" />
                <CardTitle className="text-zinc-100 text-lg sm:text-xl">Not just Python</CardTitle>
              </div>
              <CardDescription className="text-zinc-400 text-sm sm:text-base">
                Write ETL pipelines in your preferred language.
              </CardDescription>
            </CardHeader>
            <CardContent className="overflow-hidden text-white">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Python Card */}
                <div className="rounded bg-zinc-900/80 p-3 sm:p-4 border border-zinc-800">
                  <div className="font-medium mb-2 text-emerald-500 flex items-center gap-2 text-sm sm:text-base">
                    Python
                    <span className="text-xs text-zinc-500">ETL</span>
                  </div>
                  <pre className="text-xs sm:text-sm overflow-x-auto">
                    <code className="block">
                      <span className="text-blue-400">import</span>{" "}
                      <span className="text-emerald-400">pandas</span>{" "}
                      <span className="text-blue-400">as</span>{" "}
                      <span className="text-emerald-400">pd</span>
                      {"\n\n"}
                      <span className="text-blue-400">def</span>{" "}
                      <span className="text-emerald-400">etl_pipeline</span>():
                      {"\n"}
                      {"    "}df = pd.read_csv(
                      <span className="text-emerald-300">
                        &apos;sales.csv&apos;
                      </span>
                      ){"\n\n"}
                      {"    "}summary = df.groupby(
                      <span className="text-emerald-300">&apos;date&apos;</span>
                      ).agg({"{"}
                      {"\n"}
                      {"        "}
                      <span className="text-emerald-300">
                        &apos;revenue&apos;
                      </span>:{" "}
                      <span className="text-emerald-300">&apos;sum&apos;</span>
                      {"\n"}
                      {"    "}
                      {"}"}){"\n"}
                      {"    "}summary.to_sql(
                      <span className="text-emerald-300">
                        &apos;summary&apos;
                      </span>
                      , engine)
                    </code>
                  </pre>
                </div>

                {/* SQL Card */}
                <div className="rounded bg-zinc-900/80 p-3 sm:p-4 border border-zinc-800">
                  <div className="font-medium mb-2 text-emerald-500 flex items-center gap-2 text-sm sm:text-base">
                    SQL
                    <span className="text-xs text-zinc-500">ETL</span>
                  </div>
                  <pre className="text-xs sm:text-sm overflow-x-auto">
                    <code className="block">
                      <span className="text-blue-400">WITH</span> summary{" "}
                      <span className="text-blue-400">AS</span> ({"\n"}
                      {"  "}
                      <span className="text-blue-400">SELECT</span> date,
                      {"\n"}
                      {"    "}
                      <span className="text-emerald-400">SUM</span>(revenue){" "}
                      <span className="text-blue-400">as</span> revenue,
                      {"\n"}
                      {"    "}
                      <span className="text-emerald-400">COUNT</span>(*){" "}
                      <span className="text-blue-400">as</span> orders
                      {"\n"}
                      {"  "}
                      <span className="text-blue-400">FROM</span> sales
                      {"\n"}
                      {"  "}
                      <span className="text-blue-400">GROUP BY</span> date
                      {"\n"}){"\n"}
                      <span className="text-blue-400">INSERT INTO</span>{" "}
                      metrics
                      {"\n"}
                      <span className="text-blue-400">SELECT</span> *{" "}
                      <span className="text-blue-400">FROM</span> summary;
                    </code>
                  </pre>
                </div>

                {/* R Card */}
                <div className="rounded bg-zinc-900/80 p-3 sm:p-4 border border-zinc-800">
                  <div className="font-medium mb-2 text-emerald-500 flex items-center gap-2 text-sm sm:text-base">
                    R
                    <span className="text-xs text-zinc-500">ETL</span>
                  </div>
                  <pre className="text-xs sm:text-sm overflow-x-auto">
                    <code className="block">
                      <span className="text-blue-400">library</span>(tidyverse)
                      {"\n\n"}
                      sales {"->"} read_csv(
                      <span className="text-emerald-300">
                        &quot;sales.csv&quot;
                      </span>
                      ){"\n\n"}
                      summary {"->"} sales {"%>%"}
                      {"\n"}
                      {"  "}
                      <span className="text-blue-400">group_by</span>(date){" "}
                      {"%>%"}
                      {"\n"}
                      {"  "}
                      <span className="text-blue-400">summarise</span>({"\n"}
                      {"    "}revenue ={" "}
                      <span className="text-emerald-400">sum</span>(revenue)
                      {"\n"}
                      {"  "}){"\n\n"}
                      <span className="text-blue-400">
                        dbWriteTable
                      </span>(conn, summary)
                    </code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}