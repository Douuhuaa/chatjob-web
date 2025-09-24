import SidePanel from "@/components/side-panel";

interface LayoutProps {
    children: React.ReactNode;
}

export default function QuestionLayout(props: LayoutProps) {
    return (
        <div className="flex h-full">
            <SidePanel />
            <div className="flex flex-1 justify-center p-24">{props.children}</div>
        </div>
    );
}
