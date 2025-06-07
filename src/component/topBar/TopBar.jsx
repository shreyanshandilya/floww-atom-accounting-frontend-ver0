import user from "/public/demo_data/user"
import { useNavigate } from "react-router-dom"


export default function TopBar() {
    const navigate = useNavigate()
    return (
        <header className="w-full border-b-[3px] border-[#0000001A] md:px-3 lg:px-6 xl:px-10 py-3 flex justify-between items-center">
            <button
                tabIndex={0}
                onClick={() => { navigate("/") }}
                className="md:text-base lg:text-lg xl:text-xl font-semibold text-black poppins">
                Atom Books Dashboard
            </button>

            <div className="flex items-center gap-3">
                <img
                    src={user.image} // replace with actual image path
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left poppins font-normal flex flex-col justify-between">
                    <p className="text-xs font-medium text-[#4A4A4A]">{user.name}</p>
                    <p className="text-xs text-[#8E8E8E]">{user.email}</p>
                </div>
            </div>
        </header>
    );
}
