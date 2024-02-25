import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(({ children,buttonCaption}, ref) => { // apart from props, ref is also another params of component function
  const dialog = useRef();
  useImperativeHandle(ref, () => {  // Use Imperative handle exposes functions that can be accesed from ref
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <button  className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
