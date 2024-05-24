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

  linkTo(...other_skills: Skill[]): this {
    other_skills.forEach((skill) => {
      Skill.links.add({
        source: this.id,
        target: skill.id,
      });
    });

    return this;
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

const rust = new Skill("Rust", "rust").linkTo(new Skill("Tauri", "tauri-dark"));

export const root_skill = new Skill("Computer Science").linkTo(
  new Skill("Programming").linkTo(
    rust,
    new Skill("Python", "python-dark").linkTo(
      new Skill("Machine Learning").linkTo(
        new Skill("PyTorch", "pytorch-dark"),
        new Skill("Numpy", "/icons/numpy.svg"),
      ),
      new Skill("Selenium", "selenium"),
    ),
    new Skill("JavaScript", "javascript"),
    new Skill("TypeScript", "typescript"),
    new Skill("C++", "cpp"),
    new Skill("Dart", "dart-dark").linkTo(new Skill("Flutter", "flutter-dark")),
    new Skill("Java", "java-dark"),
    new Skill("Version Control").linkTo(
      new Skill("Git", "git"),
      new Skill("Github", "github-dark"),
      new Skill("CI & CD", "githubactions-dark"),
    ),
    new Skill("Web Development").linkTo(
      new Skill("HTML", "html"),
      new Skill("CSS", "css"),
      new Skill("TailwindCSS", "tailwindcss-dark"),
      new Skill("AstroJS", "astro"),
      new Skill("React", "react-dark"),
      new Skill("VueJS", "vuejs-dark"),
      new Skill("ThreeJS", "threejs-dark"),
      new Skill("Actix Web", "actix-dark").linkTo(rust),
    ),
    new Skill("Game Development").linkTo(
      new Skill("Godot Game Engine", "godot-dark"),
      new Skill("OpenGL", "/icons/opengl.svg"),
      new Skill("Bevy Game Engine", "bevy-dark").linkTo(
        rust,
        new Skill("WebGPU", "/icons/wgpu.svg").linkTo(rust),
      ),
    ),
  ),
  new Skill("Database").linkTo(
    new Skill("MongoDB", "mongodb"),
    new Skill("GraphQL", "graphql-dark"),
    new Skill("PostgreSQL", "postgresql-dark").linkTo(
      new Skill("Supabase", "supabase-dark"),
    ),
  ),
  new Skill("System Administration").linkTo(
    new Skill("Bash", "bash-dark"),
    new Skill("Docker", "docker"),
    new Skill("NGINX", "nginx"),
    new Skill("GNU + Linux", "linux-dark").linkTo(
      new Skill("Arch Linux", "arch-dark"),
      new Skill("Kali Linux", "kali-dark"),
      new Skill("Ubuntu", "ubuntu-dark"),
    ),
  ),
);
