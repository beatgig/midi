import { matchMedia, installMockStorage } from '@shopify/jest-dom-mocks'

/**
 * Installs the localStorage and sessionStorage mocks onto the
 * global window object.
 */
installMockStorage()

beforeAll(() => {
  /**
   * Create a "root" element so that React portals can properly render
   * components.
   */
  const root = document.createElement('div')
  root.setAttribute('id', 'root')
  document.body.appendChild(root)

  /**
   * Mock matchMedia
   */
  matchMedia.mock()
})

afterAll(() => {
  /**
   * Delete the "root" element.
   */
  document.getElementById('root').remove()

  /**
   * Restores matchMedia mock
   */
  matchMedia.restore()
})
