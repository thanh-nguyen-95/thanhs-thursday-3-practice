const { transformProductVariantsToCustomProductsMap } = require('./main')
const product = require('./product.json')
const result = require('./result.json')

describe('transform product variants to custom product', () => {
  const customProducts = transformProductVariantsToCustomProductsMap()
  const entries = Object.entries(customProducts)

  it('has correct number of products', () => {
    expect(entries.length).toBe(product.variants.length)
  })

  it('has "id" as keys', () => {
    expect(entries.length).not.toBe(0)
    expect(entries.map(([key]) => key)).toEqual(
      product.variants.map((variant) => variant.id.toString())
    )
  })

  it('has "available" prop', () => {
    expect(entries.length).not.toBe(0)
    expect(
      entries.every(([, value]) => typeof value.available === 'boolean')
    ).toBe(true)
  })

  it('has "price" and "compareAtPrice" as number', () => {
    expect(entries.length).not.toBe(0)
    expect(
      entries.every(
        ([, { price, compareAtPrice }]) =>
          typeof price === 'number' && typeof compareAtPrice === 'number'
      )
    ).toBe(true)
  })

  // Uncomment the following lines when all tests are passed

  // it('matches the final result', () => {
  //   expect(customProducts).toEqual(result)
  // })
})
