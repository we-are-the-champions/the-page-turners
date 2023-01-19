import React from 'react';
import { render } from '@testing-library/react';
import { BestPageForeverComposition } from './best-page-forever.composition';

describe('BestPageForeverComposition', () => {
  it('should render the component', () => {
    const { getByRole } = render(<BestPageForeverComposition />);
    // check if the scope link 'the page turners' is rendered
    const rendered = getByRole('link', { name: 'the page turners' });
    expect(rendered).toBeTruthy();
  });
});
