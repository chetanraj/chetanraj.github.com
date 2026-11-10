import { attachScrollMotion } from "./scrollMotion";
test("scroll enhancement respects motion preference and cleans up", () => {
  const root = { querySelectorAll: () => [document.createElement("section"), document.createElement("section")] };
  let onMedia;
  const media = { add: vi.fn((query, callback) => { onMedia = callback; }), revert: vi.fn() };
  const contextRevert = vi.fn();
  const gsap = { registerPlugin: vi.fn(), matchMedia: () => media, context: callback => { callback(); return { revert: contextRevert }; }, fromTo: vi.fn() };
  const cleanup = attachScrollMotion(root,gsap,{});
  expect(media.add).toHaveBeenCalledWith("(prefers-reduced-motion: no-preference)",expect.any(Function));
  expect(gsap.fromTo).not.toHaveBeenCalled();
  const revert = onMedia();
  expect(gsap.fromTo).toHaveBeenCalledTimes(2);
  for (const [, from, to] of gsap.fromTo.mock.calls) {
    expect(from.opacity).toBeGreaterThan(0);
    expect(to.scrollTrigger.pin).toBeUndefined();
    expect(to.scrollTrigger.scrub).toBe(0.5);
  }
  revert(); cleanup();
  expect(contextRevert).toHaveBeenCalledOnce();
  expect(media.revert).toHaveBeenCalledOnce();
});
