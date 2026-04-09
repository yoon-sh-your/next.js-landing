import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const navLinks = ["Product", "Solutions", "Pricing", "Resources", "Contact"]

const features = [
  {
    title: "행동 인텔리전스",
    description:
      "익명/회원 방문자의 행동을 추적하고, 중요한 기회를 우선순위로 보여주는 인텐트 시그널을 제공합니다.",
  },
  {
    title: "세일즈 준비 시그널",
    description:
      "실행 중심 컨텍스트와 함께 높은 확률의 기회를 세일즈 팀에 즉시 전달합니다.",
  },
  {
    title: "예측 매출 뷰",
    description:
      "실제 SaaS GTM 팀을 위해 설계된 AI 트렌드 모델로 성과를 예측합니다.",
  },
]

const productHighlights = [
  {
    title: "실시간 방문자 타임라인",
    description:
      "첫 방문부터 세일즈 유효 리드가 되기까지의 여정을 하나의 라이브 화면에서 확인하세요.",
  },
  {
    title: "AI 기회 점수화",
    description:
      "행동 데이터와 CRM 데이터를 결합해 기업/담당자를 구매 확률 기준으로 자동 랭킹합니다.",
  },
  {
    title: "플레이북 자동화",
    description:
      "인텐트 임계치 도달 시 세일즈 및 라이프사이클 액션을 자동으로 실행합니다.",
  },
]

const testimonials = [
  {
    name: "Ava Mitchell",
    role: "그로스 리드, 노스스타 커머스",
    quote: "StatsAI 덕분에 고의도 계정을 몇 주 더 빠르게 발견할 수 있었습니다.",
    avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Ava",
  },
  {
    name: "Liam Park",
    role: "리비뉴 총괄, PulseStack",
    quote: "모든 의사결정에 신호가 붙으니 팀의 실행 속도가 훨씬 빨라졌습니다.",
    avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Liam",
  },
  {
    name: "Emma Davis",
    role: "CMO, CloudMint",
    quote: "StatsAI 도입 직후부터 전환 개선 성과가 빠르게 나타났습니다.",
    avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Emma",
  },
]

const metrics = [
  { label: "월간 추적 이벤트", value: "120M+" },
  { label: "평균 전환율 상승", value: "31%" },
  { label: "도입한 엔터프라이즈 팀", value: "2,400+" },
  { label: "실시간 신호 지연", value: "< 2초" },
]

const pricingPlans = [
  {
    name: "스타터",
    price: "$49/mo",
    description: "PMF를 검증 중인 초기 팀에 적합합니다.",
    points: ["3개 좌석", "핵심 분석", "주간 AI 인사이트"],
    cta: "무료 체험 시작",
    featured: false,
  },
  {
    name: "그로스",
    price: "$149/mo",
    description: "제품/세일즈 확장 단계에 맞춘 플랜입니다.",
    points: ["15개 좌석", "인텐트 스코어링", "CRM 연동 + 자동화"],
    cta: "그로스 선택",
    featured: true,
  },
  {
    name: "스케일",
    price: "맞춤형",
    description: "고급 거버넌스와 대규모 파이프라인 운영을 위한 플랜입니다.",
    points: ["무제한 좌석", "커스텀 모델", "우선 지원"],
    cta: "영업팀 문의",
    featured: false,
  },
]

