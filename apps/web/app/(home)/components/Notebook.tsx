import NotebookImage from "@/public/notebook.png";
import Image from "next/image";
import {
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Create your pipelines in minutes",
    description:
      "Add your data sources, transform your data, and load it in the pipeline.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Multiplayer collaboration",
    description:
      "The notebook is multyplayer and collaborative, so you can work with your teammates and share your work.",
    icon: UserIcon,
  },
  {
    name: "Version control",
    description:
      "Never worring about losing your data, we will keeep track of all your changes.",
    icon: FingerPrintIcon,
  },

  {
    name: "Granular access control",
    description:
      "You can control who can access your data and what they can do with it.",
    icon: LockClosedIcon,
  },
];

function App() {
  return (
    <div className="min-h-screen  to-muted">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="max-w-3xl text-blue-500 text-center font-regular text-5xl tracking-tighter md:text-6xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            A notebook for your Data and Reports
          </h1>
          <p className="max-w-3xl mt-4 text-center text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl">
            We built a new modern jupyter notebook experience for data
            scientists and analysts. Write better text and code with his
            generative AI features.
          </p>
        </div>
        {/* Features Grid */}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Image
            src={NotebookImage}
            alt="Notebook"
            className="w-full sm:w-auto"
          />
        </div>
        <div className="mx-auto max-w-2xl text-center mt-10">
          <p className="text-xl font-semibold">
            Train AI models with your data, write ETL pipelines, and publish
            data apps for your executives or shareholders.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon
                      className="h-6 w-6 text-primary-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default App;
