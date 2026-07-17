import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { ArrowUpRight, Mail, Phone, Linkedin } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const easing = [0.76, 0, 0.24, 1];

const CONTACTS = [
  { icon: Mail, label: "Email", value: "shyamkumar33406@gmail.com", href: "mailto:shyamkumar33406@gmail.com", id: "email" },
  { icon: Phone, label: "Phone", value: "+91 93447 61399", href: "tel:+919344761399", id: "phone" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/shyam-kumar-a", href: "https://www.linkedin.com/in/shyam-kumar-a-8a1990303/", id: "linkedin" },
  { icon: ArrowUpRight, label: "Behance", value: "behance.net/shyamkumara", href: "https://www.behance.net/shyamkumara", id: "behance" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await axios.post(`${API}/contact`, form);
      if (res.data && res.data.success) {
        setSent(true);
        toast.success("Message sent. I'll reply within 48 hours.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      const msg = err?.response?.data?.detail || "Could not send your message. Please try again.";
      toast.error(typeof msg === "string" ? msg : "Please check your inputs.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-40 px-6 md:px-12 max-w-[1600px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left — huge headline */}
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 text-xs tracking-[0.28em] uppercase text-electric mb-6">
            <span className="w-8 h-[1px] bg-electric" />
            Get In Touch
          </div>
          <h2 className="font-serif font-light text-6xl md:text-8xl lg:text-[9rem] leading-[0.88] tracking-tight">
            Let&apos;s <span className="italic">talk.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-chalk-muted font-light leading-relaxed">
            I&apos;m currently open for junior product design roles, freelance UX projects, and
            long-form collaborations. If any of that sounds like it fits — drop a note.
          </p>

          <div className="mt-14 space-y-4">
            {CONTACTS.map(({ icon: Icon, label, value, href, id }) => (
              <a
                key={id}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                data-testid={`contact-link-${id}`}
                className="group flex items-center justify-between gap-4 py-4 border-b border-white/[0.08] hover:border-electric transition-colors duration-500"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <Icon size={18} className="text-electric shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-chalk-faint">{label}</div>
                    <div className="text-white truncate">{value}</div>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-white/40 group-hover:text-electric group-hover:rotate-45 transition-all duration-500 shrink-0"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: easing }}
          onSubmit={onSubmit}
          data-testid="contact-form"
          className="lg:col-span-6 lg:sticky lg:top-24 glass rounded-md p-6 md:p-10"
        >
          <div className="text-xs uppercase tracking-[0.28em] text-electric mb-8">— The Brief</div>

          <div className="space-y-6">
            <Field
              label="Name"
              value={form.name}
              onChange={onChange("name")}
              placeholder="Your full name"
              testid="input-name"
            />
            <Field
              label="Email"
              value={form.email}
              onChange={onChange("email")}
              placeholder="you@company.com"
              type="email"
              testid="input-email"
            />
            <Field
              label="Subject"
              value={form.subject}
              onChange={onChange("subject")}
              placeholder="Freelance / Full-time / Coffee chat"
              testid="input-subject"
            />
            <TextArea
              label="Message"
              value={form.message}
              onChange={onChange("message")}
              placeholder="Tell me about the project, timeline, and team."
              testid="input-message"
            />
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-xs text-chalk-faint max-w-xs">
              Typical reply time — under 48 hours. I read every message myself.
            </p>
            <button
              type="submit"
              disabled={submitting}
              data-testid="contact-submit"
              className="group inline-flex items-center gap-4 bg-electric hover:bg-white hover:text-ink-0 disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3 rounded-full text-sm tracking-[0.2em] uppercase transition-colors duration-500 shrink-0"
            >
              {sent ? "Sent ✓" : submitting ? "Sending..." : "Send Message"}
              <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-500" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, testid, ...rest }) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.28em] text-chalk-faint mb-2">{label}</span>
      <input
        {...rest}
        data-testid={testid}
        className="w-full bg-transparent border-b border-white/15 focus:border-electric text-white text-base md:text-lg py-3 outline-none transition-colors duration-500 placeholder:text-chalk-faint"
      />
    </label>
  );
}
function TextArea({ label, testid, ...rest }) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.28em] text-chalk-faint mb-2">{label}</span>
      <textarea
        {...rest}
        rows={5}
        data-testid={testid}
        className="w-full bg-transparent border-b border-white/15 focus:border-electric text-white text-base md:text-lg py-3 outline-none resize-none transition-colors duration-500 placeholder:text-chalk-faint"
      />
    </label>
  );
}
