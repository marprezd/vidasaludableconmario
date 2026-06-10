import type { MetadataRoute } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const t = await getTranslations({
    locale: routing.defaultLocale,
    namespace: 'Messages',
  })

  return {
    name: t('Manifest.name'),
    start_url: '/',
    theme_color: '#00BCD4', // cyan.500
  }
}
