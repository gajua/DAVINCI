'use client';

import { useState } from 'react';
import { Header } from '../../components/Header';
import Image from 'next/image';

// 임시 데이터 (실제로는 API나 데이터베이스에서 가져와야 합니다)
const articleData = {
  id: 1,
  title: '2023년 빈티지 패션 트렌드',
  content: `
    <p>빈티지 패션은 계속해서 현대 패션 트렌드에 영향을 미치고 있습니다. 2023년에는 특히 다음과 같은 빈티지 스타일이 주목받고 있습니다:</p>
    
    <h2>1. 90년대 그런지 리바이벌</h2>
    <p>오버사이즈 플란넬 셔츠, 찢어진 청바지, 닥터마틴 부츠 등 90년대 그런지 스타일이 다시 한 번 유행하고 있습니다.</p>
    
    <h2>2. 70년대 보헤미안 스타일</h2>
    <p>프린지 디테일, 벨보텀 팬츠, 크로셰 톱 등 70년대의 자유로운 보헤미안 스타일이 현대적으로 재해석되어 돌아왔습니다.</p>
    
    <h2>3. 80년대 볼드한 컬러와 실루엣</h2>
    <p>네온 컬러, 과감한 어깨 패드, 허리를 강조하는 벨트 등 80년대의 대담한 스타일 요소들이 새롭게 조명받고 있습니다.</p>
    
    <p>이러한 빈티지 트렌드를 현대적으로 스타일링하는 것이 2023년 패션의 핵심입니다. 빈티지 아이템을 현대적인 피스와 믹스매치하여 독특하고 개성 있는 스타일을 완성해보세요.</p>
  `,
  imageUrl: '/placeholder.svg?height=400&width=800&text=Vintage+Fashion+Trends',
  author: '김스타일',
  date: '2023-05-15',
};

export default function ArticleDetail({ params }: { params: { id: string } }) {
  const [article] = useState(articleData); // 실제로는 ID를 기반으로 데이터를 가져와야 합니다

  return (
    <div className="min-h-screen bg-davinci-darkBlue text-white">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <article className="overflow-hidden rounded-lg bg-white text-davinci-darkBlue shadow-xl">
          <div className="relative h-64 w-full">
            <Image
              src={article.imageUrl || '/placeholder.svg'}
              alt={article.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-6">
            <h1 className="mb-4 font-heading text-4xl font-bold">
              {article.title}
            </h1>
            <div className="mb-6 text-sm text-davinci-blue">
              <span>{article.author}</span> • <span>{article.date}</span>
            </div>
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>
      </main>
    </div>
  );
}
