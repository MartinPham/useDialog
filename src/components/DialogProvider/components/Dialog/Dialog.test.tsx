import React from 'react'
import { render, screen } from '@testing-library/react'
import { Dialog } from '.'

test('renders Dialog with question', () => {
  render(<Dialog
    visible={true}
    question={"Something to ask"}
    onReply={(answer: string | null) => {

    }}
  />)
  const linkElement = screen.getByText(/Something to ask/i)
  expect(linkElement).toBeInTheDocument()
})