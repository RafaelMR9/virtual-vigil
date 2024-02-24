import { MdOutlineClose } from "react-icons/md"

export default function Modal({ isOpen, onClose, title, children }) {
    return (
        <div className={`fixed inset-0 flex justify-center items-center z-[9999] ${isOpen ? '' : 'hidden'} backdrop-brightness-50 px-5`}>
            <div className="fixed inset-0" onClick={onClose}></div>
            <div className="bg-gray-800 rounded-lg overflow-hidden p-6">
                <div className="flex justify-between items-center gap-32 mb-2 relative">
                    <h5 className="font-bold text-2xl">{title}</h5>
                    <button
                        onClick={() => onClose()}
                        className="rounded-full text-white hover:bg-gray-600 p-1"
                    >
                        <MdOutlineClose size={30}/>
                    </button>
                </div>
                <hr className="mb-6 relative" />
                <div className="relative">{children}</div>
            </div>
        </div>
    )
}