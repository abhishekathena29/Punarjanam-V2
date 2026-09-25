import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Layers } from "lucide-react";
import logoImg from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      {/* High-level Mission Banner */}
      <div className="border-b border-border bg-secondary/50 py-16 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-mono-tag text-xs text-accent font-semibold">
              Mission Statement
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Material reuse as a means. Resilient community infrastructure as the mission.
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              We redirect automotive chassis, industrial scrap, and structural waste from landfills into climate-sheltered public commons, shade pavilions, and participatory community spaces.
            </p>
          </div>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-accent hover:shadow-md"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={logoImg}
                alt="Punarjanam"
                className="h-12 w-auto object-contain bg-white rounded-lg p-1"
              />
            </Link>
            <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
              A Delhi-based circular infrastructure collective pioneering open-access public architecture from industrial and vehicle scrap.
            </p>
            <div className="pt-2 text-xs text-muted-foreground space-y-1">
              <p className="font-medium text-foreground">Delhi Fabrication Yard & Labs</p>
              <p>Mayapuri & Okhla Industrial Areas, New Delhi, India</p>
              <p>contact@punarjanam.org · +91 11 4982 7100</p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <p className="font-mono-tag text-xs font-semibold text-foreground">Architecture</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  Why Punarjanam
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="hover:text-foreground transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-foreground transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link to="/materials" className="hover:text-foreground transition-colors">
                  Material Library
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-foreground transition-colors">
                  Impact & Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Focus Areas */}
          <div className="space-y-3">
            <p className="font-mono-tag text-xs font-semibold text-foreground">What We Build</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/projects" className="hover:text-foreground transition-colors">
                  Community Roofs & Pavilions
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-foreground transition-colors">
                  Transit Shading Networks
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-foreground transition-colors">
                  Micro-Learning Pods
                </Link>
              </li>
              <li>
                <Link to="/materials" className="hover:text-foreground transition-colors">
                  Automotive Scrap Grading
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-foreground transition-colors">
                  Art Archive (2021–2023)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Get Involved */}
          <div className="space-y-3">
            <p className="font-mono-tag text-xs font-semibold text-foreground">Get Involved</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Request Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Donate Clean Scrap
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  CSR & Municipal Partners
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Maker & Welding Fellowship
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              100% Non-Commercial Civic Commons
            </span>
            <span className="flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-accent" />
              Demountable Modular Engineering
            </span>
          </div>
          <div>
            <p>© {new Date().getFullYear()} Punarjanam Collective. Non-profit public interest infrastructure.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
