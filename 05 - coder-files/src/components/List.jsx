export default function List({ array }) {
  return (
    <ul className="text-center">
      {array.map((item) => (
        <li className="py-3 border px-10 hover:bg-neutral-100">{item}</li>
      ))}
    </ul>
  );
}
