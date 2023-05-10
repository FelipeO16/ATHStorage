import { products } from '@/store'

export default function () {
  fetch('https://ath.gs-rp.net/api/products')
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
    })
}
