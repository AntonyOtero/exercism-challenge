import {
  render,
  screen,
  cleanup,
  fireEvent,
  getAllByRole,
  waitFor
} from "@testing-library/react"
// import userEvent from "@testing-library/user-event"
// import { wait } from "@testing-library/user-event/dist/types/utils"
import TrackFilter from "../TrackFilter"

afterEach(cleanup)

const tracks = [
  {
    slug: "all",
    title: "All",
    course: false,
    num_concepts: 0,
    num_exercises: 0,
    web_url: "",
    icon_url: "",
    tags: [],
    last_touched_at: null,
    is_new: false,
    links: {},
  },
  {
    slug: "c",
    title: "C",
    course: false,
    num_concepts: 0,
    num_exercises: 0,
    web_url: "",
    icon_url: "",
    tags: [],
    last_touched_at: null,
    is_new: false,
    links: {},
  },
  {
    slug: "java",
    title: "Java",
    course: false,
    num_concepts: 0,
    num_exercises: 0,
    web_url: "",
    icon_url: "",
    tags: [],
    last_touched_at: null,
    is_new: false,
    links: {},
  },
  {
    slug: "javascript",
    title: "JavaScript",
    course: false,
    num_concepts: 0,
    num_exercises: 0,
    web_url: "",
    icon_url: "",
    tags: [],
    last_touched_at: null,
    is_new: false,
    links: {},
  }
]

const trackCounts = {
  all: 2022,
  c: 19,
  javascript: 214,
}

test("clicking the track button should open the track selector", () => {
  render(
    <TrackFilter
      tracks={tracks}
      trackCounts={trackCounts}
      handleTrackFilter={() => { }}
    />
  )

  const dropdown = screen.getByTestId("track-dropdown")
  const button = dropdown.children[0]
  fireEvent.click(button)
  const trackSelector = dropdown.children[1].firstChild
  expect(trackSelector).not.toBeUndefined
})

test("clicking on a track should close the track selector", async () => {
  render(
    <TrackFilter
      tracks={tracks}
      trackCounts={trackCounts}
      handleTrackFilter={() => { }}
    />
  )

  const dropdown = screen.getByTestId("track-dropdown")
  const button = dropdown.children[0]
  fireEvent.click(button)
  const trackSelector = dropdown.children[1].firstChild
  const trackOptions = getAllByRole(trackSelector, 'option')
  fireEvent.click(trackOptions[1])
  await waitFor(() => {
    expect(screen.queryByText(/all/i)).toBeNull()
  })
})

test("the tracks should be filtered to only show the list of tracks on which you have given testimonials", () => {
  render(
    <TrackFilter
      tracks={tracks}
      trackCounts={trackCounts}
      handleTrackFilter={() => { }}
    />
  )

  const dropdown = screen.getByTestId("track-dropdown")
  const button = dropdown.children[0]
  fireEvent.click(button)
  const trackSelector = dropdown.children[1].firstChild
  const trackOptions = getAllByRole(trackSelector, 'option')
  expect(trackOptions.length).toBe(3)
})