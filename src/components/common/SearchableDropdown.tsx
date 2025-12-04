// components/SearchableDropdown.jsx
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';

export default function SearchableDropdown({
    options,
    placeholder = "Select an option",
    onChange,
    value,
    label,
    className = "",
}: any) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Find the currently selected option
    const selectedOption = options.find((option: any) => option.value === value);

    // Filter options based on search term
    const filteredOptions = options.filter((option: any) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle click outside to close dropdown
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (dropdownRef.current && !(dropdownRef.current?.contains(event.target))) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Handle selecting an option
    const handleSelect = (option: any) => {
        onChange(option.value);
        setIsOpen(false);
        setSearchTerm('');
    };

    // Clear selection
    const handleClear = (e: any) => {
        e.stopPropagation();
        onChange(null);
        setSearchTerm('');
    };

    return (
        <div className={`relative flex flex-row ${className}`} ref={dropdownRef}>
            {/* {label && (
                <label className="flex flex-1 block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )} */}

            {/* Dropdown trigger button */}
            <div
                className="flex flex-1 items-center justify-between w-fit px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={selectedOption ? "text-gray-900" : "text-gray-500"}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <div className="flex items-center">
                    {selectedOption && (
                        <button
                            type="button"
                            onClick={handleClear}
                            className="p-1 mr-1 text-gray-400 hover:text-gray-600"
                        >
                            <X size={16} />
                        </button>
                    )}
                    <ChevronDown
                        size={20}
                        className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </div>
            </div>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {/* Search input */}
                    <div className="relative px-3 py-2 border-b border-gray-200">
                        <Search size={16} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            className="w-full pl-8 pr-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search options..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>

                    {/* Options list */}
                    <ul className="max-h-60 overflow-auto py-1">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option: any) => (
                                <li
                                    key={option.value}
                                    className={`px-3 py-2 text-sm cursor-pointer hover:bg-blue-50 ${option.value === value ? 'bg-blue-100' : ''
                                        }`}
                                    onClick={() => handleSelect(option)}
                                >
                                    {option.label}
                                </li>
                            ))
                        ) : (
                            <li className="px-3 py-2 text-sm text-gray-500">No options found</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}


// <SearchableDropdown
// options={options}
// placeholder="Select a fruit..."
// value={selectedValue}
// onChange={setSelectedValue}
// label="Favorite Fruit"
// className="mb-4 w-[200px]"
// />

// const [selectedValue, setSelectedValue] = useState(null);

// const options = [
//     { value: 'apple', label: 'Apple' },
//     { value: 'banana', label: 'Banana' },
//     { value: 'cherry', label: 'Cherry' },
//     { value: 'durian', label: 'Durian' },
//     { value: 'elderberry', label: 'Elderberry' },
//     // Add more options as needed
// ];