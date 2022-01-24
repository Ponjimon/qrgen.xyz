import { FC } from 'react';

export const QRCodeForm: FC<{ onSubmit: () => void }> = ({
  onSubmit,
  children,
}) => (
  <form
    onSubmit={e => {
      e.preventDefault();
      onSubmit();
    }}
  >
    {children}
  </form>
);
