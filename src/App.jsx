
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
      <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-6 border-b border-slate-800 gap-4">
        <h1 className="text-3xl font-bold text-cyan-400">
          Venkannababu Kotha
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-slate-300">
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>
        </div>
      </nav>

      <section className="px-6 md:px-10 py-20 md:py-28 max-w-7xl mx-auto mx-auto">
        <p className="text-cyan-400 text-xl mb-4">DevOps Engineer</p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Building Cloud Infrastructure & Automation
        </h1>

        <p className="text-slate-400 text-base md:text-lg max-w-3xl leading-relaxed">
          Experienced DevOps Engineer with expertise in AWS, Kubernetes,
          Terraform, Jenkins, GitHub Actions, Azure, monitoring, and CI/CD
          automation.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-5">
          <a href="/Kotha_Venkannababu_Resume.pdf"
          download
          className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-2xl text-slate-900 font-semibold"
          >
          Download Resume
          </a>

          <a href="#contact"
            className="border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 px-6 py-3 rounded-2xl transition">
          Contact Me
          </a>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      <section
  id="contact"
  className="px-6 md:px-10 py-20 bg-slate-900/50">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6 text-cyan-400">
      Contact Me
    </h2>

    <p className="text-slate-400 text-lg mb-10">
      Interested in DevOps, Kubernetes, Cloud Infrastructure,
      CI/CD automation, or Terraform projects? Let's connect.
    </p>

    <div className="grid gap-6 md:grid-cols-2">

      {/* Phone */}
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
        <h3 className="text-xl font-semibold mb-3 text-cyan-400">
          Phone
        </h3>

        <a
          href="tel:+919392097569"
          className="text-slate-300 hover:text-cyan-400"
        >
          +91 9392097569
        </a>
      </div>

      {/* Email */}
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
        <h3 className="text-xl font-semibold mb-3 text-cyan-400">
          Email
        </h3>

        <a
          href="mailto:venkannababu.kotha96@gmail.com"
          className="text-slate-300 hover:text-cyan-400"
        >
          venkannababu.kotha96@gmail.com
        </a>
      </div>

      {/* LinkedIn */}
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
        <h3 className="text-xl font-semibold mb-3 text-cyan-400">
          LinkedIn
        </h3>

        <a
          href="https://linkedin.com/in/venkannababu-kotha-420652132"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-cyan-400"
        >
          www.linkedin.com/in/venkannababu-kotha-420652132
        </a>
      </div>

      {/* GitHub */}
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
        <h3 className="text-xl font-semibold mb-3 text-cyan-400">
          GitHub
        </h3>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-cyan-400"
        >
          github.com/yourusername
        </a>
      </div>
    </div>
      </div>
    </section>

      <footer className="text-center py-8 border-t border-slate-800 text-slate-500">
        © 2026 Venkannababu Kotha - DevOps Portfolio
      </footer>
    </div>
  );
}
