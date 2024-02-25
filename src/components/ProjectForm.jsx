import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function ProjectForm({ onSaveProject,onCancel }) {
  const modal = useRef();

  const title = useRef();
  const desc = useRef();
  const dueDate = useRef();

  function handleSave() {
    const project = {
      title: title.current.value,
      description: desc.current.value,
      dueDate: dueDate.current.value,
    };

    if (
      project.title.trim() === "" ||
      project.description.trim() === "" ||
      project.dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onSaveProject(project);
  }
  return (
    <>
      <Modal ref={modal} buttonCaption='Close' >
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Please Ensure you input all necessary Information</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950"
            onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input label="title" type="text" ref={title} />
          <Input label="description" type="text" textarea ref={desc} />
          <Input label="due date" type="date" ref={dueDate} />
        </div>
      </div>
    </>
  );
}
