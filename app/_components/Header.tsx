import Navigation from './Navigation';
import ProfileLogo from './ProfileLogo';

export default function Header() {
  return (
    <header className="border-b border-primary-2">
      <div className="flex justify-center items-center mx-auto">
        <Navigation />
        <ProfileLogo />
      </div>
    </header>
  );
}
