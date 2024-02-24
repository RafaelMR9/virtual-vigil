import { MdOutlineClose } from "react-icons/md"
import { ImCheckboxChecked } from "react-icons/im"

export default function HamburgerMenu({ isOpen, setIsOpen, text }) {

    return (
        <div className={`flex justify-between items-center gap-8 shadow-xl rounded-lg bg-gray-800 fixed bottom-[10px] left-[10px] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity duration-500 ease-in-out z-[9999] px-6 py-4`}>
            <div className="flex items-center gap-2">
                <ImCheckboxChecked className="text-green-500"/>
                <p>{text}</p>
            </div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full text-white hover:bg-gray-600 p-1"
            >
                <MdOutlineClose size={20}/>
            </button>
        </div>
    )
}
