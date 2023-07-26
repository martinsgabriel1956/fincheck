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
      <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">{title}</h1>
      <p className="space-x-2">
        <span className="text-gray-700 tracking-[-0.5px]">{text}</span>
        <Link
          to={pathname}
          className="text-teal-900 tracking-[-0.5px] font-medium"
        >
          {linkText}
        </Link>
      </p>
    </header>
  )
}