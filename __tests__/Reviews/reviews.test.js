import React from 'react';
import Modal from 'react-modal';
import 'regenerator-runtime/runtime'
import { WidgetProvider } from '../../client/src/components/WidgetContext.jsx'
import { render, screen, waitFor } from '@testing-library/react';

import Reviews from '../../client/src/components/Reviews/Reviews.jsx';
import App from '../../client/src/components/App.jsx';

// const spy = jest.spyOn(App, 'getAverageReview');

describe('Reviews', () => {
  test('renders Reviews component', async () => {
    render(<App />);
    // await waitFor(() => expect(spy).toHaveBeenCalledTimes(1));

    // screen.debug();

  });
});