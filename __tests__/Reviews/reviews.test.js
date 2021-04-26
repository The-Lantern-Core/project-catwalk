import React from 'react';
import Modal from 'react-modal';
import 'regenerator-runtime/runtime'
import { WidgetProvider } from '../../client/src/components/WidgetContext.jsx'
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Reviews from '../../client/src/components/Reviews/Reviews.jsx';
import App from '../../__testFiles/AppReviews.jsx';


describe('Reviews', () => {
  test('renders Reviews component', async () => {
    render(<App />);
    await waitFor(() => {expect(screen.queryByTestId('not-rendered')).toBeNull()})


    // userEvent.click(screen.getByText('Ratings & Reviews'))
    // screen.debug();

  });
});