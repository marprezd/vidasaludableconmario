'use client'

// import {useTranslations} from 'next-intl';
import { useEffect } from 'react'

interface Props {
  error: Error
  reset: () => void
}

export default function Error({ error }: Props) {
  // const t = useTranslations('Messages.Error');

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <div>
        <h1>Something went wrong!</h1>
      </div>
    </div>
  )
}
