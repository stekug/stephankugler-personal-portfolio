import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="border-b border-primary-2">
      <div className="flex justify-center items-center mx-auto">
        <Navigation />
      </div>
    </header>
  );
}
