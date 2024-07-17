// src/lib/stores/files.js
import { writable } from "svelte/store";

const aboutContent = `fn main() {
    let about = About::new();
    about.display();
}

struct About {
    name: String,
    title: String,
    summary: String,
}

impl About {
    fn new() -> Self {
        About {
            name: String::from("Caner Kocak"),
            title: String::from("Aspiring Developer & Tech Enthusiast"),
            summary: String::from("
                Hi, coding is what I enjoy, and
                coding is what I want to do. I
                don't think there is a single
                thing in this world that could
                replace what coding is to me.
                
                I'm currently 23 years old and
                have started to learn coding
                about 3 years ago. But before
                pursuing a career as a
                programmer, I already had some
                hands-on knowledge from
                creating/configuring simple
                Minecraft servers or making
                small, easy scripts to automate
                in-game tasks so I could level
                up while I was away.
                
                Years later, when I didn't know
                what kind of career I wanted, I
                found an associate degree in
                software development after first
                trying to study technical
                business and law, and I found my
                place.
                
                Currently, I'm trying to build
                cool Web3 dApps on the Internet
                Computer protocol, which is an
                interesting blockchain where you
                can host websites. It kind of
                becomes a serverless
                infrastructure that scales
                itself, which I find
                fascinating.

                Furthermore, like the usual
                programmer, I have lots of side
                projects that are not finished,
                but what I do notice is that the
                value of a side project doesn't
                necessarily come from finishing
                it, rather just having fun and
                gaining hands-on experience.
                
                Hobby-wise, it's pretty much
                just coding projects or watching
                some series. I don't really have
                a genre, but I enjoyed Silo,
                From, Lost, West-world, Dr.
                House, Big Bang Theory, etc.
                Music-wise, it's either
                classical or ambient or
                hardcore, no in-between.
            ").trim(),
        }
    }

    fn display(&self) {
        println!("Name: {}", self.name);
        println!("Title: {}", self.title);
        println!("Summary: {}", self.summary);
    }
}`;

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

