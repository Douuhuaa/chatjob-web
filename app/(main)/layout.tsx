import UserMenu from "./_components/user-menu";

interface Props {
    children: React.ReactNode;
    sidepanel: React.ReactNode;
}

export default function MainLayout({ sidepanel, children }: Props) {
    return (
        <>
            <div className="flex h-full w-[260px] flex-col justify-between rounded-2xl bg-white shadow-lg">
                {sidepanel}
                <UserMenu />
            </div>

            <div className="flex flex-1 justify-center">{children}</div>
        </>
    );
}
