import Image from "next/image"
import { Card } from "@/components/ui/card"

interface ArticleCardProps {
  title: string
  excerpt: string
  imageUrl: string
}

export function ArticleCard({ title, excerpt, imageUrl }: ArticleCardProps) {
  return (
    <Card className="relative overflow-hidden h-64 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-davinci-lightBlue group">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-all duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-davinci-darkBlue to-transparent transition-all duration-300 group-hover:from-davinci-blue" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="font-heading text-2xl font-bold text-davinci-text mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          {title}
        </h3>
        <p className="text-sm text-davinci-text line-clamp-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">{excerpt}</p>
      </div>
    </Card>
  )
}

