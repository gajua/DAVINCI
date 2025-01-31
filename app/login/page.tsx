'use client';

import { useState } from 'react';
import { Header } from '../components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 로그인 로직을 구현하세요
    console.log('Login attempt', { email, password });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-md px-4 py-16">
        <Card className="border-davinci-lightBlue shadow-lg">
          <CardHeader className="bg-davinci-blue">
            <CardTitle className="text-center font-heading text-3xl font-bold text-white">
              Login to DAVINCI
            </CardTitle>
          </CardHeader>
          <CardContent className="bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-davinci-darkBlue"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border-davinci-lightBlue"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-1 block text-sm font-medium text-davinci-darkBlue"
                >
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border-davinci-lightBlue"
                />
              </div>
              <Button
                type="submit"
                className="bg-davinci-yellow hover:bg-davinci-yellow/90 w-full text-davinci-darkBlue"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
