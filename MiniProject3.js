class Developer {
  #id;
  constructor(id, name, role) {
    this.#id = id;
    this.name = name;
    this.role = role;
  }

  introduce() {
    console.log(
      `\nHalo, nama saya ${this.name} dengan id developer : ${
        this.#id
      }, peran saya adalah ${this.role}.\nTugas saya adalah :`
    );
  }

  createUI() {
    console.log(
      "Membangun antarmuka pengguna pekerjaan dari frontend developer"
    );
  }

  createDb() {
    console.log(
      "Membangun dan mengelola database pekerjaan dari backend developer"
    );
  }

  createDesign() {
    console.log("Membuat desain user interface pekerjaan dari UI/UX designer");
  }
}

class FrontendDeveloper extends Developer {
  constructor(id, name, framework) {
    super(id, name, "Frontend Developer");
    this.framework = framework;
  }
  createUI() {
    console.log(
      `Membangun antarmuka pengguna dengan framework ${this.framework}`
    );
  }
  createAnimation() {
    console.log(`Menambahkan animasi ke halaman`);
  }
  createResponsiveDesign() {
    console.log(`Membuat desain responsif dengan framework ${this.framework}`);
  }
}

class BackendDeveloper extends Developer {
  constructor(id, name, database) {
    super(id, name, "Backend Developer");
    this.database = database;
  }
  createDb() {
    console.log(`Membangun dan mengelola database ${this.database}`);
  }
  manageAPI() {
    console.log("Mengelola API backend");
  }
  manageDb() {
    console.log(`Mengelola database ${this.database}`);
  }
}

class UiUxDesigner extends Developer {
  constructor(id, name, desigTool) {
    super(id, name, "UI/UX Designer");
    this.desigTool = desigTool;
  }
  createDesign() {
    console.log(`Membuat desain user interface di ${this.desigTool}`);
  }
  createWireframes() {
    console.log(`Membuat wireframes di ${this.desigTool}`);
  }
  createPrototype() {
    console.log(`Membuat prototype user interface di ${this.desigTool}`);
  }
}

class Project {
  constructor(developer) {
    this.developer = developer;
  }

  build() {
    if (this.developer instanceof FrontendDeveloper) {
      this.developer.introduce();
      this.developer.createUI();
      this.developer.createAnimation();
      this.developer.createResponsiveDesign();
    } else if (this.developer instanceof BackendDeveloper) {
      this.developer.introduce();
      this.developer.createDb();
      this.developer.manageAPI();
      this.developer.manageDb();
    } else if (this.developer instanceof UiUxDesigner) {
      this.developer.introduce();
      this.developer.createDesign();
      this.developer.createWireframes();
      this.developer.createPrototype();
    } else {
      this.developer.introduce();
      this.developer.createUI();
      this.developer.createDb();
      this.developer.createDesign();
    }
  }
}

const frontendDev = new FrontendDeveloper(1, "John Doe", "React");
const backendDev = new BackendDeveloper(2, "Jane Smith", "Prosgresql");
const uiUxDev = new UiUxDesigner(3, "Bob Johnson", "Figma");

const websiteProject = new Project(frontendDev);
const websiteProject2 = new Project(backendDev);
const websiteProject3 = new Project(uiUxDev);

websiteProject.build();
websiteProject2.build();
websiteProject3.build();
