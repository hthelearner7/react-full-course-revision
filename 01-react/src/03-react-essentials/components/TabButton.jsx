export default function TabButton({ children, isSelected, ...props }) {
    // console.log({ props });
    // console.log({ children });

    return (
        <li>
            <button className={isSelected ? "active" : ""} {...props}>
                {children}
            </button>
        </li>
    );
}
