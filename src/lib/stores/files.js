// src/lib/stores/files.js
import { writable } from "svelte/store";

const skillsContent = `fn main() {
    let skills = vec![
        // Front-end technologies
        Skill::new("HTML/CSS/Tailwind", ProficiencyLevel::Intermediate),
        Skill::new("JavaScript", ProficiencyLevel::Intermediate),
        Skill::new("TypeScript", ProficiencyLevel::Beginner),
        Skill::new("Svelte", ProficiencyLevel::Beginner),
        Skill::new("Vue", ProficiencyLevel::Beginner),

        // Back-end and general-purpose languages
        Skill::new("Python", ProficiencyLevel::Intermediate),
        Skill::new("Java", ProficiencyLevel::Beginner),
        Skill::new("Rust", ProficiencyLevel::Beginner),
        Skill::new("Motoko", ProficiencyLevel::Intermediate),

        // Databases
        Skill::new("SQLite", ProficiencyLevel::Intermediate),
        Skill::new("PostgreSQL", ProficiencyLevel::Beginner),

        // DevOps and version control
        Skill::new("Git", ProficiencyLevel::Intermediate),
        Skill::new("Docker", ProficiencyLevel::Beginner),
        Skill::new("Terraform", ProficiencyLevel::Beginner),

        // Soft skills
        Skill::new("Problem-solving", ProficiencyLevel::Intermediate),
        Skill::new("Teamwork", ProficiencyLevel::Beginner),
        Skill::new("Communication", ProficiencyLevel::Beginner),
    ];

    for skill in skills {
        skill.display();
    }
}

enum ProficiencyLevel {
    Beginner,
    Intermediate,
    Advanced,
}

struct Skill {
    name: String,
    level: ProficiencyLevel,
}

impl Skill {
    fn new(name: &str, level: ProficiencyLevel) -> Self {
        Skill {
            name: String::from(name),
            level,
        }
    }

    fn display(&self) {
        println!("Skill: {}, Level: {:?}", self.name, self.level);
    }
}`;

const projectsContent = `struct Project {
    name: &'static str,
    url: &'static str,
    description: &'static str,
    role: &'static str,
    technologies: Vec<&'static str>,
    contributions: Vec<&'static str>,
}

fn main() {
    let projects = vec![
        Project {
            name: "DittoICP",
            url: "https://www.dittoicp.com",
            description: "A solo project developed
            using SvelteKit for the frontend and
            Rust for the backend, deployed on the
            Internet Computer Protocol (ICP).",
            role: "Full-stack Developer",
            technologies: vec![
                "JavaScript",
                "SvelteKit",
                "Rust",
                "Internet Computer Protocol (ICP)"
            ],
            contributions: vec![
                "Designed and implemented the
                full-stack architecture",
                "Developed the frontend using
                SvelteKit",
                "Created the backend using Rust",
                "Deployed and managed the
                application on ICP",
            ],
        },
        Project {
            name: "Windoge98",
            url: "https://desktop.windoge98.com / 
            https://github.com/SysLogica/windoge98-vue",
            description: "A collaborative project
            recreating a Windows 98-like desktop
            environment in the browser.",
            role: "Frontend Developer",
            technologies: vec!["TypeScript", "Vue.js"],
            contributions: vec![
                "Implemented desktop icons",
                "Developed boot screen and
                shutdown sequences",
                "Enhanced window handling
                functionality",
                "Made various UI tweaks and
                improvements",
            ],
        },
        Project {
            name: "Dogvertiser",
            url: "https://dogverts.windoge98.com/",
            description: "An extension of the
            Windoge98 project, allowing users to
            create and manage dog-themed
            advertisements.",
            role: "Full-stack Developer",
            technologies: vec!["TypeScript", "Sveltekit", "Motoko"],
            contributions: vec![
                "Implemented image cropping and
                zoom functionality for ad
                creation",
                "Improved user interface for
                intuitive ad creation workflow",
                "Developed backend logic in
                Motoko for efficient ad storage
                and retrieval",
                "Optimized memory management
                using Motoko's region-based
                system",
            ],
        },
    ];

    for project in projects {
        display_project(&project);
    }
}

fn display_project(project: &Project) {
    println!("Project: {}", project.name);
    println!("URL: {}", project.url);
    println!("Description: {}", project.description);
    println!("Role: {}", project.role);
    println!("Technologies:");
    for tech in &project.technologies {
        println!("  - {}", tech);
    }
    println!("Contributions:");
    for contribution in &project.contributions {
        println!("  - {}", contribution);
    }
    println!();
}`;

const contactContent = `fn main() {
    let contact = ContactInfo::new();
    contact.display();
}

struct ContactInfo {
    email: String,
    location: String,
    github: String,
}

impl ContactInfo {
    fn new() -> Self {
        ContactInfo {
            email: String::from("caner1kocak1@gmail.com"),
            location: String::from("Enschede, The Netherlands"),
            github: String::from("https://github.com/CanerKocak"),
        }
    }

    fn display(&self) {
        println!("Email: {}", self.email);
        println!("Location: {}", self.location);
        println!("GitHub: {}", self.github);
    }
}`;

export const files = writable({
  "about.rs": aboutContent,
  "skills.rs": skillsContent,
  "projects.rs": projectsContent,
  "contact.rs": contactContent,
});

