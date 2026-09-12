import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProjectList from "@/components/ProjectList";
import CertificationList from "@/components/CertificationList";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Selected work */}
      <section className="section container">
        <SectionHeading eyebrow="Selected Work" title="What I've worked on." />
        <ProjectList projects={projects.slice(0, 4)} />
        <Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/projects" className={`link-underline ${styles.viewAll}`} data-cursor="VIEW">
              View all projects <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* About preview */}
      <section className="section container">
        <div className={styles.aboutGrid}>
          <Reveal>
            <h2 className={styles.aboutTitle}>
              SECURITY
              <br />
              WITH
              <br />
              PURPOSE.
            </h2>
          </Reveal>
          <div className={styles.aboutBody}>
            <Reveal delay={0.08}>
              <p className="lead" style={{ maxWidth: "40ch" }}>
                I&apos;m a cybersecurity and GRC professional focused on information security,
                governance, risk, compliance and auditing.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <Link href="/about" className="link-underline body-sm" data-cursor="VIEW">
                About me <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Credentials preview */}
      <section className="section container">
        <SectionHeading eyebrow="Credentials" title="Certifications." />
        <CertificationList items={certifications} />
        <Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <Link
              href="/certifications"
              className={`link-underline ${styles.viewAll}`}
              data-cursor="VIEW"
            >
              View all certifications <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Contact CTA */}
      <section className={`section container ${styles.ctaSection}`}>
        <Reveal>
          <span className="eyebrow">Get In Touch</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className={styles.ctaTitle} style={{ marginTop: "1rem" }}>
            LET&apos;S
            <br />
            WORK
            <br />
            TOGETHER.
          </h2>
        </Reveal>
        <div className={styles.ctaRow}>
          <Reveal delay={0.1}>
            <p className={styles.ctaLead}>
              Have a project, opportunity, collaboration or idea?
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <Link href="/contact" className={styles.ctaLink} data-cursor="CONTACT">
              Contact Me <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
