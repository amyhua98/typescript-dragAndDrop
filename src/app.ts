class ProjectInput {
  templateElement: HTMLTemplateElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project_input"
    )! as HTMLTemplateElement;
  }
}
