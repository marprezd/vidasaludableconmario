import type { Locale } from 'next-intl'
// import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params)

  // Enable static rendering
  setRequestLocale(locale as Locale)
  // const t = useTranslations('Messages')

  return (
    <div className="flex flex-col flex-1 justify-center items-center bg-zinc-50 dark:bg-black font-sans">
      Landing page
    </div>
  )
}
