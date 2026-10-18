import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ThemeProvider } from './components/theme-provider.tsx';
import { Toaster } from './components/ui/sonner.tsx';

import RootLayout from './pages/layout.tsx'; // 전역 레이아웃 컴포넌트
import App from './pages'; // 메인페이지
import SignUp from './pages/sign-up'; //회원가입
import SignIn from './pages/sign-in'; //로그인
import AuthCallback from './pages/auth/callback.tsx'; // 소셜로그인시, 콜백페이지
import CreateTopic from './pages/topics/[topic_id]/create.tsx'; // 토픽 생성 페이지
import TopicDetail from './pages/topics/[topic_id]/detail.tsx'; // 토픽 생성 페이지
import Portfolio from './pages/portfolio/index.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<App />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="auth/callback" element={<AuthCallback />} />
            <Route path="topics/:id/create" element={<CreateTopic />} />
            <Route path="topics/:id/detail" element={<TopicDetail />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster richColors position="top-center" />
    </ThemeProvider>
  </StrictMode>,
);
