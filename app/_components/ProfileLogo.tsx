import Image from 'next/image';
import Link from 'next/link';
import profilePic from '@/public/sk-profile-1.jpeg';

export default function ProfileLogo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10 rounded-full">
      <Image
        className="rounded-full"
        src={profilePic}
        alt="Profile picture of Stephan Kugler"
        height="300"
        width="300"
        quality={80}
      />
    </Link>
  );
}
