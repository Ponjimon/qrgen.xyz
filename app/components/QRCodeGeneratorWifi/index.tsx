import { FC, useMemo, useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { QRCodeForm } from '../QRCodeForm';
import { Select } from '../Select';

export const QRCodeGeneratorWifi: FC<{ onSubmit: (value: string) => void }> = ({
  onSubmit,
}) => {
  const [ssid, setSsid] = useState('');
  const [encryption, setEncryption] = useState<'WEP' | 'WPA' | 'None'>('None');
  const [password, setPassword] = useState('');
  const qrCode = useMemo(
    () => `WIFI:S:${ssid};T:${encryption};P:${password};;`,
    [ssid, encryption, password]
  );

  return (
    <QRCodeForm onSubmit={() => onSubmit(qrCode)}>
      <Input
        className="mb-2"
        placeholder="Enter the name of the network (SSID)"
        value={ssid}
        onChange={e => setSsid(e.target.value)}
      />
      <Input
        className="mb-2"
        placeholder="Enter the password of the network, if any"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Select
        disabled={!password}
        placeholder="Enter the encryption of the network, if any"
        value={encryption}
        onChange={e => setEncryption(e.target.value as 'WEP' | 'WPA' | 'None')}
      >
        {['WEP', 'WPA', 'None'].map(l => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </Select>
      <Button className="w-full mt-4">Generate</Button>
    </QRCodeForm>
  );
};
