import { render, screen } from "@testing-library/react"
import Testimonial from "../Testimonial"

test("should contain a link", () => {
  render(<Testimonial
    id="23498"
    track="TypeScript"
    exercise="Two Fer"
    mentor="zuomiarz"
    content="One more time - thank you very much for your time!"
    created_at="2022-02-26T14:43:30.271Z"
  />)

  const link = screen.getByRole("link")

  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute("href", expect.stringContaining("23498"))
})