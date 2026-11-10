/** Progressive enhancement: native scrolling and visible content remain the default. */
export function attachScrollMotion(root, gsap, ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();
  media.add("(prefers-reduced-motion: no-preference)", () => {
    const context = gsap.context(() => {
      root.querySelectorAll(".explore-section, .offscreen").forEach((section) => {
        gsap.fromTo(section, { y: 28, opacity: 0.75 }, {
          y: 0, opacity: 1, ease: "none",
          scrollTrigger: { trigger: section, start: "top 95%", end: "top 65%", scrub: 0.5, invalidateOnRefresh: true },
        });
      });
    }, root);
    return () => context.revert();
  });
  return () => media.revert();
}
