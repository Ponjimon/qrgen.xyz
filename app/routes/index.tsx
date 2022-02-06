import { AwesomeQRCode } from '@awesomeqr/react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { FC, useCallback, useState } from 'react';
import { QRCodeGeneratorText } from '../components/QRCodeGeneratorText';
import { QRCodeGeneratorWifi } from '../components/QRCodeGeneratorWifi';

const QRCodeTypes: Array<{
  label: string;
  component: FC<{ onSubmit: (value: string) => void }>;
}> = [
  {
    label: 'Text',
    component: QRCodeGeneratorText,
  },
  {
    label: 'WiFi',
    component: QRCodeGeneratorWifi,
  },
];

export default function Index() {
  const [value, setValue] = useState('');
  const onSubmit = useCallback((value: string) => setValue(value), []);

  return (
    <div className="flex flex-col items-center w-screen h-screen bg-slate-200">
      <div className="w-full max-w-md px-2 py-4 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 rounded-xl">
            {QRCodeTypes.map(({ label }) => (
              <Tab
                key={label}
                className={({ selected }) =>
                  clsx(
                    'w-full py-2.5 text-sm leading-5 font-medium rounded-lg',
                    selected
                      ? 'bg-white shadow'
                      : 'bg-white/[0.5] text-slate-500'
                  )
                }
              >
                {label}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {QRCodeTypes.map(({ label, component: Component }) => (
              <Tab.Panel key={label} className="bg-white shadow rounded-xl p-3">
                {typeof Component === 'function' ? (
                  <Component onSubmit={onSubmit} />
                ) : (
                  Component
                )}
              </Tab.Panel>
            ))}
            <div className="bg-white shadow rounded-xl mt-2 relative">
              <div className="pb-[200px]" />
              <div className="absolute w-full h-full translate-y-[-200px]">
                <AwesomeQRCode
                  options={{
                    text: value,
                    components: {
                      data: { scale: 1 },
                      timing: { scale: 1 },
                      alignment: { scale: 1 },
                      cornerAlignment: { scale: 1 },
                    },
                  }}
                />
              </div>
            </div>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
