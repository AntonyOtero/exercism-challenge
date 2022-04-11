import {
  render,
  screen,
  cleanup,
  fireEvent,
  getAllByRole
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import SortFilter from "../SortFilter"

/*
function handleSorting(selected) {
  setSortFilter('&order=' + selected.replace(" ", "_").toLowerCase())
}
*/

afterEach(cleanup)

const options = [
  {
    key: 'newest first',
    text: 'Newest First',
    value: 'newest-first'
  },
  {
    key: 'oldest first',
    text: 'Oldest First',
    value: 'oldest-first'
  },
]

test("there are two sort options", () => {
  render(<SortFilter handleSorting={() => { }} />)
  const dropdown = screen.getByTestId("dropdown")
  const button = dropdown.children[0]
  fireEvent.click(button)
  expect(getAllByRole(dropdown.children[1], 'option').length).toBe(2)
})

test("can change the value of the dropdown", () => {
  render(<SortFilter handleSorting={() => {}} />)

  const dropdown = screen.getByTestId("dropdown")
  const button = dropdown.children[0]

  fireEvent.click(button)

  expect(button.textContent).toContain(options[0].text)

  const dropdownOptions = getAllByRole(dropdown.children[1], 'option')

  fireEvent.click(dropdownOptions[1])

  expect(button.textContent).toContain(options[1].text)
})