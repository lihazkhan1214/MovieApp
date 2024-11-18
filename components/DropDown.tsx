'use client';
import { useState } from 'react';
import Image from 'next/image';

const LanguageSelect = () => {
  const [selectedLang, setSelectedLang] = useState<string>('en');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const languages = [
    { code: 'en', name: 'English', flag: './us.svg' },
    { code: 'sr', name: 'Serbian', flag: './sr.svg' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (code: string) => {
    setSelectedLang(code);
    setIsOpen(false);
  };

  return (
    <div className="relative text-left ">
      {/* Button */}
      <button
        onClick={toggleDropdown}
        className="bg-white/60 rounded-md p-2 flex items-center border border-black"
        type="button"
      >
        <Image
          src={languages.find(lang => lang.code === selectedLang)?.flag || ''}
          alt={selectedLang === 'en' ? 'English' : 'Serbian'}
          width={20}
          height={20}
          className="mr-2"
        />
        {selectedLang === 'en' ? 'English' : 'Serbian'}
        <svg
          className="ml-2 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 mt-1 w-full rounded-md bg-white shadow-lg">
          <ul className="py-1 text-sm text-gray-700 ">
            {languages.map(lang => (
              <li
                key={lang.code}
                className="cursor-pointer flex items-center p-2 hover:bg-gray-200 h-100"
                onClick={() => selectLanguage(lang.code)}
              >
                <Image src={lang.flag} alt={lang.name} width={20} height={20} className="mr-2" />
                {lang.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
