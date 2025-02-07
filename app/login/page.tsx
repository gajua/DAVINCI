'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FiLock, FiMail } from 'react-icons/fi';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { Header } from '../components/Header';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
        <Card className="w-full max-w-md border-none shadow-xl">
          <CardHeader className="space-y-4 text-center">
            <CardTitle className="text-3xl font-bold tracking-tight">
              다빈치에 오신 것을 환영합니다
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              빈티지의 모든 것, 다빈치와 함께하세요
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <FiMail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    id="email"
                    placeholder="이메일을 입력하세요"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <FiLock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="password"
                    id="password"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-muted-foreground"
                  >
                    로그인 상태 유지
                  </label>
                </div>
                <a href="#" className="text-sm text-primary hover:underline">
                  비밀번호를 잊으셨나요?
                </a>
              </div>
              <Button type="submit" className="w-full bg-primary">
                로그인
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50"
              >
                <FcGoogle className="h-5 w-5" />
                Google
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 bg-[#FEE500] text-[#000000] hover:bg-[#FEE500]/90"
              >
                <RiKakaoTalkFill className="h-5 w-5" />
                Kakao
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              아직 계정이 없으신가요?{' '}
              <a href="/signup" className="text-primary hover:underline">
                회원가입
              </a>
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
