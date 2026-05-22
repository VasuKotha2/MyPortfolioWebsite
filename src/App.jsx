
export default function App() {
  const skills = {
    Cloud: ["AWS", "Azure", "EKS", "Route53", "CloudFront"],
    Containers: ["Docker", "Kubernetes", "Helm"],
    CICD: ["Jenkins", "GitHub Actions", "GitLab CI"],
    IaC: ["Terraform", "CloudFormation"],
    Monitoring: ["Prometheus", "Grafana", "ELK"],
    Programming: ["Python", "Shell Scripting"],
  };

  const projects = [
    {
      title: "EKS Three-Tier Architecture",
      description:
        "Designed and deployed scalable ecommerce applications on Amazon EKS using Kubernetes and Terraform.",
    },
    {
      title: "GitHub Actions Automation",
      description:
        "Automated GitLab to GitHub migrations using GitHub Actions and Git LFS.",
    },
    {
      title: "Azure Hub-Spoke Terraform",
      description:
        "Built enterprise Azure networking architecture using Terraform.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="flex justify-between items-center px-10 py-6 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-cyan-400">Vasu Kotha</h1>

        <div className="flex gap-6 text-slate-300">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
        </div>
      </nav>

      <section className="px-10 py-28 max-w-7xl mx-auto">
        <p className="text-cyan-400 text-xl mb-4">DevOps Engineer</p>

        <h1 className="text-6xl font-bold leading-tight mb-6">
          Building Cloud Infrastructure & Automation
        </h1>

        <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
          Experienced DevOps Engineer with expertise in AWS, Kubernetes,
          Terraform, Jenkins, GitHub Actions, Azure, monitoring, and CI/CD
          automation.
        </p>

        <div className="mt-10 flex gap-5">
          <button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-2xl text-slate-900 font-semibold">
            Download Resume
          </button>

          <button className="border border-slate-700 hover:border-cyan-400 px-6 py-3 rounded-2xl">
            Contact Me
          </button>
        </div>
      </section>

      <section id="about" className="px-10 py-20 bg-slate-900/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-cyan-400 mb-8">About Me</h2>

          <p className="text-slate-300 text-lg leading-relaxed">
            I specialize in Kubernetes orchestration, Infrastructure as Code,
            cloud automation, monitoring, and CI/CD engineering. I build secure,
            scalable, and production-grade cloud environments.
          </p>
        </div>
      </section>

      <section id="skills" className="px-10 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-cyan-400 mb-12">Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
              >
                <h3 className="text-2xl font-semibold mb-5">{category}</h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="bg-slate-800 px-4 py-2 rounded-xl text-sm text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-10 py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-cyan-400 mb-12">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-slate-950 border border-slate-800 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center py-8 border-t border-slate-800 text-slate-500">
        © 2026 Vasu Kotha - DevOps Portfolio
      </footer>
    </div>
  );
}
