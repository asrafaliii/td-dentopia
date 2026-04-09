const cn = (...classes) => classes.filter(Boolean).join(" ");

const Button = ({
    label = "Click Me",
    onClick,
    icon: Icon,
    variant = "primary",
    className = "",
}) => {

    const baseStyles =
        "inline-flex items-center justify-center px-6 py-2 rounded-xl font-semibold transition-all cursor-pointer";

    const variants = {
        primary: "bg-primary text-white hover:bg-secondary",
        secondary: "bg-white text-primary hover:bg-primary hover:text-white border border-primary",
        ghosts: "bg-transparent text-indigo-600 hover:bg-indigo-50",
    };

    return (
        <button
            onClick={onClick}
            className={cn(baseStyles, variants[variant], className)}
        >
            
            {Icon && <Icon className="mr-2 text-lg" />}
            {label}
        </button>
    )
}

export default Button

