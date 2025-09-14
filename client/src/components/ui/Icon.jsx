export default function Icon({ children, className = "w-5 h-5" }) {
    return <span className={`inline-block ${className}`}>{children}</span>;
}