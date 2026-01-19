import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Galleria",
  description: "Kaffilan galleria – tunnelma, herkut ja kahvihetket.",
};

export default function GalleryPage() {
  return (
    <div className="bg-zinc-50">
      <div className="border-b border-zinc-200 bg-white">
        <Container className="py-10 sm:py-14">
          <SectionHeading
            kicker="Kaffila"
            title="Galleria"
            description="Klikkaa kuvaa avataksesi sen isompana. Lisää/poista kuvia nimeämällä tiedostot 01.jpg, 02.jpg jne."
          />
          <div className="mt-6">
            <Link
              href="/"
              className="text-sm font-semibold text-zinc-900 underline underline-offset-4"
            >
              ← Takaisin etusivulle
            </Link>
          </div>
        </Container>
      </div>

      <Container className="py-10 sm:py-14">
        <GalleryGrid count={16} />
      </Container>
    </div>
  );
}
