import React from "react";
import { screen, render } from "@testing-library/react";
import Episodes from "./Episodes";

test("component renders correctly", () => {
  render(<Episodes episodes={[]} />);
});

const episodesList = [
  {
    id: 1,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
    },
    name: "episode_1",
    season: 1,
    number: 1,
    runtime: 50,
    summary: "blah blah blah",
  },
  {
    id: 2,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
    },
    name: "episode_1_again",
    season: 2,
    number: 1,
    runtime: 45,
    summary: "blah blah blah blah",
  },
];

test("rerenders correctly when passed new episode data", () => {
  const { rerender } = render(<Episodes episodes={[]} />);

  let episodes = screen.queryAllByTestId("episode");

  expect(episodes).toStrictEqual([]);

  rerender(<Episodes episodes={episodesList} />);
  episodes = screen.queryAllByTestId("episode");
  expect(episodes).toHaveLength(2);
});
