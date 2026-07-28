"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative w-full">

      <svg
        className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          d="M21 21l-4.3-4.3m1.3-5.2a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar productos..."
        className="
          w-full
          rounded-2xl
          border
          border-white/20
          bg-white/15
          py-5
          pl-16
          pr-6
          text-lg
          text-white
          placeholder:text-white/60
          backdrop-blur-xl
          outline-none
          transition
          focus:border-white/40
        "
      />

    </div>
  );
}