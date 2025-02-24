import ProfileLogo from './ProfileLogo';

export default function ProfileInfos() {
  return (
    <section className="flex flex-col justify-center items-center">
      <ProfileLogo />
      <p>
        Hello, my name is <span>STEPHAN KUGLER.</span> I <span>create</span>,{' '}
        <span>code</span> and <span>enjoy</span>
        every <span>bit</span> of it!
      </p>
    </section>
  );
}
