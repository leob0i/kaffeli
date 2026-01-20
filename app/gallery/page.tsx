import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Galleria",
  description: "Kaffilan galleria – tunnelma, herkut ja kahvihetket.",
};

export default function GalleryPage() {
  return (
    <div className="bg-zinc-50">
      <div className="relative isolate overflow-hidden border-b border-white/10 bg-black">

  {/* Taustakuva + tumma overlay */}
  <div className="absolute inset-0 -z-10">
  <Image
    src="/images/kaffila.counter.jpg"
    alt="Kaffila – galleria"
    fill
    className="object-cover"
    priority
    sizes="100vw"
  />
  <div className="absolute inset-0 bg-black/70" />
</div>


  <Container className="py-10 sm:py-14">
    <SectionHeading
      kicker="Kaffila"
      title="Galleria"
      description="Tunnelmia, herkkuja ja kahvihetkiä Kaffilassa. Lisää kuvia ja tunnelmia pääset katsomaan meidän somekanavista oikealla yläkulmasta."
      variant="dark"
    />
    <div className="mt-6">
      <Link
        href="/"
        className="text-sm font-semibold text-white underline underline-offset-4 decoration-white/30 hover:decoration-white"
      >
        ← Takaisin etusivulle
      </Link>
    </div>
  </Container>
</div>


      <Container className="py-10 sm:py-14">
        <GalleryGrid count={20} />
      </Container>
    </div>
  );
}
