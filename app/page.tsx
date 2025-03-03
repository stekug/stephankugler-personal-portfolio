import SectionModul from "./_components/SectionModul";
import ProfileLogo from "./_components/ProfileLogo";
import ProfileText from "./_components/ProfileText";
import Work from "./_components/Work";

export default function page() {
  return (
    <>
      <SectionModul customBg="bg-custom1">
        <ProfileLogo />
      </SectionModul>
      <SectionModul customBg="bg-custom2">
        <ProfileText />
      </SectionModul>
      <SectionModul customBg="bg-custom1">
        <Work />
      </SectionModul>
    </>
  );
}
