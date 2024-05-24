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

function s(name: string, icon?: string): Skill {
  return new Skill(name, icon);
}

const rust = s("Rust", "rust").linkTo(s("Tauri", "tauri-dark"));

export const root_skill = s("Computer Science").linkTo(
  s("Programming").linkTo(
    rust,
    s("Version Control").linkTo(
      s("Git", "git").linkTo(
        s("Github", "github-dark"),
        s("GitLab", "gitlab-dark"),
      ),
      s("CI & CD", "githubactions-dark"),
    ),
    s("Game Development").linkTo(
      s("Godot Game Engine", "godot-dark"),
      s("OpenGL", "/icons/opengl.svg"),
      s("Bevy Game Engine", "bevy-dark").linkTo(
        rust,
        s("WebGPU", "/icons/wgpu.svg").linkTo(rust),
      ),
    ),
    s("Python", "python-dark").linkTo(
      s("Selenium", "selenium"),
      s("Machine Learning").linkTo(
        s("PyTorch", "pytorch-dark"),
        s("Numpy", "/icons/numpy.svg"),
      ),
    ),
    s("Web Development").linkTo(
      s("HTML", "html"),
      s("CSS", "css"),
      s("TailwindCSS", "tailwindcss-dark"),
      s("AstroJS", "astro"),
      s("React", "react-dark"),
      s("VueJS", "vuejs-dark"),
      s("ThreeJS", "threejs-dark"),
    ),
    s("Dart", "dart-dark").linkTo(s("Flutter", "flutter-dark")),
    s("JavaScript", "javascript"),
    s("TypeScript", "typescript"),
    s("C++", "cpp"),
    s("Java", "java-dark"),
  ),
  s("System Administration").linkTo(
    s("GNU + Linux", "linux-dark").linkTo(
      s("Arch Linux", "arch-dark"),
      s("Kali Linux", "kali-dark"),
      s("Debian", "debian-dark"),
    ),
    s("Bash", "bash-dark"),
    s("Docker", "docker"),
    s("NGINX", "nginx"),
  ),
  s("Database").linkTo(
    s("MongoDB", "mongodb"),
    s("GraphQL", "graphql-dark"),
    s("PostgreSQL", "postgresql-dark").linkTo(s("Supabase", "supabase-dark")),
  ),
);
