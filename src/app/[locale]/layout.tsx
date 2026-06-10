import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import localFont from 'next/font/local'
import { notFound } from 'next/navigation'
import { Providers } from '@/app/providers'
import { routing } from '@/i18n/routing'

const interSans = localFont({
  src: '../fonts/Inter-VariableFont_opsz,wght.woff2',
  variable: '--font-inter',
  weight: '100 900',
  display: 'swap',
  preload: true,
})

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export async function generateMetadata({ params }: LocaleLayoutProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Messages.Metadata' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Set the request locale for server-side rendering
  setRequestLocale(locale)

  return (
    <html
      lang={locale}
      className={`${interSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-full">
        <NextIntlClientProvider>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
