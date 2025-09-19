import SidePanel from "@/components/side-panel";
import UserMenu from "@/components/user-menu";

interface LayoutProps {
    children: React.ReactNode;
}

export default function ExperienceLayout(props: LayoutProps) {
    return (
        <div className="flex h-full">
            <div className="flex h-full w-[260px] flex-col rounded-2xl bg-white shadow-lg">
                <SidePanel />
                <UserMenu />
            </div>

            <div className="flex flex-1">{props.children}</div>
        </div>
    );
}
