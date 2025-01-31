'use client';

import { useState } from 'react';
import { Header } from '../../components/Header';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// 임시 데이터 (실제로는 API나 데이터베이스에서 가져와야 합니다)
const shopData = {
  id: 1,
  name: '레트로 빈티지',
  description:
    '60년대 스타일의 빈티지 의류를 전문으로 취급하는 매장입니다. 독특하고 스타일리시한 의류들을 만나보세요.',
  location: '서울시 강남구 압구정로 123',
  images: [
    '/placeholder.svg?height=400&width=600&text=Image+1',
    '/placeholder.svg?height=400&width=600&text=Image+2',
    '/placeholder.svg?height=400&width=600&text=Image+3',
    '/placeholder.svg?height=400&width=600&text=Image+4',
    '/placeholder.svg?height=400&width=600&text=Image+5',
  ],
  thumbnail: '/placeholder.svg?height=50&width=50&text=RV',
  rating: 4.5,
  reviews: [
    {
      id: 1,
      user: '김철수',
      content: '정말 좋은 빈티지 아이템들이 많아요!',
      rating: 5,
    },
    {
      id: 2,
      user: '이영희',
      content: '가격이 조금 있지만 품질이 좋습니다.',
      rating: 4,
    },
  ],
};

export default function ShopDetail({ params }: { params: { id: string } }) {
  const [shop] = useState(shopData); // 실제로는 ID를 기반으로 데이터를 가져와야 합니다
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === shop.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? shop.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-davinci-darkBlue text-white">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="overflow-hidden rounded-lg bg-white text-davinci-darkBlue shadow-xl">
          {/* 이미지 갤러리 */}
          <div className="relative h-96 w-full">
            <Image
              src={shop.images[currentImageIndex] || '/placeholder.svg'}
              alt={`${shop.name} - 이미지 ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
            />
            <Button
              variant="ghost"
              className="absolute left-2 top-1/2 -translate-y-1/2 transform bg-white/50 hover:bg-white/75"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              className="absolute right-2 top-1/2 -translate-y-1/2 transform bg-white/50 hover:bg-white/75"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* 썸네일 목록 */}
          <div className="flex space-x-2 overflow-x-auto p-4">
            {shop.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 ${index === currentImageIndex ? 'ring-davinci-yellow ring-2' : ''}`}
              >
                <Image
                  src={image || '/placeholder.svg'}
                  alt={`${shop.name} - 썸네일 ${index + 1}`}
                  width={80}
                  height={80}
                  objectFit="cover"
                />
              </button>
            ))}
          </div>

          <div className="p-6">
            <div className="mb-4 flex items-center">
              <h1 className="mr-4 font-heading text-3xl font-bold">
                {shop.name}
              </h1>
              <div className="relative h-12 w-12">
                <Image
                  src={shop.thumbnail || '/placeholder.svg'}
                  alt={`${shop.name} thumbnail`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <Star className="fill-davinci-yellow text-davinci-yellow mr-1 h-5 w-5" />
              <span className="text-lg font-semibold">
                {shop.rating.toFixed(1)}
              </span>
            </div>
            <p className="mb-4 text-lg">{shop.description}</p>
            <p className="mb-6 font-semibold text-davinci-blue">
              {shop.location}
            </p>

            <h2 className="mb-4 font-heading text-2xl font-bold">후기</h2>
            <div className="space-y-4">
              {shop.reviews.map((review) => (
                <div key={review.id} className="border-t pt-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-semibold">{review.user}</span>
                    <div className="flex items-center">
                      <Star className="fill-davinci-yellow text-davinci-yellow mr-1 h-4 w-4" />
                      <span>{review.rating}</span>
                    </div>
                  </div>
                  <p>{review.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
