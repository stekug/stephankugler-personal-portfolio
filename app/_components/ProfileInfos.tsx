import ProfileLogo from './ProfileLogo';
import ProfileText from './ProfileText';

export default function ProfileInfos() {
  return (
    <section className="flex flex-col justify-center items-center pt-24">
      <ProfileLogo />
      <ProfileText />
    </section>
  );
}
