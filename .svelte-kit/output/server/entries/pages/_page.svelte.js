import { n as noop, c as create_ssr_component, a as subscribe, e as escape, b as each, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map(
      (_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i])
    );
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const ProjectTree_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "div.svelte-1qg3yn{user-select:none}",
  map: null
};
const ProjectTree = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedFile, $$unsubscribe_selectedFile;
  let { files: files2 } = $$props;
  let { selectedFile } = $$props;
  $$unsubscribe_selectedFile = subscribe(selectedFile, (value) => $selectedFile = value);
  if ($$props.files === void 0 && $$bindings.files && files2 !== void 0)
    $$bindings.files(files2);
  if ($$props.selectedFile === void 0 && $$bindings.selectedFile && selectedFile !== void 0)
    $$bindings.selectedFile(selectedFile);
  $$result.css.add(css$2);
  $$unsubscribe_selectedFile();
  return `<div class="p-4 text-gray-300 svelte-1qg3yn"><div class="flex items-center cursor-pointer svelte-1qg3yn"><span class="mr-1">${escape("▼")}</span> <span class="mr-1" data-svelte-h="svelte-1nnykak">📁</span> <span data-svelte-h="svelte-exw0ow">src</span></div> ${`<div class="ml-4 mt-2 svelte-1qg3yn">${each(Object.keys(files2), (file) => {
    return `<div class="${"flex items-center cursor-pointer py-1 px-2 rounded " + escape(
      $selectedFile === file ? "bg-white text-black font-bold" : "text-gray-300 hover:bg-gray-700",
      true
    ) + " svelte-1qg3yn"}"><span class="mr-1" data-svelte-h="svelte-1avpx1l">📄</span> <span>${escape(file)}</span> </div>`;
  })}</div>`} </div>`;
});
const CodeEditor_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".editor-container.svelte-7i8nmn{height:100%;overflow:auto}.cm-editor{height:100%;font-family:'Fira Code', monospace;font-size:14px}.cm-scroller{overflow:auto;max-height:100%}.editor-container.mobile.svelte-7i8nmn .cm-editor{font-size:12px}@media(max-width: 768px){.editor-container.svelte-7i8nmn{max-height:60vh}}",
  map: null
};
const CodeEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobile, $$unsubscribe_isMobile;
  let { content = "" } = $$props;
  let element;
  const isMobile = writable(false);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$result.css.add(css$1);
  $$unsubscribe_isMobile();
  return `<div class="${["editor-container svelte-7i8nmn", $isMobile ? "mobile" : ""].join(" ").trim()}"${add_attribute("this", element, 0)}></div>`;
});
const Terminal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let commandHistory = ["$ rustc --version", "rustc 1.57.0 (f1edd0429 2021-11-29)"];
  let currentCommand = "";
  return `<div class="text-green-400 p-4 h-full overflow-auto font-mono text-sm">${each(commandHistory, (command) => {
    return `<div>${escape(command)}</div>`;
  })} <div class="flex"><span data-svelte-h="svelte-1hr1xxw">$ </span> <input class="bg-transparent outline-none flex-grow" type="text"${add_attribute("value", currentCommand, 0)}></div></div>`;
});
const TopBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative"><div class="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-1 flex justify-between items-center w-full shadow-md"><div class="flex items-center space-x-4"><span class="ml-2.5 font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500" data-svelte-h="svelte-do2slr">CK</span> <button class="px-3 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors duration-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400" data-svelte-h="svelte-w0zpxn">CV</button></div> <div class="flex items-center" data-svelte-h="svelte-1w7do3u"><a href="https://github.com/CanerKocak/portfolio" target="_blank" rel="noopener noreferrer" class="mr-2.5 text-white hover:text-gray-300 transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></div></div> ${``}</div>`;
});
const Clock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
  return `<div class="fixed bottom-4 right-4 text-white bg-gray-800 p-2 rounded">${escape(currentTime)}</div>`;
});
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
const files = writable({
  "about.rs": aboutContent,
  "skills.rs": skillsContent,
  "projects.rs": projectsContent,
  "education.rs": educationContent,
  "contact.rs": contactContent
});
const app = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".ide-container.svelte-t6j41o{display:flex;flex-direction:column;height:100vh;width:100vw;overflow:hidden;background-color:#1e1e1e;color:#ffffff;font-family:'Fira Code', monospace}.ide-main.svelte-t6j41o{display:flex;flex:1;overflow:hidden}.project-tree.svelte-t6j41o{background-color:#252526;overflow-y:auto;border-right:1px solid #333333;resize:horizontal}.project-tree-resizer.svelte-t6j41o{width:5px;background-color:#333333;cursor:ew-resize}.code-area.svelte-t6j41o{display:flex;flex-direction:column;flex:1;overflow:hidden}.tabs.svelte-t6j41o{display:flex;background-color:#2d2d2d;border-bottom:1px solid #333333;overflow-x:auto}.tab.svelte-t6j41o{padding:8px 16px;background-color:#2d2d2d;border:none;color:#ffffff;cursor:pointer;transition:background-color 0.3s;white-space:nowrap}.tab.svelte-t6j41o:hover{background-color:#3c3c3c}.tab.active.svelte-t6j41o{background-color:#1e1e1e;border-bottom:2px solid #007acc}.editor.svelte-t6j41o{flex:1;overflow:hidden}.terminal-resizer.svelte-t6j41o{height:5px;background-color:#333333;cursor:ns-resize}.terminal.svelte-t6j41o{background-color:#1e1e1e;border-top:1px solid #333333;overflow:hidden}@media(max-width: 768px){.ide-main.svelte-t6j41o{flex-direction:column}.project-tree.svelte-t6j41o{width:100% !important;height:30vh;overflow-y:auto;resize:none}.code-area.svelte-t6j41o{height:70vh}.tabs.svelte-t6j41o{flex-wrap:wrap}.tab.svelte-t6j41o{flex-grow:1;text-align:center}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $projectTreeWidth, $$unsubscribe_projectTreeWidth;
  let $terminalHeight, $$unsubscribe_terminalHeight;
  let $files, $$unsubscribe_files;
  let $selectedFile, $$unsubscribe_selectedFile;
  let $isTerminalVisible, $$unsubscribe_isTerminalVisible;
  $$unsubscribe_files = subscribe(files, (value) => $files = value);
  const selectedFile = writable("about.rs");
  $$unsubscribe_selectedFile = subscribe(selectedFile, (value) => $selectedFile = value);
  let isTerminalVisible = writable(true);
  $$unsubscribe_isTerminalVisible = subscribe(isTerminalVisible, (value) => $isTerminalVisible = value);
  let terminalHeight = writable(200);
  $$unsubscribe_terminalHeight = subscribe(terminalHeight, (value) => $terminalHeight = value);
  let projectTreeWidth = spring(250);
  $$unsubscribe_projectTreeWidth = subscribe(projectTreeWidth, (value) => $projectTreeWidth = value);
  let isMobile = false;
  $$result.css.add(css);
  $$unsubscribe_projectTreeWidth();
  $$unsubscribe_terminalHeight();
  $$unsubscribe_files();
  $$unsubscribe_selectedFile();
  $$unsubscribe_isTerminalVisible();
  return `<div class="ide-container svelte-t6j41o">${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <div class="ide-main svelte-t6j41o"><div class="project-tree svelte-t6j41o" style="${"width: " + escape(`${$projectTreeWidth}px`, true) + ";"}">${validate_component(ProjectTree, "ProjectTree").$$render($$result, { files: $files, selectedFile }, {}, {})}</div> ${`<div class="project-tree-resizer svelte-t6j41o"></div>`} <div class="code-area svelte-t6j41o"><div class="tabs svelte-t6j41o">${each(Object.keys($files), (file) => {
    return `<button class="${"tab " + escape($selectedFile === file ? "active" : "", true) + " svelte-t6j41o"}">${escape(file)} </button>`;
  })}</div> <div class="editor svelte-t6j41o">${validate_component(CodeEditor, "CodeEditor").$$render(
    $$result,
    {
      content: $files[$selectedFile],
      language: "rust"
    },
    {},
    {}
  )}</div> ${$isTerminalVisible && !isMobile ? `<div class="terminal-resizer svelte-t6j41o"></div> <div class="terminal svelte-t6j41o" style="${"height: " + escape($terminalHeight, true) + "px;"}">${validate_component(Terminal, "Terminal").$$render($$result, {}, {}, {})}</div>` : ``}</div></div></div> ${validate_component(Clock, "Clock").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
