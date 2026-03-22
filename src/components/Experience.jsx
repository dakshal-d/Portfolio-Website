import React from "react";

const experiences = [
  {
    company: "MuSigma Business Solutions",
    role: "Software Engineer",
    project: "GenAI Data Assistant",
    subtitle: "Agentic Chatbot for Pharma Analytics",
    period: "Aug 2024 - Present",
    location: "Bengaluru, India",
    stack: ["LangGraph", "RAG", "MCP", "Flask", "AWS", "Langfuse"],
    highlights: [
      "Built a LangGraph-based GenAI data assistant for pharma analytics over 13 relational tables, cutting analyst query resolution time by 40% and improving answer accuracy to 82%.",
      "Engineered a RAG pipeline with schema metadata and business rules, increasing SQL generation accuracy by 35% and enabling stronger multi-step reasoning.",
      "Implemented MCP-based backend communication and execution-focused LLM evaluation workflows, reducing query error rate by 30%.",
      "Productionized the platform with Langfuse observability, RBAC, Flask APIs, AWS Secrets Manager, and Jenkins CI/CD with SonarQube and Snyk.",
    ],
  },
  {
    company: "MuSigma Business Solutions",
    role: "Software Engineer",
    project: "File Verity Tool",
    subtitle: "Automated Data Validation Platform",
    period: "Aug 2024 - Present",
    location: "Bengaluru, India",
    stack: ["Flask", "Argo Workflows", "PostgreSQL", "Azure AD", "REST APIs"],
    highlights: [
      "Built a scalable validation platform supporting ingestion from local systems, AWS S3, and SFTP to catch schema mismatches, nulls, and pipeline inconsistencies.",
      "Designed automated data quality workflows with Argo Workflows and REST APIs for distributed validation orchestration.",
      "Reduced manual validation effort by 75% and lowered data error rates by 40% through automated ingestion, validation, and reporting.",
      "Integrated PostgreSQL audit logging and workflow state tracking with JWT authentication and Azure AD based authorization.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="bg-gray-900 text-white px-5 pt-16 pb-32" id="experience">
      <div className="container mx-auto">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[260px] border-indigo-600 pb-2">
            Work Experience
          </h2>
          <p className="text-gray-300">
            Production experience across Generative AI systems, full-stack
            delivery, data platforms, and cloud-backed engineering workflows.
          </p>
        </div>

        <div className="grid gap-8">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.project}`}
              className="rounded-2xl border border-gray-800 bg-gray-950/70 p-8 shadow-lg"
            >
              <div className="flex flex-col gap-4 border-b border-gray-800 pb-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
                    {experience.company}
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                    {experience.role}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    {experience.project}
                  </h3>
                  <p className="mt-2 text-gray-300">{experience.subtitle}</p>
                </div>
                <div className="rounded-xl border border-gray-800 bg-gray-900/80 px-4 py-3 text-sm text-gray-300 md:min-w-[220px] text-center">
                  <p>{experience.period}</p>
                  <p className="mt-1 text-gray-400">{experience.location}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-900/70 bg-blue-950/40 px-3 py-1 text-sm text-blue-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <ul className="mt-6 grid gap-4 text-gray-200">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-xl border border-gray-800 bg-gray-900 px-4 py-3"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
