import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '.'

test('renders App', () => {
  render(<App />)
  const linkElement = screen.getByText(/ASK/i)
  expect(linkElement).toBeInTheDocument()
})
