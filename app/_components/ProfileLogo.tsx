import Image from 'next/image';
import Link from 'next/link';
import profilePic from '@/public/sk-profile-1.jpeg';

export default function ProfileLogo() {
  return (
    <div className="gap-10">
      <Link href="/" className="flex items-center z-10 rounded-full mt-2 py-5">
        <Image
          className="rounded-full shadow-[0px_0px_60px_rgba(50,60,90,0.5)]"
          src={profilePic}
          alt="Profile picture of Stephan Kugler"
          height="260"
          width="260"
          quality={80}
        />
      </Link>
    </div>
  );
}
