interface LayoutProps {
    children: React.ReactNode;
}

export default function ExperienceLayout(props: LayoutProps) {
    return <div className="flex">{props.children}</div>;
}
