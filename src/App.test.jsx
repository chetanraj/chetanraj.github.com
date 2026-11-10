import { render, screen, cleanup } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import App from "./App";
afterEach(() => { cleanup(); window.history.replaceState({}, "", "/"); });
test("renders identity, role and original photo", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("ChetanRaj.");
  expect(screen.getByText(/Frontend Architect/)).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("src", expect.stringContaining("bg.jpg"));
});
test("preserves existing destinations", () => {
  render(<App />);
  for (const href of ["https://chetanraj.dev/blog/", "https://zinnia.com/", "https://instagram.com/javascriptessentials", "https://x.com/chetan_raj", "https://github.com/chetanraj"]) expect(screen.getAllByRole("link").some(link => link.getAttribute("href") === href)).toBe(true);
});
test.each(["/", "/?direction=afterglow", "/?direction=workbench"])("focuses Afterglow at %s", (url) => {
  window.history.replaceState({}, "", url);
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass("afterglow");
  expect(screen.queryByLabelText("Design exploration")).not.toBeInTheDocument();
});
test("provides accessible navigation", () => {
  render(<App />);
  expect(screen.getByRole("link", { name: "Skip to content" })).toHaveAttribute("href", "#main");
  expect(screen.getByRole("main")).toHaveAttribute("id", "main");
  expect(screen.getByRole("region", { name: "A few open tabs." })).toHaveAttribute("id", "explore");
});
test("blue gradient and dynamic viewport are present", () => {
  const css = readFileSync(resolve(process.cwd(), "src/styles/index.css"), "utf8");
  expect(css).toContain("rgba(15,76,129,.5)");
  expect(css).toContain("rgba(15,76,129,.48)");
  expect(css).toContain("min-height:100dvh");
  expect(css).toContain("prefers-reduced-motion:reduce");
});
test("self-hosts licensed Geist Serif regular", () => {
  const css = readFileSync(resolve(process.cwd(), "src/styles/index.css"), "utf8");
  expect(css).toContain('h1,h2,h3{font-family:"Geist Serif"');
  expect(css).toContain('font-weight:400');
  const font = readFileSync(resolve(process.cwd(), "src/fonts/geist-serif-regular.woff2"));
  expect(font.subarray(0,4).toString()).toBe("wOF2");
  expect(readFileSync(resolve(process.cwd(),"public/licenses/GEIST-OFL.txt"),"utf8")).toContain("SIL OPEN FONT LICENSE Version 1.1");
});

test("decorative arrows are SVG and hidden from accessible labels", () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll("svg.arrow-icon").length).toBe(6);
  for (const icon of container.querySelectorAll("svg.arrow-icon")) expect(icon).toHaveAttribute("aria-hidden", "true");
  expect(container.textContent).not.toMatch(/[↗↓]/);
});
