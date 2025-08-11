'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FileText, Square, Download, CheckSquare,RotateCcw } from 'lucide-react';
import Link from 'next/link';

interface ChecklistItem {
    id: number;
    title: string;
    description: string;
}

interface Props {
    items: ChecklistItem[];
}

export default function Checklist({ items }: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [checked, setChecked] = useState<number[]>(() => {
        const saved = searchParams.get('checked');
        if (saved) {
        try {
            return JSON.parse(atob(saved));
        } catch {
            return [];
        }
        }
        return [];
    });

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.set('checked', btoa(JSON.stringify(checked)));
        router.replace(`/unterlagen?${params.toString()}`, { scroll: false });
    }, [checked, router, searchParams]);

    const toggleItem = (id: number) => {
        setChecked((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    const resetChecklist = () => {
        setChecked([]);
    };

    const progress = `${checked.length} / ${items.length} erledigt`;

    return (
        <>
            {/* Header with actions */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                <div className="flex items-start mb-4 md:items-center md:mb-0">
                    <FileText className="w-8 h-8 text-primary mr-3" />
                    <h2 className="text-2xl md:text-3xl font-bold text-text">
                    Benötigte Unterlagen Checkliste
                    </h2>
                </div>
                <div className="flex gap-2">
                    <Link
                    href="/unterlagen-checkliste.pdf"
                    download
                    className="inline-flex items-center px-4 py-2 bg-accent text-white font-medium rounded-lg transition-all duration-300 hover:bg-accent/90 shadow-md"
                    >
                        <Download className="w-4 h-4 mr-2" />
                        PDF Download
                    </Link>
                    {checked.length != 0&&
                    <button
                    onClick={resetChecklist}
                    className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 font-medium rounded-lg transition-all duration-300 hover:bg-red-200"
                    >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Zurücksetzen
                    </button>
                    }
                </div>
            </div>

            {/* Progress */}
            <p className="text-sm text-gray-500 mb-4">
                {progress}
            </p>

            {/* Checklist items */}
            <div id="checklist" className="w-full flex flex-col gap-4 md:gap-6">
                {items.map((doc) => {
                    const isChecked = checked.includes(doc.id);
                    return (
                    <div
                        key={doc.id}
                        onClick={() => toggleItem(doc.id)}
                        className={`cursor-pointer rounded-lg p-4 md:p-6 shadow-md transition-all duration-300 flex items-start gap-4 w-full ${
                        isChecked
                            ? 'bg-green-50 border border-green-200'
                            : 'bg-white hover:shadow-lg'
                        }`}
                    >
                        <div className="flex-shrink-0 mt-1">
                        {isChecked ? (
                            <CheckSquare className="w-6 h-6 text-green-600" />
                        ) : (
                            <Square className="w-6 h-6 text-primary" />
                        )}
                        </div>
                        <div className="flex-1 min-w-0">
                        <h3
                            className={`text-lg md:text-xl font-semibold text-text mb-2 ${
                            isChecked ? 'line-through text-gray-500' : ''
                            }`}
                        >
                            {doc.title}
                        </h3>
                        <p
                            className={`text-text/70 ${
                            isChecked ? 'line-through text-gray-400' : ''
                            }`}
                        >
                            {doc.description}
                        </p>
                        </div>
                    </div>
                    );
                })}
            </div>
    </>
  );
}