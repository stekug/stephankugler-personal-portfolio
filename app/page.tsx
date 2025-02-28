import SectionModul from './_components/SectionModul';
import ProfileLogo from './_components/ProfileLogo';
import ProfileText from './_components/ProfileText';

export default function page() {
  return (
    <>
      <SectionModul customBg="bg-custom1">
        <ProfileLogo />
      </SectionModul>
      <SectionModul customBg="bg-custom2">
        <ProfileText />
      </SectionModul>
    </>
  );
}
