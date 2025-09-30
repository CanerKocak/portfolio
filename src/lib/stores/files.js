// src/lib/stores/files.js
import { writable } from "svelte/store";

const skillsContent = `fn main() {
    let skills = vec![
        // Front-end technologies
        Skill::new("HTML/CSS/Tailwind", ProficiencyLevel::Intermediate),
        Skill::new("JavaScript", ProficiencyLevel::Intermediate),
        Skill::new("TypeScript", ProficiencyLevel::Intermediate),
        Skill::new("Svelte", ProficiencyLevel::Intermediate),
        Skill::new("SvelteKit", ProficiencyLevel::Intermediate),
        Skill::new("Vue", ProficiencyLevel::Beginner),

        // Back-end and general-purpose languages
        Skill::new("Rust", ProficiencyLevel::Intermediate),
        Skill::new("Python", ProficiencyLevel::Intermediate),
        Skill::new("Motoko", ProficiencyLevel::Intermediate),
        Skill::new("Java", ProficiencyLevel::Beginner),

        // Blockchain & Web3
        Skill::new("Internet Computer Protocol", ProficiencyLevel::Intermediate),
        Skill::new("ICRC Standards", ProficiencyLevel::Intermediate),
        Skill::new("Chain-key Cryptography", ProficiencyLevel::Intermediate),
        Skill::new("Threshold Signatures", ProficiencyLevel::Intermediate),
        Skill::new("Solana SDK", ProficiencyLevel::Beginner),

        // Advanced Topics
        Skill::new("WebAssembly SIMD", ProficiencyLevel::Intermediate),
        Skill::new("AI Model Orchestration", ProficiencyLevel::Intermediate),
        Skill::new("WebSockets", ProficiencyLevel::Intermediate),
        Skill::new("Actix-web", ProficiencyLevel::Intermediate),

        // Databases
        Skill::new("SQLite", ProficiencyLevel::Intermediate),
        Skill::new("PostgreSQL", ProficiencyLevel::Beginner),

        // DevOps and version control
        Skill::new("Git", ProficiencyLevel::Intermediate),
        Skill::new("Docker", ProficiencyLevel::Beginner),

        // Integration
        Skill::new("Web2 API Integrations", ProficiencyLevel::Intermediate),

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
            name: "Kong DEX",
            url: "https://kongswap.io",
            description: "Extended transaction
            verification and built Web2 integrations
            for production decentralized exchange
            with $5M+ TVL.",
            role: "Integration & Backend Developer",
            technologies: vec![
                "Rust",
                "TypeScript",
                "WebSockets",
                "Solana SDK",
                "ICRC Standards",
                "Chain-key Cryptography"
            ],
            contributions: vec![
                "Extended transaction verification
                on smart contract with $5M+ TVL",
                "Built initial backend to frontend
                for swaps, LP, and token management",
                "Built canister-to-Web2 API
                integrations: CoinMarketCap,
                CoinGecko, Token Terminal,
                DexTools, DexScreener",
                "Built Solana to ICP cross-chain
                bridge MVP using threshold Schnorr
                signatures - canister acts as hot
                wallet signing Solana transactions
                via chain-key cryptography",
            ],
        },
        Project {
            name: "Kong Launchpad",
            url: "https://github.com/CanerKocak",
            description: "L2 launcher factory for
            users to spin up their own proof-of-work
            tokens with dedicated mining canisters.",
            role: "Full-stack Developer",
            technologies: vec![
                "Rust",
                "WebAssembly SIMD",
                "ICP Canisters",
                "Stable Structures"
            ],
            contributions: vec![
                "Built L2 launcher factory - users
                can spin up their own proof-of-work
                tokens",
                "Users can mine any token they
                want with dedicated mining
                canisters",
                "Custom scalar hash optimized for
                WebAssembly using IC's SIMD vector
                instructions",
                "Token-gated hashing compute
                instead of cycles",
                "Multi-canister architecture
                (launchpad, miner, PoW backend
                per token)",
                "Secure payment validation with
                stable storage for hash allowances",
            ],
        },
        Project {
            name: "Ditto",
            url: "https://www.dittoicp.com",
            description: "AI-powered themed drawing
            platform with self-moderation using
            cascading AI models.",
            role: "Full-stack Developer",
            technologies: vec![
                "Rust",
                "SvelteKit",
                "Svelte 5",
                "AI Orchestration",
                "fabric.js",
                "three.js"
            ],
            contributions: vec![
                "Built themed drawing creation
                platform with multiple canvas
                engines",
                "Architected self-moderation
                system with cascading AI models
                (rotating for speed/quality
                balance)",
                "Integrated Professor Dom agent for
                drawing reviews and scoring",
                "AI-based scoring system with
                customizable length themes/contests",
                "Dungeon gameplay with AI-generated
                narratives",
                "DITTO token economy",
            ],
        },
        Project {
            name: "HTTPS Outcall Proxy",
            url: "https://github.com/CanerKocak",
            description: "External proxy server
            polling IC canisters and streaming AI
            responses from external APIs.",
            role: "Backend Developer",
            technologies: vec![
                "Rust",
                "Actix-web",
                "rustls",
                "WebSockets",
                "OpenRouter/Google AI APIs"
            ],
            contributions: vec![
                "Built external proxy polling IC
                canisters for pending AI requests",
                "Streams AI responses from external
                APIs back to canisters",
                "Batched update system reducing
                canister message congestion",
                "SSL/TLS with certificate
                management and caching",
                "Bridges IC canisters with external
                AI services",
            ],
        },
        Project {
            name: "Windoge98",
            url: "https://desktop.windoge98.com",
            description: "Collaborative project
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
            description: "Extension of the Windoge98
            project, allowing users to create and
            manage dog-themed advertisements.",
            role: "Full-stack Developer",
            technologies: vec!["TypeScript", "SvelteKit", "Motoko"],
            contributions: vec![
                "Implemented image cropping and
                zoom functionality for ad creation",
                "Improved user interface for
                intuitive ad creation workflow",
                "Developed backend logic in Motoko
                for efficient ad storage and
                retrieval",
                "Optimized memory management using
                Motoko's region-based system",
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
  "skills.rs": skillsContent,
  "projects.rs": projectsContent,
  "contact.rs": contactContent,
});

