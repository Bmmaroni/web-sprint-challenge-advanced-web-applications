import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import BubblePage from "./BubblePage";

import { getColors as mockGetColors } from '../api/getColors';
jest.mock('../api/getColors');

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
  console.log(mockGetColors);
  mockGetColors.mockResolvedValueOnce(colorData);
  const { rerender } = render(<BubblePage />);
  await act(async () => {
    rerender(<BubblePage />);
    screen.debug();
  });

  const title = screen.getByText(/bubbles/i);

  await waitFor(() => {
    const renderedBubbles = screen.getAllByTestId('bubbles');
    expect(title).toHaveTextContent(/bubbles/i);
    expect(renderedBubbles).toHaveLength(2);
    const bubble1 = screen.getByText('aliceblue');
    expect(bubble1).toHaveTextContent('aliceblue');
    const bubble2 = screen.getByText('limegreen');
    expect(bubble2).toHaveTextContent('limegreen');
  });
  screen.debug();
});