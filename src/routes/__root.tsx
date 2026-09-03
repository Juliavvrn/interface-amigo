import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ALL_KEYWORDS, KEYWORDS_META } from "../lib/seo-keywords";
import { I18nProvider } from "../i18n";
import SmoothScroll from "../components/SmoothScroll";
import Cursor from "../sections/Cursor";
import Nav from "../sections/Nav";
import Footer from "../sections/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google", content: "notranslate" },
      { name: "keywords", content: KEYWORDS_META },
      { title: "Юлия Вересова | Разработка MVP, веб-сервисов и AI-решений" },
      { name: "application-name", content: "Юлия Вересова" },
      { name: "apple-mobile-web-app-title", content: "Юлия Вересова" },
      { name: "theme-color", content: "#0a0a0a" },
      {
        name: "description",
        content:
          "Портфолио и услуги по проектированию и быстрой разработке веб-приложений, запуску MVP и интеграции AI-агентов. Юлия Вересова — IT-архитектура и разработка.",
      },
      { property: "og:site_name", content: "Юлия Вересова" },
      { property: "og:title", content: "Юлия Вересова | Разработка MVP, веб-сервисов и AI-решений" },
      {
        property: "og:description",
        content:
          "Портфолио и услуги по проектированию и быстрой разработке веб-приложений, запуску MVP и интеграции AI-агентов. Юлия Вересова — IT-архитектура и разработка.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:locale:alternate", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Юлия Вересова | Разработка MVP, веб-сервисов и AI-решений" },
      {
        name: "twitter:description",
        content:
          "Портфолио и услуги по проектированию и быстрой разработке веб-приложений, запуску MVP и интеграции AI-агентов. Юлия Вересова — IT-архитектура и разработка.",
      },
      { name: "robots", content: "index, follow" },
      { name: "yandex-verification", content: "cfa8ab9033147c73" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600&family=Space+Mono:wght@400&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Julia Veresova",
          jobTitle: "Technical Product Owner · Full-Stack AI Engineer",
          url: "https://interface-amigo.lovable.app",
          email: "mailto:juliavvrn@gmail.com",
          sameAs: ["https://t.me/julianvrn"],
          address: { "@type": "PostalAddress", addressLocality: "Moscow", addressCountry: "RU" },
          knowsLanguage: ["ru", "en"],
          knowsAbout: [
            "MVP development",
            "AI SaaS",
            "MedTech",
            "NeuroTech",
            "EEG data analysis",
            "Mental health technology",
            "AI agents",
            "Agentic workflows",
            "RAG architecture",
            "Multi-provider LLM orchestration",
            "Vector databases",
            "Cognitive OS",
            "Synthetic research platforms",
            "Risk management and audit AI",
            "Technical Product Ownership",
            "Fractional CPO",
            "Product discovery",
            "Product strategy",
            "Data architecture",
            "React",
            "Supabase",
            "PostgreSQL",
            "Full-cycle product development",
            ...ALL_KEYWORDS,
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Product & Engineering Services",
            itemListElement: [
              "Быстрая разработка MVP и AI SaaS под ключ",
              "Разработка MedTech и NeuroTech платформ",
              "AI-архитектура, RAG и multi-provider LLM orchestration",
              "Technical Product Ownership и продуктовый консалтинг",
              "Full-stack разработка и UI/UX сложных систем",
            ].map((name, i) => ({
              "@type": "Offer",
              position: i + 1,
              itemOffered: { "@type": "Service", name },
            })),
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" translate="no" className="notranslate">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <div className="grain relative min-h-screen bg-[#0a0a0a] text-[#ece9e4]">
          <SmoothScroll />
          <Cursor />
          <Nav />
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
          <Footer />
        </div>
      </I18nProvider>
    </QueryClientProvider>
  );
}
