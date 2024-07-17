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
              name: String::from("Floppa McFlopperson"),
              title: String::from("Aspiring Flop Developer & Web3 Enthusiast"),
              summary: String::from("
                  Creative and ambitious flop development student at Flopschool Flaxion,
                  passionate about exploring new flopnologies, especially in flop3 and flopchain.

                  Experienced with modern flop technologies and eager to learn more about 
                  cutting-edge tools in the rapidly evolving flop landscape.

                  Enjoys pushing floundaries and contributing to innovative flopjects.
                  Particularly interested in smart contracts, Web3, and Internet Computer Protocol (ICP) development.
              ").trim_start(),
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
`;

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
            description: "A solo project developed using SvelteKit for the frontend and Rust for the backend, deployed on the Internet Computer Protocol (ICP).",
            role: "Full-stack Developer",
            technologies: vec!["JavaScript", "SvelteKit", "Rust", "Internet Computer Protocol (ICP)"],
            contributions: vec![
                "Designed and implemented the full-stack architecture",
                "Developed the frontend using SvelteKit",
                "Created the backend using Rust",
                "Deployed and managed the application on ICP",
            ],
        },
        Project {
            name: "Windoge98",
            url: "https://desktop.windoge98.com / https://github.com/SysLogica/windoge98-vue",
            description: "A collaborative project recreating a Windows 98-like desktop environment in the browser.",
            role: "Frontend Developer",
            technologies: vec!["TypeScript", "Vue.js"],
            contributions: vec![
                "Implemented desktop icons",
                "Developed boot screen and shutdown sequences",
                "Enhanced window handling functionality",
                "Made various UI tweaks and improvements",
            ],
        },
        Project {
            name: "Dogvertiser",
            url: "https://dogverts.windoge98.com/",
            description: "An extension of the Windoge98 project, allowing users to create and manage dog-themed advertisements.",
            role: "Full-stack Developer",
            technologies: vec!["TypeScript", "Sveltekit", "Motoko"],
            contributions: vec![
                "Implemented image cropping and zoom functionality for ad creation",
                "Improved user interface for intuitive ad creation workflow",
                "Developed backend logic in Motoko for efficient ad storage and retrieval",
                "Optimized memory management using Motoko's region-based system",
            ],
        },
    ];
}`;

const educationContent = `fn main() {
    let mut current_edu = Education::new("Flopschool Flaxion", "Ad Flop Development", "Sept 2021 - Feb 2025");
    current_edu.add_detail("Comprehensive study of flop development with focus on flop technologies and flopchain");
    current_edu.add_detail("Key courses: Flop Development, Flopbase Management, Flop Engineering, Flopchain Technology");
    current_edu.add_detail("Participating in flopathons and flop competitions");
    current_edu.display();

    let mut previous_edu = Education::new("The Flop Flopeum", "FLAVO", "Aug 2017 - May 2019");
    previous_edu.add_detail("Focus: Floponomics and Social Flops");
    previous_edu.add_detail("Participated in International Flop College program");
    previous_edu.add_detail("Completed Floplia business Flopglish course");
    previous_edu.display();
}

struct Education {
    institution: String,
    degree: String,
    duration: String,
    details: Vec<String>,
}`;

const contactContent = `fn main() {
    let contact = ContactInfo::new();
    contact.display();
}

struct ContactInfo {
    email: String,
    phone: String,
    location: String,
    github: String,
    linkedin: String,
}

impl ContactInfo {
    fn new() -> Self {
        ContactInfo {
            email: String::from("floppa@gmail.com"),
            phone: String::from("06-6969696969"),
            location: String::from("floppa street flop floppa, floppacity, flopterlands"),
            github: String::from("https://github.com/canerkocak"),
            linkedin: String::from("https://www.linkedin.com/in/floppamcflopperson"),
        }
    }

    fn display(&self) {
        println!("Email: {}", self.email);
        println!("Phone: {}", self.phone);
        println!("Location: {}", self.location);
        println!("GitHub: {}", self.github);
        println!("LinkedIn: {}", self.linkedin);
    }
}`;

export const files = writable({
  "about.rs": aboutContent,
  "skills.rs": skillsContent,
  "projects.rs": projectsContent,
  "education.rs": educationContent,
  "contact.rs": contactContent,
});
