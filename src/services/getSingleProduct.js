import {products} from './data'

function getSingleProduct (id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const findedProduct = products.find((product) => {
        return product.id === Number(id)
      })
      if (!findedProduct) {
        reject('Ops, no se encontró el producto que buscabas')
      }
      resolve(findedProduct)
    }, 500)
  })
}

export default getSingleProduct