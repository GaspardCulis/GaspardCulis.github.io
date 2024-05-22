export class Skill {
  public static nodes: Map<number, Skill> = new Map();
  public static links: Set<{ source: number; target: number }> = new Set();
  readonly id: number;

  constructor(
    readonly name: string,
    readonly icon?: string,
  ) {
    this.id = Math.random();
    Skill.nodes.set(this.id, this);
  }

  linkTo(...other_skills: Skill[]) {
    other_skills.forEach((skill) => {
      Skill.links.add({
        source: this.id,
        target: skill.id,
      });
    });
  }

  getIconUrl(): string | null {
    if (this.icon) {
      if (this.icon.startsWith("http") || this.icon.startsWith("/icons/")) {
        return this.icon;
      } else {
        return `https://api.iconify.design/skill-icons/${this.icon}.svg?height=24`;
      }
    }
    return null;
  }
}

const python = new Skill("Python", "python-dark");
const javascript = new Skill("JavaScript", "javascript");
const typescript = new Skill("TypeScript", "typescript");
const rust = new Skill("Rust", "rust");
const cpp = new Skill("C++", "cpp");

const programming = new Skill("Programming");
programming.linkTo(python, javascript, typescript, rust, cpp);

const webgpu = new Skill("WebGPU", "/icons/wgpu.svg");
const webdev = new Skill("Web Development");
webdev.linkTo(
  new Skill("HTML", "html"),
  new Skill("CSS", "css"),
  new Skill("TailwindCSS", "tailwindcss-dark"),
  new Skill("AstroJS", "astro"),
  new Skill("React", "react-dark"),
  new Skill("VueJS", "vuejs-dark"),
  webgpu,
);

const graphics_programming = new Skill("Graphics Programming");
graphics_programming.linkTo(
  new Skill("OpenGL", "/icons/opengl.svg"),
  webgpu,
  rust,
);

const bevy = new Skill("Bevy Game Engine", "bevy-dark");
bevy.linkTo(rust);

const gamedev = new Skill("Game Development");
gamedev.linkTo(
  new Skill("Godot Game Engine", "godot-dark"),
  bevy,
  graphics_programming,
);

const machine_learning = new Skill("Machine Learning");
machine_learning.linkTo(
  new Skill("PyTorch", "pytorch-dark"),
  new Skill("Numpy", "/icons/numpy.svg"),
  python,
);

export const root_skill = new Skill("Computer Science");
root_skill.linkTo(
  programming,
  webdev,
  gamedev,
  graphics_programming,
  machine_learning,
);
