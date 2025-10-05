"use client";

import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useEffect, use } from "react";

import Button from "@/components/button";
import { MOCK_EXPERIENCES, type Experience } from "@/constants/mock-experiences";

import SortIcon from "/components/icons/sort.svg";

const PAGE_SIZE = 8;

export default function ExperienceListPage() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;

    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [list, setList] = useState<Experience[]>([]);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        // TODO: call API
        setExperiences(MOCK_EXPERIENCES);
    }, []);

    useEffect(() => {
        const total = Math.ceil(experiences.length / PAGE_SIZE);
        const list = experiences.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

        setTotalPage(total);
        setList(list);
    }, [currentPage, experiences]);

    const handlePrevPage = () => {
        const prevPage = currentPage > 1 ? currentPage - 1 : 1;
        router.push(`${pathname}?page=${prevPage}`);
    };

    const handleNextPage = () => {
        const nextPage = currentPage < totalPage ? currentPage + 1 : totalPage;
        router.push(`${pathname}?page=${nextPage}`);
    };

    return (
        <div className="flex w-[704px] flex-col justify-between py-24">
            <div className="mb-10 flex flex-col gap-5 text-center">
                <h1 className="text-3xl font-medium text-gray-800">你已分享的面試心得</h1>
                <p className="whitespace-pre-line text-sm text-gray-400">
                    這裡顯示您過去分享的面試經驗，只有您自己看得到。
                    <br />
                    這些內容會由 ChatJOB 記錄並整理，幫助未來使用者快速獲得面試資訊。
                </p>
            </div>

            <div className="flex-1">
                <div className="flex h-full flex-col justify-between">
                    <div>
                        <div className="mb-2 grid grid-cols-4 text-center font-semibold text-teal-500">
                            <p>公司</p>
                            <p>職務</p>
                            <span className="flex items-center justify-center gap-1">
                                <p>面試時間</p>
                                <SortIcon className="h-4 w-4" />
                            </span>
                            <span className="flex items-center justify-center gap-1">
                                <p>分享時間</p>
                                <SortIcon className="h-4 w-4" />
                            </span>
                        </div>

                        {list.map((item) => (
                            <Link
                                key={item.id}
                                href={`/experience/list/${item.id}`}
                                className="grid cursor-pointer grid-cols-4 border-b border-gray-300 py-3 text-center text-sm text-gray-600 hover:text-teal-400"
                            >
                                <p>{item.company}</p>
                                <p>{item.position}</p>
                                <p>{item.date}</p>
                                <p>{item.createdAt}</p>
                            </Link>
                        ))}
                    </div>

                    {totalPage > 1 && (
                        <div className="flex w-full justify-end gap-2">
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={handlePrevPage}
                                disabled={currentPage == 1}
                            >
                                上一頁
                            </Button>
                            <Button type="button" onClick={handleNextPage} disabled={currentPage == totalPage}>
                                下一頁
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
