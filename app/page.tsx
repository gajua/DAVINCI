"use client"

import { useState } from "react"
import { Header } from "./components/Header"
import { ShopCard } from "./components/ShopCard"
import { SearchBar } from "./components/SearchBar"
import { ArticleCard } from "./components/ArticleCard"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

// 임시 데이터
const shops = [
  {
    id: 1,
    name: "레트로 빈티지",
    description: "60년대 스타일의 빈티지 의류",
    location: "서울시 강남구",
    imageUrl: "/placeholder.svg?height=300&width=400",
    thumbnail: "/placeholder.svg?height=50&width=50&text=RV",
    rating: 4.5,
    category: "의류",
  },
  {
    id: 2,
    name: "올드스쿨 가구점",
    description: "클래식한 빈티지 가구",
    location: "서울시 마포구",
    imageUrl: "/placeholder.svg?height=300&width=400",
    thumbnail: "/placeholder.svg?height=50&width=50&text=OF",
    rating: 4.2,
    category: "가구",
  },
  {
    id: 3,
    name: "앤티크 보물창고",
    description: "다양한 앤티크 소품",
    location: "서울시 종로구",
    imageUrl: "/placeholder.svg?height=300&width=400",
    thumbnail: "/placeholder.svg?height=50&width=50&text=AT",
    rating: 4.7,
    category: "악세사리",
  },
  {
    id: 4,
    name: "빈티지 파라다이스",
    description: "다양한 빈티지 아이템",
    location: "서울시 용산구",
    imageUrl: "/placeholder.svg?height=300&width=400",
    thumbnail: "/placeholder.svg?height=50&width=50&text=VP",
    rating: 4.8,
    category: "의류",
  },
  {
    id: 5,
    name: "레트로 레코드",
    description: "클래식 LP와 턴테이블",
    location: "서울시 마포구",
    imageUrl: "/placeholder.svg?height=300&width=400",
    thumbnail: "/placeholder.svg?height=50&width=50&text=RR",
    rating: 4.6,
    category: "음악",
  },
  {
    id: 6,
    name: "빈티지 북스",
    description: "희귀 도서와 고서적",
    location: "서울시 종로구",
    imageUrl: "/placeholder.svg?height=300&width=400",
    thumbnail: "/placeholder.svg?height=50&width=50&text=VB",
    rating: 4.4,
    category: "도서",
  },
]

const articles = [
  {
    id: 1,
    title: "2023년 빈티지 패션 트렌드",
    excerpt: "올해의 빈티지 패션 트렌드를 살펴봅니다.",
    imageUrl: "/placeholder.svg?height=200&width=300&text=Fashion",
  },
  {
    id: 2,
    title: "빈티지 가구 관리법",
    excerpt: "오래된 가구를 새것처럼 관리하는 방법",
    imageUrl: "/placeholder.svg?height=200&width=300&text=Furniture",
  },
  {
    id: 3,
    title: "서울의 숨은 빈티지 숍",
    excerpt: "알려지지 않은 서울의 빈티지 보물창고들",
    imageUrl: "/placeholder.svg?height=200&width=300&text=Shops",
  },
]

const categories = ["전체", "의류", "가구", "악세사리", "음악", "도서"]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("전체")

  const filteredShops = selectedCategory === "전체" ? shops : shops.filter((shop) => shop.category === selectedCategory)

  return (
    <div className="min-h-screen bg-davinci-darkBlue text-davinci-text">
      <Header />
      <main className="max-w-7xl mx-auto py-12 px-6">
        <h1 className="text-5xl font-heading font-bold text-davinci-accent mb-8">Discover Vintage Treasures</h1>

        {/* 검색 섹션 */}
        <div className="mb-12">
          <SearchBar />
        </div>

        {/* 빈티지 관련 소식 아티클 모음 섹션 */}
        <section className="mb-12">
          <h2 className="text-3xl font-heading font-bold text-davinci-accent mb-6">빈티지 관련 소식</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link href={`/article/${article.id}`} key={article.id}>
                <ArticleCard {...article} />
              </Link>
            ))}
          </div>
        </section>

        {/* 카테고리별 매장 목록 */}
        <section className="mb-12">
          <h2 className="text-3xl font-heading font-bold text-davinci-accent mb-6">빈티지 매장</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <Badge
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant="outline"
                className={`cursor-pointer transition-all duration-300 text-xs px-3 py-1 rounded-full ${
                  selectedCategory === category
                    ? "bg-davinci-accent text-davinci-darkBlue font-semibold"
                    : "text-davinci-text border-davinci-lightBlue hover:bg-davinci-lightBlue hover:text-davinci-text"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShops.map((shop) => (
              <Link href={`/shop/${shop.id}`} key={shop.id}>
                <ShopCard {...shop} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

