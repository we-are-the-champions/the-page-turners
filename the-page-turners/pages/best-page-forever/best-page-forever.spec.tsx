import React from 'react';
import { render } from '@testing-library/react';
import { BestPageForeverComposition } from './best-page-forever.composition';

describe('BestPageForeverComposition', () => {
  it('should render the component', () => {
    const { getByText } = render(<BestPageForeverComposition />);
    expect(
      getByText(
        'Integrating Micro Frontends with Bit and Git for Easier Collaboration'
      )
    ).toBeInTheDocument();
  });
});
