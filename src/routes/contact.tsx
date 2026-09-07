import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import * as React from "react";

import { Container } from "@/components/site/container";
import { FAQItem } from "@/components/site/faq-item";
import { Reveal } from "@/components/site/motion-primitives";
import { Eyebrow, PageHero, Section } from "@/components/site/sections";
import { breadcrumbsSchema, createMetadata, faqSchema } from "@/lib/seo";
import { contactInfo, faqs, services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => {
    const { meta, links } = createMetadata({
      title: "Contact Amplifi — Start Your Project",
      description:
        "Tell Amplifi what you're trying to grow. We reply within one business day with a clear point of view on what we'd do next.",
      path: "/contact",
    });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbsSchema([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqSchema(faqs)),
        },
      ],
    };
  },
  component: ContactComponent,
});

const inputClass =
  "text-body w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-brand";

function ContactComponent() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    company: "",
    service: "Web Development",
    message: "",
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const update =
    (field: keyof typeof form) =>
      (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
      ) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
      };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        subtitle="Tell us a bit about your business and what you're trying to grow. We reply within one business day."
      />

      <Section tone="light" className="py-20">
        <Container className="grid gap-14 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Check className="size-7" />
                  </div>
                  <h3 className="text-h3 text-slate-900">Message sent</h3>
                  <p className="text-small mt-2 max-w-sm text-slate-600">
                    Thanks, {form.name.split(" ")[0] || "there"}. Someone from
                    our team will reach out within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        required
                        value={form.name}
                        onChange={update("name")}
                        className={inputClass}
                        placeholder="Jordan Lee"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={update("email")}
                        className={inputClass}
                        placeholder="jordan@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      value={form.company}
                      onChange={update("company")}
                      className={inputClass}
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Service of interest
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={update("service")}
                      className={cn(inputClass, "appearance-none")}
                    >
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={update("message")}
                      className={inputClass}
                      placeholder="What are you trying to grow?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-soft sm:w-auto"
                  >
                    Send Message <ArrowRight className="size-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-2">
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Mail className="size-4 text-brand-700" />
                  <span className="text-small text-slate-700">
                    {contactInfo.email}
                  </span>
                </div>
                <div className="mb-4 flex items-center gap-3">
                  <Phone className="size-4 text-brand-700" />
                  <span className="text-small text-slate-700">
                    {contactInfo.phone}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="size-4 text-brand-700" />
                  <span className="text-small text-slate-700">
                    {contactInfo.location}
                  </span>
                </div>
              </div>

              <div className="text-body flex h-40 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-500">
                Map placeholder
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section tone="cream" className="py-20">
        <Container size="3xl">
          <Reveal className="mb-10 text-center">
            <Eyebrow light>FAQ</Eyebrow>
            <h2 className="text-h2 mt-5 text-slate-900">Common questions</h2>
          </Reveal>
          <Reveal>
            <div>
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.q}
                  question={faq.q}
                  answer={faq.a}
                  open={openFaq === index}
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
