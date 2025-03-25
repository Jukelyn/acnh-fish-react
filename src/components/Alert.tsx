import { ReactNode } from "react";

interface Props {
  type?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  dismissable?: "" | "alert-dismissible";
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ type = "primary", dismissable, children, onClose }: Props) => {
  return (
    <div className={"alert alert-" + type + " " + dismissable + " fade show"}>
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
