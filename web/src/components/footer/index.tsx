import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ExternalLinkIcon } from "lucide-react";

export default function Footer() {
  return (
    <section id="footer" className="w-full border-t p-3 md:p-5 lg:p-8">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 md:place-items-center">
        <div className="flex flex-col col-span-2 mb-3 md:mb-0">
          <div className="flex gap-3 items-center mb-3">
            <Image src="/logo.png" alt="CryptoKnights" width={30} height={30} />
            <h1 className="text-xl font-semibold">{siteConfig.name}</h1>
          </div>
          <p className="max-w-sm">{siteConfig.description}</p>

          <div className="text-center mt-2 mb-2 text-gray-400">
        Website design inspired by https://github.com/Sonicrypt/sonicrypt ✨
      </div>


        </div>
      </div>


    </section>
  );
}

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

const ExternalLink = ({ href, children }: ExternalLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-1 items-center hover:underline"
    >
      {children}
      <ExternalLinkIcon size={16} />
    </a>
  );
};
