import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

interface ShopCardProps {
  name: string
  description: string
  location: string
  imageUrl: string
  thumbnail: string
  rating: number
}

export function ShopCard({ name, description, location, imageUrl, thumbnail, rating }: ShopCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-davinci-lightBlue h-full bg-davinci-blue">
      <div className="relative h-40 w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover" />
        <div className="absolute bottom-2 left-2 w-10 h-10">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={`${name} thumbnail`}
            layout="fill"
            objectFit="cover"
            className="rounded-full border-2 border-davinci-text"
          />
        </div>
      </div>
      <CardHeader className="bg-davinci-lightBlue p-3">
        <CardTitle className="font-heading text-lg text-davinci-text">{name}</CardTitle>
      </CardHeader>
      <CardContent className="bg-davinci-blue text-davinci-text p-3">
        <p className="text-xs mb-1">{description}</p>
        <p className="text-xs text-davinci-accent font-semibold mb-1">{location}</p>
        <div className="flex items-center">
          <Star className="w-3 h-3 fill-davinci-accent text-davinci-accent mr-1" />
          <span className="text-xs font-semibold">{rating.toFixed(1)}</span>
        </div>
      </CardContent>
    </Card>
  )
}

