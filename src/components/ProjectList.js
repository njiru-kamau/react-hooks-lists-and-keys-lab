function ProjectList({ projects }) {
  console.log(projects);
  const oneProject = projects.map((project)=>{
    return(
     <ProjectList key={project.id} name={project.name} about={project.about} technologies={project.technologies}></ProjectList>
    )
  }) 
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      
        { oneProject}
        </div>
    </div>
  );
}
