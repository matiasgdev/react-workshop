import {products} from './data'

function getProducts () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export default getProducts