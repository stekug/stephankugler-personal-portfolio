import ProfileLogo from './ProfileLogo';
import ProfileText from './ProfileText';

export default function SectionProfileInfos() {
  return (
    <section className="flex flex-col justify-center items-center pt-24 bg-custombg1">
      <ProfileLogo />
      <ProfileText />
    </section>
  );
}