const faqs = [
  {
    q: "StatsAI는 얼마나 빨리 도입할 수 있나요?",
    a: "대부분의 팀이 하루 이내에 데이터 소스를 연결하고 운영을 시작합니다.",
  },
  {
    q: "우리 CRM/마케팅 스택과 연동되나요?",
    a: "네. 주요 CRM 및 마케팅 툴을 기본 커넥터로 지원합니다.",
  },
  {
    q: "AI 추천 방식도 제어할 수 있나요?",
    a: "팀별로 가중치, 가드레일, 스코어 임계값을 세밀하게 조정할 수 있습니다.",
  },
]

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative isolate flex min-h-screen flex-col overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(130,90,255,0.18),transparent_35%),linear-gradient(to_bottom,#080808,#0c0c0c)]"
        >
          {/* unicorn.studio interactive background mount point */}
        </div>

        <header className="w-full px-[clamp(1rem,4vw,4rem)] pt-6">
          <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 rounded-full border border-white/10 bg-black/30 px-5 py-3 backdrop-blur md:px-8">
            <div className="text-lg font-bold tracking-tight">StatsAI</div>

            <ul className="hidden items-center gap-[clamp(0.75rem,2vw,2rem)] md:flex">
              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Button className="rounded-full px-5">Join up</Button>
              <Button variant="secondary" className="rounded-full px-5">
                Login
              </Button>
            </div>
          </nav>
        </header>

        <div className="mt-auto w-full px-[clamp(1rem,4vw,4rem)] pb-[clamp(2rem,6vh,4rem)]">
          <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-end gap-6">
            <h1 className="max-w-[24ch] text-balance text-[clamp(1.6rem,5vw,4.5rem)] font-black leading-[1.02] tracking-tight">
              이제, 진짜 인텔리전트 분석.
            </h1>
            <Button size="lg" className="rounded-full px-8 text-base">
              지금 체험하기
            </Button>
          </div>
        </div>
      </section>

      <section className="px-[clamp(1rem,4vw,4rem)] py-20">
        <div className="mx-auto grid w-full max-w-[1400px] gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-white/15 bg-black/30">
              <CardContent className="space-y-3 p-6">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="flex min-h-screen items-center px-[clamp(1rem,4vw,4rem)] py-12">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4 lg:sticky lg:top-20 lg:self-start">
            <Badge variant="outline">프로덕트</Badge>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              제품 핵심 기능
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              GTM 팀이 더 빠르게 실행하고 선명하게 판단할 수 있도록
              모듈형 기능으로 구성했습니다.
            </p>
          </div>
          <div className="space-y-4">
            {productHighlights.map((item, idx) => (
              <Card
                key={item.title}
                className="overflow-hidden border-white/15 bg-black/20 py-0"
              >
                <CardContent className="grid gap-4 p-6 sm:grid-cols-[auto_1fr] sm:items-start">
                  <div className="flex size-9 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-sm font-bold text-primary">
                    {idx + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="flex min-h-screen items-center px-[clamp(1rem,4vw,4rem)] py-12">
        <div className="mx-auto w-full max-w-[1400px] rounded-2xl border border-white/15 bg-gradient-to-b from-primary/15 via-black/30 to-black/50 p-6 md:p-8">
          <div className="mb-8 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Badge variant="secondary">고객 후기</Badge>
              <p className="text-sm text-muted-foreground">
                StatsAI로 파이프라인 품질을 높인 팀들의 실제 이야기입니다.
              </p>
            </div>
            <p className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground md:block">
              고객의 목소리
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card
                key={item.name}
                className="border-white/10 bg-black/40 py-0 backdrop-blur"
              >
                <CardContent className="space-y-5 p-6">
                  <p className="text-base leading-relaxed text-zinc-100">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="h-px w-full bg-white/10" />
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={item.avatar} alt={`${item.name} avatar`} />
                      <AvatarFallback>{item.name.slice(0, 1)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[clamp(1rem,4vw,4rem)] py-8">
        <div className="mx-auto grid w-full max-w-[1400px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.label} className="border-white/10 bg-black/20 py-0">
              <CardContent className="p-5">
                <p className="text-3xl font-black tracking-tight">{metric.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="flex min-h-screen items-center px-[clamp(1rem,4vw,4rem)] py-20">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mb-8 flex items-center gap-3">
            <Badge variant="secondary">요금제</Badge>
            <p className="text-sm text-muted-foreground">
              성장 단계에 맞춰 유연하게 확장되는 요금제입니다.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={
                  plan.featured
                    ? "border-primary/60 bg-primary/10 py-0"
                    : "border-white/15 bg-black/20 py-0"
                }
              >
                <CardContent className="space-y-5 p-6">
                  <div>
                    <p className="text-sm text-muted-foreground">{plan.name}</p>
                    <p className="mt-2 text-3xl font-black tracking-tight">
                      {plan.price}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    {plan.points.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.featured ? "default" : "secondary"}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[clamp(1rem,4vw,4rem)] py-12">
        <div className="mx-auto w-full max-w-[900px]">
          <div className="mb-6 flex items-center gap-3">
            <Badge variant="outline">FAQ</Badge>
            <p className="text-sm text-muted-foreground">
              그로스 팀이 자주 묻는 질문입니다.
            </p>
          </div>
          <Accordion type="single" collapsible className="rounded-xl border px-5">
            {faqs.map((item, idx) => (
              <AccordionItem key={item.q} value={`item-${idx}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="px-[clamp(1rem,4vw,4rem)] py-16">
        <div className="mx-auto grid w-full max-w-[1400px] gap-6 rounded-2xl border border-white/15 bg-black/20 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <Badge>뉴스레터</Badge>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              SaaS 팀을 위한 주간 AI 그로스 플레이북을 받아보세요.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              바로 실행 가능한 분석, 벤치마크, 고의도 퍼널 인사이트를 제공합니다.
            </p>
          </div>
          <form className="flex w-full max-w-md gap-3">
            <Input type="email" placeholder="you@company.com" />
            <Button type="submit">구독하기</Button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-[clamp(1rem,4vw,4rem)] py-10">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 md:grid-cols-[1.2fr_1fr_1fr_auto]">
          <div className="space-y-3">
            <p className="text-lg font-bold tracking-tight">StatsAI</p>
            <p className="max-w-xs text-sm text-muted-foreground">
              현대적인 SaaS 팀을 위한 AI 기반 분석 및 세일즈 인텔리전스.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold">프로덕트</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  기능
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  연동
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  요금제
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold">회사</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  소개
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  블로그
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  문의하기
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold">소셜</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  X / 트위터
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-[1400px] flex-col gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} StatsAI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-foreground">
              이용약관
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              개인정보처리방침
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              보안
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
