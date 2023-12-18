import { Link } from "react-router-dom";

interface HeaderFormProps {
  title: string;
  text: string;
  pathname: string;
  linkText: string;
}

export function HeaderForm({ title, text, pathname, linkText }: HeaderFormProps) {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <h1 className="text-2xl font-bold tracking-[-1px] text-gray-900">{title}</h1>
      <p className="space-x-2">
        <span className="tracking-[-0.5px] text-gray-700">{text}</span>
        <Link
          to={pathname}
          className="font-medium tracking-[-0.5px] text-teal-900"
        >
          {linkText}
        </Link>
      </p>
    </header>
  );
}