import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  customBg: 'bg-custom1' | 'bg-custom2';
}

export default function SectionModul({ children, customBg }: Props) {
  return (
    <section
      className={`flex flex-col justify-center items-center pt-24 ${customBg}`}
    >
      {children}
    </section>
  );
}
