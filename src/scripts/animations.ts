import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // Hero animations — smooth, warm entrance
  const heroTl = gsap.timeline({ defaults: { ease: "power2.out" } });

  heroTl
    .to(".hero-badge", { y: 0, opacity: 1, duration: 1 }, 0.2)
    .to(".hero-title", { y: 0, opacity: 1, duration: 1.2 }, 0.4)
    .to(".hero-subtitle", { y: 0, opacity: 1, duration: 1 }, 0.7)
    .to(".hero-ctas", { y: 0, opacity: 1, duration: 1 }, 0.9)
    .to(".hero-logo-card", { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power1.out" }, 0.6)
    .to(".hero-scroll", { opacity: 0.5, duration: 1.2, ease: "sine.inOut" }, 1.4);

  // Floating hero shapes
  gsap.to(".hero-shape", {
    y: "random(-20, 20)",
    x: "random(-20, 20)",
    duration: "random(4, 6)",
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    stagger: { each: 1 },
  });

  // Section titles — fade up on scroll
  gsap.utils.toArray<HTMLElement>(".section-title").forEach((title) => {
    gsap.set(title, { y: 40, opacity: 0 });
    ScrollTrigger.create({
      trigger: title,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(title, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        });
      },
    });
  });

  // Section descriptions — fade up on scroll
  gsap.utils.toArray<HTMLElement>(".section-description").forEach((desc) => {
    gsap.set(desc, { y: 30, opacity: 0 });
    ScrollTrigger.create({
      trigger: desc,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(desc, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        });
      },
    });
  });

  // Service cards — staggered reveal
  const serviceCards = gsap.utils.toArray<HTMLElement>(".service-card");
  if (serviceCards.length) {
    gsap.set(serviceCards, { y: 60, opacity: 0 });
    ScrollTrigger.create({
      trigger: serviceCards[0],
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(serviceCards, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        });
      },
    });
  }

  // Feature cards
  const featureCards = gsap.utils.toArray<HTMLElement>(".feature-card");
  if (featureCards.length) {
    gsap.set(featureCards, { y: 50, opacity: 0 });
    ScrollTrigger.create({
      trigger: featureCards[0],
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(featureCards, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
        });
      },
    });
  }

  // Stats counter animation
  const statsContainer = document.querySelector(".stats-container");
  if (statsContainer) {
    const statItems = gsap.utils.toArray<HTMLElement>(".stat-item");
    gsap.set(statItems, { y: 30, opacity: 0 });
    ScrollTrigger.create({
      trigger: statsContainer,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(statItems, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        });
      },
    });
  }

  // Process steps
  const processSteps = gsap.utils.toArray<HTMLElement>(".process-step");
  if (processSteps.length) {
    gsap.set(processSteps, { y: 50, opacity: 0, scale: 0.9 });
    ScrollTrigger.create({
      trigger: processSteps[0],
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(processSteps, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.2)",
        });
      },
    });

    // Process connector line
    const processLine = document.querySelector(".process-line");
    if (processLine) {
      gsap.set(processLine, { scaleX: 0, transformOrigin: "left center" });
      ScrollTrigger.create({
        trigger: processLine,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(processLine, {
            scaleX: 1,
            duration: 1,
            ease: "power2.out",
          });
        },
      });
    }
  }

  // Commitment section
  const commitmentContainer = document.querySelector(".commitment-container");
  if (commitmentContainer) {
    const children = gsap.utils.toArray<HTMLElement>(commitmentContainer.children);
    gsap.set(children, { y: 50, opacity: 0 });
    ScrollTrigger.create({
      trigger: commitmentContainer,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(children, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        });
      },
    });
  }

  // FAQ items
  const faqItems = gsap.utils.toArray<HTMLElement>(".faq-item");
  if (faqItems.length) {
    gsap.set(faqItems, { y: 30, opacity: 0 });
    ScrollTrigger.create({
      trigger: faqItems[0],
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(faqItems, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
        });
      },
    });
  }

  // WhatsApp button entrance
  gsap.set(".whatsapp-btn", { scale: 0, opacity: 0 });
  gsap.to(".whatsapp-btn", {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    delay: 1.5,
    ease: "back.out(1.7)",
  });
}
