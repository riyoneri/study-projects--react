export default function Main() {
  return (
    <main className="px-5 sm:px-14 mt-10">
      <h3 className="font-bold text-xl sm:text-3xl dark:text-white text-black">
        Fun facts about React
      </h3>
      <ul className="ml-10 mt-5 space-y-3 list-disc marker:text-xl text-[#61DAFB] list-outside">
        <li>
          <span className="dark:text-white text-black">
            Was first released in 2013
          </span>
        </li>
        <li>
          <span className="dark:text-white text-black">
            Was originally created by Jordan Walke
          </span>
        </li>
        <li>
          <span className="dark:text-white text-black">
            Has well over 100K stars on GitHub
          </span>
        </li>
        <li>
          <span className="dark:text-white text-black">
            Is maintained by Facebook
          </span>
        </li>
        <li>
          <span className="dark:text-white text-black">
            Powers thousands of enterprise apps, including mobile apps
          </span>
        </li>
      </ul>
    </main>
  );
}
