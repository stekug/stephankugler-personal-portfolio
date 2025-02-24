import Image from 'next/image';
import Link from 'next/link';
import profilePic from '@/public/sk-profile-1.jpeg';

export default function ProfileLogo() {
  return (
    <div className="gap-10">
      <Link href="/" className="flex items-center z-10 rounded-full mt-2 py-5">
        <Image
          className="rounded-full shadow-md shadow-primary-2"
          src={profilePic}
          alt="Profile picture of Stephan Kugler"
          height="350"
          width="350"
          quality={80}
        />
      </Link>
    </div>
  );
}
