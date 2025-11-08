function Section({ title, children, ...restOfTheProps }) {
    return (
        <section {...restOfTheProps}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Section;
