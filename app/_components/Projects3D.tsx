import Project3D from "./Project3D";
import projects from "@/data/projects.json";

export default function Projects3D() {
  const filteredProjects = projects.filter((project) => project.type === "3d");

  return (
    <div className="mt-4">
      {filteredProjects.map((project) => (
        <Project3D key={project.id} project={project} />
      ))}
    </div>
  );
}
