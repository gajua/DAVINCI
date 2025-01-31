'use client';

import { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

// 임시 데이터 (실제로는 API에서 가져와야 합니다)
const allShops = [
  {
    id: 1,
    name: '레트로 빈티지',
    location: '서울시 강남구',
    thumbnail: '/placeholder.svg?height=50&width=50&text=RV',
  },
  {
    id: 2,
    name: '올드스쿨 가구점',
    location: '서울시 마포구',
    thumbnail: '/placeholder.svg?height=50&width=50&text=OF',
  },
  {
    id: 3,
    name: '앤티크 보물창고',
    location: '서울시 종로구',
    thumbnail: '/placeholder.svg?height=50&width=50&text=AT',
  },
  {
    id: 4,
    name: '빈티지 파라다이스',
    location: '서울시 용산구',
    thumbnail: '/placeholder.svg?height=50&width=50&text=VP',
  },
  {
    id: 5,
    name: '레트로 레코드',
    location: '서울시 마포구',
    thumbnail: '/placeholder.svg?height=50&width=50&text=RR',
  },
];

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<typeof allShops>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.length > 0) {
      const filteredResults = allShops.filter(
        (shop) =>
          shop.name.toLowerCase().includes(term.toLowerCase()) ||
          shop.location.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filteredResults);
      setIsDropdownVisible(true);
    } else {
      setSearchResults([]);
      setIsDropdownVisible(false);
    }
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <form className="flex gap-4" onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          placeholder="매장 이름 또는 위치로 검색"
          className="flex-grow bg-white text-davinci-darkBlue"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsDropdownVisible(true)}
        />
        <Button
          type="submit"
          className="bg-davinci-yellow hover:bg-davinci-yellow/90 text-davinci-darkBlue"
        >
          검색
        </Button>
      </form>
      {isDropdownVisible && searchResults.length > 0 && (
        <div className="absolute z-10 mt-2 w-full rounded-md border border-davinci-lightBlue bg-white shadow-lg">
          {searchResults.map((shop) => (
            <Link href={`/shop/${shop.id}`} key={shop.id}>
              <div className="flex cursor-pointer items-center p-3 hover:bg-davinci-lightBlue/10">
                <div className="relative mr-3 h-12 w-12 flex-shrink-0">
                  <Image
                    src={shop.thumbnail || '/placeholder.svg'}
                    alt={shop.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <div className="font-semibold text-davinci-darkBlue">
                    {shop.name}
                  </div>
                  <div className="text-sm text-davinci-blue">
                    {shop.location}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
