import { FC, useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { QRCodeForm } from '../QRCodeForm';

export const QRCodeGeneratorText: FC<{ onSubmit: (value: string) => void }> = ({
  onSubmit,
}) => {
  const [text, setText] = useState('');

  return (
    <QRCodeForm onSubmit={() => onSubmit(text)}>
      <Input
        placeholder="Enter Text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button className="w-full mt-2">Submit</Button>
    </QRCodeForm>
  );
};
