'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Globe, BarChart } from "lucide-react"
import Navbar from '@/components/Navbar'

export function Page() {
  return (
    <div className="bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative isolate">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/back.webp"
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="left bottom"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8 lg:py-56">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Code.B는 최신 기술과 혁신적인 AI를 바탕으로
              <br />
              귀사의 비즈니스를 변혁하는 선도적인 기술 기업입니다.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              우리는 복잡한 비즈니스 문제를 해결하고, 운영 프로세스를 최적화하며, 새로운 디지털 기회를 열어가는 데 앞장서고 있습니다.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
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
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to accelerate your business
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Code.B는 다음 세 가지 핵심 서비스를 통해 귀사의 디지털 전략을 완성합니다.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
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
                    <CardTitle className="mt-4 text-base font-semibold leading-7 text-gray-900">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mt-2 text-base leading-7 text-gray-600">{service.description}</CardDescription>
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
      <section className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                구독 서비스로 지속적인 혁신을<br />경험해보세요.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                전문 개발팀을 채용한 것과 유사한 혜택을 제공하는 구독형 기술 지원 서비스로, 지속적인 기술 업데이트, 버그 수정, 신규 기능 추가 등으로 귀사의 기술 혁신을 유지할 수 있도록 돕습니다.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
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