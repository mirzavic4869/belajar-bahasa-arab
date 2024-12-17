import Image from 'next/image';

export default function Home() {
  return (
    <main className="mx-auto flex flex-col md:flex-row items-center h-screen md:h-[500px] justify-center md:px-10 p-4 max-w-7xl">
      <div className="flex flex-col">
        <h1 className="block bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent font-extrabold text-4xl sm:text-5xl text-center md:text-left lg:text-6xl tracking-tight animate-text md:w-2/3">
          Akhirnya Bisa Bahasa Arab
        </h1>
        <p className="mt-4 max-w-3xl md:w-2/3 sm:text-xl text-center md:text-left sm:leading-relaxed">Buat kamu yang belum pernah belajar bahasa arab dari dasar, bisa mulai disini.</p>
      </div>
      <div className="flex justify-center">
        <Image src="/hero.png" width={200} height={200} alt="hero" />
      </div>
    </main>
  );
}
