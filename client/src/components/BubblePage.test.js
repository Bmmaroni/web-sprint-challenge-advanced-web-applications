import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import BubblePage from "./BubblePage";

import { getColors as mockGetColors } from './BubblePage';
jest.mock('./BubblePage');

const colorData = {
  data: [
    {
      color: 'aliceblue',
      code: {
        hex: '#f0f8ff'
      },
      id: 1
    },

    {
      color: 'limegreen',
      code: {
        hex: '#99ddbc'
      },
      id: 2
    }
  ]
}

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockGetColors.mockResolvedValueOnce(colorData);
  const { rerender } = render(<BubblePage />);
  screen.debug();
  await act(async () => {
    await rerender(<BubblePage />, <Bubbles />);
    screen.debug();
  });

  const title = screen.getByRole('paragraph');

  await waitFor(() => {
    expect(title).toHaveTextContent(/bubbles/i)
  });
});