import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export function Footer() {
  return (
    <div>
      <h1 className="text-center mb-8 mt-8">Developed by Agustin Nazer</h1>
      <ul className="flex justify-center gap-3">
      <li>
        <a href="https://www.linkedin.com/in/agust%C3%ADnnazer/" target="_blank" className="text-red-500 text-lg">
          <FaLinkedinIn />
        </a>
      </li>
      <li>
        <a href="https://github.com/AgusNazer" target="_blank" className="text-green-500 text-xl">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="https://porfolio-agus-nazer.netlify.app/" target="_blank" className="text-blue-500 text-base">
          <FaCode />
        </a>
      </li>
    </ul>
    </div>
  );
}
