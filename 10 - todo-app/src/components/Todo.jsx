import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ id, checked, text, onToggleComplete }) {
  return (
    <div className="flex items-center gap-2 bg-[#414166] p-3 rounded-md">
      <span
        className="h-5 w-5 bg-white rounded-full grid place-content-center cursor-pointer"
        onClick={() => onToggleComplete(id)}
      >
        {checked && (
          <FontAwesomeIcon icon={faCheck} className="h-4 text-black" />
        )}
      </span>
      <p className="flex-1">{text}</p>
      <FontAwesomeIcon
        icon={faTrash}
        className="h-4 cursor-pointer hover:text-red-400 transition"
      />
    </div>
  );
}
