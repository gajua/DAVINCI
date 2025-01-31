import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface ShopCardProps {
  name: string;
  description: string;
  location: string;
  imageUrl: string;
  thumbnail: string;
  rating: number;
}

export function ShopCard({
  name,
  description,
  location,
  imageUrl,
  thumbnail,
  rating,
}: ShopCardProps) {
  return (
    <Card className="h-full overflow-hidden border-davinci-lightBlue bg-davinci-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-40 w-full">
        <Image
          src={imageUrl || '/placeholder.svg'}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-2 left-2 h-10 w-10">
          <Image
            src={thumbnail || '/placeholder.svg'}
            alt={`${name} thumbnail`}
            layout="fill"
            objectFit="cover"
            className="rounded-full border-2 border-davinci-text"
          />
        </div>
      </div>
      <CardHeader className="bg-davinci-lightBlue p-3">
        <CardTitle className="font-heading text-lg text-davinci-text">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-davinci-blue p-3 text-davinci-text">
        <p className="mb-1 text-xs">{description}</p>
        <p className="mb-1 text-xs font-semibold text-davinci-accent">
          {location}
        </p>
        <div className="flex items-center">
          <Star className="mr-1 h-3 w-3 fill-davinci-accent text-davinci-accent" />
          <span className="text-xs font-semibold">{rating.toFixed(1)}</span>
        </div>
      </CardContent>
    </Card>
  );
}
