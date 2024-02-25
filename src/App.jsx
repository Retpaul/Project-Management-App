import { useState } from "react";
import ProjectForm from "./components/ProjectForm";
import SideBar from "./components/SideBar";
import Showboard from "./components/showBoard";
import Selectedproject from "./components/Selectedproject";

function App() {
  const [projectState, setProjectState] = useState({
    selectProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random() * 100;
      const newTask = {
        text: text,
        projectId: prevState.selectProjectId,
        id: taskId,
      };
      return {
        ...prevState,
      
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((prevState)=>{
      return{
        ...prevState,
        tasks:prevState.tasks.filter((task)=> task.id !== id)
      }
    })
  }

  function handleAddProject() {
    setProjectState((prevProjState) => {
      return {
        ...prevProjState,
        selectProjectId: null,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevProjState) => {
      return {
        ...prevProjState,
        selectProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevProjState) => {
      return {
        ...prevProjState,
        selectProjectId: undefined,
        projects: prevProjState.projects.filter(
          (project) => project.id !== prevProjState.selectProjectId
        ),
      };
    });
  }

  function handleProjectSave(projInfo) {
    const newProject = {
      ...projInfo,
      id: Math.random() * 100,
    };
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancel() {
    setProjectState((prevState) => {
      return { ...prevState, selectProjectId: undefined };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectProjectId
  );

  let content = (
    <Selectedproject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectProjectId === null) {
    content = (
      <ProjectForm onSaveProject={handleProjectSave} onCancel={handleCancel} />
    );
  } else if (projectState.selectProjectId === undefined) {
    content = <Showboard onAddproject={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onAddproject={handleAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
      />

      {content}
    </main>
  );
}

export default App;
