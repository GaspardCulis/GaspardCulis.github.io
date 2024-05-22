class Skill {
  protected links: Set<Skill> = new Set();

  constructor(readonly name: string) {}

  linkTo(...other_skills: Skill[]) {
    other_skills.forEach((skill) => {
      this.links.add(skill);
      skill.links.add(this);
    });
  }
}

const python = new Skill("Python");
const javascript = new Skill("JavaScript");
const typescript = new Skill("TypeScript");
const rust = new Skill("Rust");
const cpp = new Skill("C++");

const programming = new Skill("Programming");
programming.linkTo(python, javascript, typescript, rust, cpp);

const webgpu = new Skill("WebGPU");
const webdev = new Skill("Web Development");
webdev.linkTo(
  new Skill("HTML"),
  new Skill("CSS"),
  new Skill("TailwindCSS"),
  new Skill("AstroJS"),
  new Skill("React"),
  new Skill("VueJS"),
  webgpu,
);

const graphics_programming = new Skill("Graphics Programming");
graphics_programming.linkTo(new Skill("OpenGL"), webgpu, rust);

const bevy = new Skill("Bevy Game Engine");
bevy.linkTo(rust);

const gamedev = new Skill("Game Development");
gamedev.linkTo(new Skill("Godot Game Engine"), bevy, graphics_programming);

const machine_learning = new Skill("Machine Learning");
machine_learning.linkTo(new Skill("PyTorch"), new Skill("Numpy"), python);

const root_skill = new Skill("Computer Science");
root_skill.linkTo(programming, webdev, gamedev, graphics_programming);

export default root_skill;
