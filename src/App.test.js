import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { mockData } from "./api/mockData";

import { fetchShow as mockFetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow");

test("fetches showdata and renders data", async () => {
  mockFetchShow.mockResolvedValueOnce(mockData);
  render(<App />);
  const dropdown = await screen.findByText(/Select a season/i);
  userEvent.click(dropdown);
  const seasonOne = await screen.findByText(/Season 1/i);
  userEvent.click(seasonOne);
  await screen.findByText(/Chapter One: The Vanishing of Will Byers/i);
});
