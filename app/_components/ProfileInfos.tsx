import ProfileLogo from './ProfileLogo';

export default function ProfileInfos() {
  return (
    <section className="flex flex-col justify-center items-center pt-24">
      <ProfileLogo />
      <p className="max-w-md text-4xl text-center font-normal px-3">
        Hello, my name is{' '}
        <span className="font-black text-accentGreen-1 uppercase">
          Stephan Kugler.
        </span>{' '}
        I <span className="font-black text-accentPink-1">create</span>,{' '}
        <span className="font-black text-accentPink-1">code</span> and{' '}
        <span className="font-black text-accentPink-1">enjoy</span> every{' '}
        <span className="font-black text-accentPink-1">bit</span> of it!
      </p>
    </section>
  );
}
