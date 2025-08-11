import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  title: string;
  content: string;
  image: StaticImageData;
  imageAlt: string;
  isReversed?: boolean;
  className?: string;
  fetchPriority?: "high" | "low" | "auto";
}

export default function ContentSection({
  title,
  content,
  image,
  imageAlt,
  isReversed = false,
  className,
  fetchPriority = "auto"
}: ContentSectionProps) {
  return (
    <section className={cn("py-16 md:py-20 lg:py-24", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
          "flex flex-col lg:flex-row items-center gap-8 lg:gap-12",
          isReversed ? "lg:flex-row-reverse" : ""
        )}>
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary leading-tight">
              {title}
            </h2>
            <div className="text-lg text-text leading-relaxed">
              {content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-1 w-full">
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fetchPriority={fetchPriority}
              />
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}
