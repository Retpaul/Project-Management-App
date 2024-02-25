import React from "react";
import noProjects from "../assets/no-projects.png";
import Button from "./Button";



export default function showBoard({onAddproject}) {
  return (
    <section className="mt-24 text-center w-2/3">
      <img
        src={noProjects}
        alt="task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4 capitalize">
        no project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>

      <p className="mt-8">
        <Button onClick={onAddproject}>
        Create A New Project
        </Button>
      </p>
    </section>
  );
}
