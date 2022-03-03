const Button = ({ children, onClick, type }: { children: any; onClick?: () => void; type?: "button" | "submit" | "reset" | undefined }) =>
    <button
        type={type}
        className={'py-2 px-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-red-700 text-white font-bold'}
        onClick={onClick}
    >
        {children}
    </button>

export default Button;