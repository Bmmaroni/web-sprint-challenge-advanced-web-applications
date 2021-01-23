import React from "react";
import { render, screen, await } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import BubblePage from "./BubblePage";

import { getColors as mockGetColors } from './BubblePage';
jest.mock('http://localhost:5000/api/colors')

const colorData = {

}

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockGetColors.mockResolvedValueOnce(colorData);
  const { rerender } = render(<BubblePage />);
  screen.debug();
  await act(async () => {
    await rerender(<BubblePage />);
    screen.debug();
  });

  
});
