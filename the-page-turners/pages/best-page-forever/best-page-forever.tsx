import React, { ReactNode } from 'react';

export type BestPageForeverProps = {
  /**
   * a node to be rendered in the special component
   */
  children?: ReactNode;
};

export function BestPageForever({ children }: BestPageForeverProps) {
  return (
    <div>
      {children}
    </div>
  );
}
