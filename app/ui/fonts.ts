import { Titillium_Web, Lusitana } from 'next/font/google'

export const titilliumWeb = Titillium_Web({
  subsets: ['latin'], weight: [
    '200', '300', '400', '600', '700'
  ]
})

export const lusitana = Lusitana({
  subsets: ['latin'], weight: [
    "400", "700"
  ]
})