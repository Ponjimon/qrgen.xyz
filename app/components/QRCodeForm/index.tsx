import { FC } from 'react';

export const QRCodeForm: FC<{ onSubmit: () => void }> = ({
  onSubmit,
  children,
}) => (
  <form
    autoComplete="off"
    onSubmit={e => {
      e.preventDefault();
      onSubmit();
    }}
  >
    {children}
  </form>
);
