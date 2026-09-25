import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  ArrowRight,
  CheckCircle2,
  Building,
  Truck,
  HeartHandshake,
  Wrench,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get Involved & Contact — Punarjanam" },
      {
        name: "description",
        content:
          "Collaborate with Punarjanam: Request community infrastructure, donate automotive scrap metal, or partner on circular public architecture in Delhi.",
      },
      { property: "og:title", content: "Get Involved & Contact — Punarjanam" },
      {
        property: "og:description",
        content:
          "Pathways for communities, material donors, civic partners, and makers to build resilient circular infrastructure together.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

type TrackType = "community" | "donor" | "partner" | "maker" | "supporter";

const tracks = [
  {
    id: "community" as TrackType,
    label: "For Communities",
    icon: Building,
    desc: "Request a shade roof, public gathering canopy, or infrastructure audit for your neighborhood.",
  },
  {
    id: "donor" as TrackType,
    label: "Material Donors",
    icon: Truck,
    desc: "For vehicle dismantlers, scrap aggregators, and contractors wishing to donate clean structural steel.",
  },
  {
    id: "partner" as TrackType,
    label: "Partners & CSR",
    icon: HeartHandshake,
    desc: "For municipal bodies, philanthropic foundations, and corporate CSR co-funding public commons.",
  },
  {
    id: "maker" as TrackType,
    label: "Makers & Engineers",
    icon: Wrench,
    desc: "For architects, structural engineers, master welders, and fellows looking to join field fabrication.",
  },
];

const inputClass =
  "mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent";

function Contact() {
  const [activeTrack, setActiveTrack] = useState<TrackType>("community");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    location: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Intro */}
      <section className="border-b border-border/80 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="font-mono-tag text-xs font-semibold text-accent">
              Civic Engagement & Inquiries
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
              Get Involved With Punarjanam
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We build circular infrastructure through radical collaboration. Select your pathway below to initiate a partnership, request community shade structures, or donate scrap materials.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Pathways Section */}
      <section className="py-20 lg:py-24 bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12 items-start">
            {/* Left Column: Track Selector & Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Choose Your Collaboration Track
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our team routes incoming proposals directly to field architects and material coordinators.
                </p>
              </div>

              {/* Pathway Buttons */}
              <div className="space-y-3">
                {tracks.map((trk) => {
                  const Icon = trk.icon;
                  const isSelected = activeTrack === trk.id;
                  return (
                    <button
                      key={trk.id}
                      type="button"
                      onClick={() => setActiveTrack(trk.id)}
                      className={`w-full text-left rounded-2xl p-5 border transition-all ${
                        isSelected
                          ? "border-accent bg-secondary/80 shadow-xs"
                          : "border-border bg-background hover:bg-secondary/40"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                            isSelected ? "bg-accent text-white" : "bg-secondary text-foreground"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-foreground">{trk.label}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{trk.desc}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Direct Contact Info */}
              <div className="rounded-2xl border border-border bg-background p-6 space-y-4">
                <h4 className="font-display text-sm font-bold text-foreground">
                  Delhi Headquarters & Yard
                </h4>
                <div className="space-y-2.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 text-accent shrink-0" />
                    <span>Mayapuri & Okhla Industrial Areas, New Delhi 110064, India</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 text-accent shrink-0" />
                    <span>contact@punarjanam.org · partnerships@punarjanam.org</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 text-accent shrink-0" />
                    <span>+91 11 4982 7100 (Mon–Fri, 9am–6pm IST)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-border bg-background p-8 lg:p-12 shadow-sm">
                {submitted ? (
                  <div className="py-16 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      Inquiry Received
                    </h3>
                    <p className="mx-auto max-w-md text-sm text-muted-foreground leading-relaxed">
                      Thank you for reaching out to Punarjanam. Our community and engineering team will review your proposal and respond within two working days.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            organization: "",
                            phone: "",
                            location: "",
                            details: "",
                          });
                        }}
                        className="rounded-full border border-border bg-card px-6 py-2.5 text-xs font-semibold text-foreground hover:bg-secondary"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <span className="font-mono-tag text-xs font-semibold text-accent">
                        Selected: {tracks.find((t) => t.id === activeTrack)?.label}
                      </span>
                      <h3 className="mt-1 text-2xl font-bold text-foreground">
                        Tell us about your project or proposal
                      </h3>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ananya Sharma"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ananya@organization.org"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground">
                          Organization / Community Group
                        </label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. Mayapuri Residents Welfare Group"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground">
                          Location / Neighborhood
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Bawana, Delhi"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground">
                        {activeTrack === "community" && "Describe your community's shade, roof, or gathering space needs *"}
                        {activeTrack === "donor" && "Describe the scrap metal, vehicle types, or materials you wish to donate *"}
                        {activeTrack === "partner" && "Describe your CSR, municipal, or philanthropic partnership goals *"}
                        {activeTrack === "maker" && "Describe your fabrication, architectural, or engineering background *"}
                        {activeTrack === "supporter" && "How would you like to support circular public infrastructure? *"}
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Provide details about the site, estimated scale, timing, or collaboration ideas..."
                        className={inputClass}
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent hover:shadow-md"
                      >
                        <span>Send Proposal to Punarjanam</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="text-[11px] text-muted-foreground text-center">
                      Punarjanam is a non-profit collective. We do not sell retail artwork, sculptures, or commercial products.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
