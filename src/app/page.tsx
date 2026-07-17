import Image from "next/image";
import Card from "@/components/Card";
import PhoneForm from "@/components/PhoneForm";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-3 py-14">
      <Card>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/EDD9D60E-9FDD-42E0-B2B5-EB0029539B97.jpeg"
              alt="Cat staring intensely"
              width={140}
              height={140}
              className="rounded-2xl object-cover shadow-lg"
              priority
            />

            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-2xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                Pindah WhatsApp Aja Ga Si?
              </h1>
              <p className="text-base text-white/40">hehehehehehehehe</p>
            </div>
          </div>

          <PhoneForm />
        </div>
      </Card>
    </main>
  );
}
