// src/lib/stores/files.js
import { writable } from "svelte/store";

export const files = writable({
  "about.rs": `struct About {
    name: String,
    title: String,
    summary: String,
}

impl About {
    fn new() -> Self {
        About {
            name: String::from("Floppa McFlopperson"),
            title: String::from("Aspiring Flop Developer & Web3 Enthusiast"),
            summary: String::from("Creative and ambitious flop development student at Flopschool Flaxion, passionate about exploring new flopnologies, especially in flop3 and flopchain. Experienced with modern flop technologies and eager to learn more about cutting-edge tools in the rapidly evolving flop landscape. Enjoys pushing floundaries and contributing to innovative flopjects. Particularly interested in smart contracts, Web3, and Internet Computer Protocol (ICP) development."),
        }
    }

    fn display(&self) {
        println!("Name: {}", self.name);
        println!("Title: {}", self.title);
        println!("Summary: {}", self.summary);
    }
}

fn main() {
    let about = About::new();
    about.display();
}`,
  "experience.rs": `struct Experience {
    institution: String,
    role: String,
    duration: String,
    details: Vec<String>,
}

impl Experience {
    fn new(institution: &str, role: &str, duration: &str) -> Self {
        Experience {
            institution: String::from(institution),
            role: String::from(role),
            duration: String::from(duration),
            details: Vec::new(),
        }
    }

    fn add_detail(&mut self, detail: &str) {
        self.details.push(String::from(detail));
    }

    fn display(&self) {
        println!("Institution: {}", self.institution);
        println!("Role: {}", self.role);
        println!("Duration: {}", self.duration);
        println!("Details:");
        for detail in &self.details {
            println!("- {}", detail);
        }
    }
}

fn main() {
    let mut education = Experience::new("Flopschool Flaxion", "Ad Flop Development Student", "Sept 2021 - Feb 2025");
    education.add_detail("Comprehensive study of flop development with focus on flop technologies and modern flopping paradigms");
    education.add_detail("First-year subjects: Python, HTML, CSS, SQL, database design, Flask, SQLAlchemy, web security, OO design");
    education.add_detail("Advanced topics: Java, Android, Linux, shell scripting, Git, Docker, Terraform, CI/CD, networking");
    education.add_detail("Cutting-edge technologies: Rust, JavaScript, REST APIs, Svelte, Cypress, and open-source contribution");
    education.add_detail("Web3 and blockchain: Smart contracts, ICP canisters, dfx framework");
    education.display();

    let mut work_exp = Experience::new("Flop Mart", "Flop Stacker", "Juni 2017 - Okt 2018");
    work_exp.add_detail("Efficiently managed flopventory and maintained flop organization");
    work_exp.add_detail("Developed strong teamflop and customer flop skills");
    work_exp.display();
}`,
  "skills.rs": `use std::fmt;

enum ProficiencyLevel {
    Beginner,
    Intermediate,
    Advanced,
    Expert,
}

impl fmt::Display for ProficiencyLevel {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            ProficiencyLevel::Beginner => write!(f, "Beginner"),
            ProficiencyLevel::Intermediate => write!(f, "Intermediate"),
            ProficiencyLevel::Advanced => write!(f, "Advanced"),
            ProficiencyLevel::Expert => write!(f, "Expert"),
        }
    }
}

struct Skill {
    name: String,
    proficiency: ProficiencyLevel,
}

impl Skill {
    fn new(name: &str, proficiency: ProficiencyLevel) -> Self {
        Skill {
            name: String::from(name),
            proficiency,
        }
    }

    fn display(&self) {
        println!("Skill: {} - Proficiency: {}", self.name, self.proficiency);
    }
}

fn main() {
    let skills = vec![
        Skill::new("Web Development", ProficiencyLevel::Advanced),
        Skill::new("Python", ProficiencyLevel::Intermediate),
        Skill::new("JavaScript", ProficiencyLevel::Advanced),
        Skill::new("HTML/CSS", ProficiencyLevel::Advanced),
        Skill::new("Rust", ProficiencyLevel::Intermediate),
        Skill::new("SQL", ProficiencyLevel::Intermediate),
        Skill::new("Git", ProficiencyLevel::Advanced),
        Skill::new("Docker", ProficiencyLevel::Intermediate),
        Skill::new("Blockchain (ICP)", ProficiencyLevel::Intermediate),
        Skill::new("Svelte", ProficiencyLevel::Intermediate),
        Skill::new("REST APIs", ProficiencyLevel::Intermediate),
        Skill::new("Smart Contracts", ProficiencyLevel::Intermediate),
        Skill::new("Web3", ProficiencyLevel::Intermediate),
        Skill::new("ICP Canisters", ProficiencyLevel::Intermediate),
        Skill::new("DFX Framework", ProficiencyLevel::Intermediate),
        Skill::new("Graphic Design Basics", ProficiencyLevel::Intermediate),
        Skill::new("OO Design", ProficiencyLevel::Intermediate),
        Skill::new("Algorithms", ProficiencyLevel::Intermediate),
        Skill::new("Unit Testing", ProficiencyLevel::Intermediate),
        Skill::new("Java", ProficiencyLevel::Intermediate),
        Skill::new("Android Development", ProficiencyLevel::Beginner),
        Skill::new("Linux", ProficiencyLevel::Intermediate),
        Skill::new("Shell Scripting", ProficiencyLevel::Intermediate),
        Skill::new("Terraform", ProficiencyLevel::Beginner),
        Skill::new("CI/CD", ProficiencyLevel::Intermediate),
        Skill::new("Networking (IP/UDP/TCP)", ProficiencyLevel::Intermediate),
        Skill::new("Async I/O", ProficiencyLevel::Intermediate),
        Skill::new("Parsers", ProficiencyLevel::Beginner),
        Skill::new("Transpilers", ProficiencyLevel::Beginner),
        Skill::new("Assembler", ProficiencyLevel::Beginner),
        Skill::new("Memory Management", ProficiencyLevel::Intermediate),
        Skill::new("Reactive Programming", ProficiencyLevel::Intermediate),
        Skill::new("API Testing", ProficiencyLevel::Intermediate),
        Skill::new("End-to-End Testing", ProficiencyLevel::Intermediate),
        Skill::new("Progressive Web Apps", ProficiencyLevel::Intermediate),
    ];

    for skill in skills {
        skill.display();
    }
}`,
  "projects.rs": `struct Project {
    name: String,
    description: String,
    technologies: Vec<String>,
    github_link: Option<String>,
}

impl Project {
    fn new(name: &str, description: &str) -> Self {
        Project {
            name: String::from(name),
            description: String::from(description),
            technologies: Vec::new(),
            github_link: None,
        }
    }

    fn add_technology(&mut self, technology: &str) {
        self.technologies.push(String::from(technology));
    }

    fn set_github_link(&mut self, link: &str) {
        self.github_link = Some(String::from(link));
    }

    fn display(&self) {
        println!("Project: {}", self.name);
        println!("Description: {}", self.description);
        println!("Technologies: {}", self.technologies.join(", "));
        if let Some(link) = &self.github_link {
            println!("GitHub: {}", link);
        }
    }
}

fn main() {
    let mut project1 = Project::new("Personal Portfolio", "Interactive portfolio website showcasing projects and skills");
    project1.add_technology("Svelte");
    project1.add_technology("TypeScript");
    project1.add_technology("TailwindCSS");
    project1.set_github_link("https://github.com/floppamcflopperson/portfolio");
    project1.display();

    let mut project2 = Project::new("Blockchain Explorer", "Web application to explore and analyze blockchain transactions");
    project2.add_technology("React");
    project2.add_technology("Node.js");
    project2.add_technology("Express");
    project2.add_technology("MongoDB");
    project2.set_github_link("https://github.com/floppamcflopperson/blockchain-explorer");
    project2.display();

    let mut project3 = Project::new("Task Management CLI", "Command-line interface for managing tasks and projects");
    project3.add_technology("Rust");
    project3.add_technology("SQLite");
    project3.set_github_link("https://github.com/floppamcflopperson/task-cli");
    project3.display();

    let mut project4 = Project::new("Windoge98", "Nostalgic Windows 98 inspired web experience");
    project4.add_technology("HTML");
    project4.add_technology("CSS");
    project4.add_technology("JavaScript");
    project4.set_github_link("https://github.com/floppamcflopperson/windoge98");
    project4.display();

    let mut project5 = Project::new("Ditto-ICE", "Blockchain-based digital identity solution");
    project5.add_technology("Internet Computer Protocol");
    project5.add_technology("Motoko");
    project5.add_technology("React");
    project5.set_github_link("https://github.com/floppamcflopperson/ditto-ice");
    project5.display();
}`,
  "education.rs": `struct Education {
    institution: String,
    degree: String,
    duration: String,
    details: Vec<String>,
}

impl Education {
    fn new(institution: &str, degree: &str, duration: &str) -> Self {
        Education {
            institution: String::from(institution),
            degree: String::from(degree),
            duration: String::from(duration),
            details: Vec::new(),
        }
    }

    fn add_detail(&mut self, detail: &str) {
        self.details.push(String::from(detail));
    }

    fn display(&self) {
        println!("Institution: {}", self.institution);
        println!("Degree: {}", self.degree);
        println!("Duration: {}", self.duration);
        println!("Details:");
        for detail in &self.details {
            println!("- {}", detail);
        }
    }
}

fn main() {
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
}`,
  "contact.rs": `struct ContactInfo {
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
            github: String::from("https://github.com/floppamcflopperson"),
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
}

fn main() {
    let contact = ContactInfo::new();
    contact.display();
}`,
});
