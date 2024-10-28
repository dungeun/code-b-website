'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ArrowRight, Code, Globe, BarChart, Menu, Sun, Moon } from "lucide-react"
import Typed from 'typed.js'

const navigation = [
  { name: 'code.APP', href: '/code-app' },
  { name: 'code.WEB', href: '/code-web' },
  { name: 'code.DM', href: '/code-dm' },
  { name: 'Blog', href: '/blog' },
]

export default function Home() {
  const { theme, setTheme } = useTheme()
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['code.B'],
      typeSpeed: 150,
      backSpeed: 150,
      backDelay: 10000,
      loop: true,
      showCursor: true,
      cursorChar: '_'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  React.useEffect(() => {
    // 라이트모드를 기본값으로 설정:
    setTheme('light')
  }, [setTheme])

  return (
    <div className="bg-background text-foreground">
      {/* Navigation */}
      <header className="bg-background">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">code.B</span>
              <span ref={el} className="text-3xl font-bold"></span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Navigate through our website
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="nav-link-mobile"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <Button variant="link" asChild className="w-full justify-start">
                        <Link href="#">
                          구독하기
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="py-6">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      >
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 items-center">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="nav-link-desktop"
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="link" asChild>
              <Link href="#" className="text-sm font-semibold leading-6 text-foreground">
                구독하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <Image
            src="/back.webp"
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="left bottom"
            priority
          />
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title text-foreground">
              Code.B는 최신 기술과 혁신적인 AI를 바탕으로
              <br />
              귀사의 비즈니스를 변혁하는 선도적인 기술 기업입니다.
            </h1>
            <p className="hero-description text-foreground/70">
              우리는 복잡한 비즈니스 문제를 해결하고, 운영 프로세스를 최적화하며, 새로운 디지털 기회를 열어가는 데 앞장서고 있습니다.
            </p>
            <div className="hero-buttons">
              <Button asChild>
                <Link href="/contact">시작하기</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/about">
                  더 알아보기 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-content">
          <div className="services-header">
            <h2 className="text-4xl font-semibold leading-7 text-indigo-600">Our Services</h2>
            <p className="services-title">
              Everything you need to accelerate your business
            </p>
            <p className="services-description">
              Code.B는 다음 세 가지 핵심 서비스를 통해 귀사의 디지털 전략을 완성합니다.
            </p>
          </div>
          <div className="services-list">
            <dl className="services-grid">
              {[
                {
                  name: 'code.APP',
                  description: '고품질의 모바일 및 웹 애플리케이션 개발, 유지보수, 성능 최적화를 통해 고객의 요구에 맞는 맞춤형 솔루션을 제공합니다.',
                  icon: Code,
                },
                {
                  name: 'code.WEB',
                  description: '최적화된 웹사이트 개발과 맞춤형 웹 애플리케이션을 통해 강력한 온라인 존재감을 구축합니다.',
                  icon: Globe,
                },
                {
                  name: 'code.DM',
                  description: '데이터 기반의 디지털 마케팅 전략으로 고객의 온라인 비즈니스 성장을 촉진하고 ROI를 극대화합니다.',
                  icon: BarChart,
                },
              ].map((service) => (
                <Card key={service.name}>
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <CardTitle className="mt-4 text-base font-semibold leading-7 text-foreground">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mt-2 text-base leading-7 text-foreground/70">{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" asChild>
                      <Link href={`/${service.name.toLowerCase()}`}>
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-card">
            <div className="cta-text">
              <h2 className="cta-title">
                구독 서비스로 지속적인 혁신을<br />경험해보세요.
              </h2>
              <p className="cta-description">
                전문 개발팀을 채용한 것과 유사한 혜택을 제공하는 구독형 기술 지원 서스로, 지속적 기술 업데이트, 버그 수정, 신규 기능 추가 등으로 귀사의 기술 혁신을 유지할 수 있도록 돕습니다.
              </p>
              <div className="cta-buttons">
                <Button asChild>
                  <Link href="/subscribe">구독 시작하기</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/pricing" className="text-white">
                    요금제 보기 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
