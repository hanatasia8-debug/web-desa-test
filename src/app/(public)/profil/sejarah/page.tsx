import type { Metadata } from "next";
import { DesaService } from "@/entities/desa/api/desa.service";

export const metadata: Metadata = {
  title: "Sejarah Desa Pringgodani",
  description: "Halaman lengkap sejarah Desa Pringgodani.",
};

export default async function SejarahPage() {
  const { profile } = await DesaService.getProfileWithStats();
  const historyText = profile?.historyText ?? "Sejarah desa belum tersedia.";

  return (
    <main className="min-h-screen bg-[#f8faf6] text-[#191c1b]">
      <section className="relative overflow-hidden bg-[#064e3b] pt-32 pb-20 text-[#ffffff] md:pt-48 md:pb-28">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay grayscale">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8x3sb556cv5xseT2YaaZZRaR-x64kWZ-RbL-uKGvPYu_zX0_KFRBMXS-_CGGqgLT7FlfFGmo4MFmAEagOtlIz8aEBqcc552HST4aLdmEluRq5MUcoNKz-p8Ro-EhV3JkiTSPsR_MPjlIstGKwLIWFWM_tubRopQEnMKpxoJEgdSFu6ByEkKV3sq6lZKzWSVA4F-71MgbwICGLZS4W9SGWaBREoDg-fOaLYPRQjQxKZKMZjUJYROM')",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-10">
          <span className="mb-6 inline-block rounded-full bg-[#80bea6]/20 px-4 py-1 text-sm tracking-[0.2em] text-[#dff6eb] uppercase">
            Napak Tilas Sejarah
          </span>
          <h1 className="mb-6 text-4xl leading-tight font-bold text-white sm:text-5xl">
            Hikayat Desa Pringgodani
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#e7f5ee]">
            Menelusuri jejak peradaban yang bermula dari hamparan bambu hingga
            menjadi pusat kemandirian masyarakat.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#f8faf6] to-transparent" />
      </section>

      <article className="bg-[#f8faf6] py-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
          <div className="mb-12">
            <h2 className="mb-6 text-3xl font-semibold text-[#003527]">
              Asal-Usul dan Masa Perintisan
            </h2>
            <p className="mb-6 text-base leading-8 text-[#404944]">
              Nama <strong>Pringgodani</strong> secara etimologis berasal dari
              dua kata dalam bahasa Jawa Kuno: <em>Pring</em> yang berarti
              bambu, dan <em>Dani</em> yang merujuk pada keindahan atau
              pemberian yang baik. Sejarah mencatat bahwa pada awal abad ke-19,
              wilayah ini merupakan hutan bambu lebat yang belum terjamah.
            </p>
            <p className="text-base leading-8 text-[#404944]">{historyText}</p>
          </div>

          <figure className="mb-12">
            <img
              alt="Ilustrasi perintisan Desa Pringgodani"
              className="h-96 w-full rounded-xl object-cover shadow-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCofeWxuhYu8D9J7NrtFlNvS-Cy_7fn5dtTB9zducDGQuEEZrXXtkt3Wk-zKJ-m-1UeNdYqWsWT3GRUsHQO_s0ERS3bkss-C9RRk-s9yez7Fn_1W-Mp-A_rBbJx1pww8lAedpyARMXSt8wVTMUSb302HspuigBAHvdKIXvyFkKTNtI_jsrq5dcarWYyWLrX9nGrAwGBHBHCBHl0R-El8fdxpyfP34c7jFcW-xZ1L8VahOhAofgu844"
            />
            <figcaption className="mt-4 text-center text-sm text-[#404944] italic">
              Representasi visual pemukiman awal di tengah hutan bambu
              legendaris.
            </figcaption>
          </figure>

          <div className="mb-12">
            <h2 className="mb-6 text-3xl font-semibold text-[#003527]">
              Masa Kolonial dan Kejayaan Kerajinan
            </h2>
            <p className="text-base leading-8 text-[#404944]">
              Memasuki pertengahan abad ke-19, Pringgodani mulai dikenal oleh
              pemerintah kolonial Belanda karena kualitas bambu dan kemahiran
              penduduknya dalam mengolah serat alam. Desa ini bertransformasi
              menjadi sentra kerajinan bambu terkemuka.
            </p>
          </div>

          <blockquote className="mb-12 rounded-r-lg border-l-4 border-[#003527] bg-[#e7e9e5] py-4 pl-6 text-[#003527] italic">
            “Menghormati sejarah bukan berarti terpaku pada masa lalu, melainkan
            menggunakan fondasi masa lalu untuk membangun masa depan yang lebih
            kokoh.”
          </blockquote>
        </div>
      </article>

      <footer className="border-t border-[#707974]/30 bg-[#e7e9e5]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 md:grid-cols-4 lg:px-10">
          <div>
            <div className="mb-4 text-2xl font-bold text-[#003527]">
              Desa Pringgodani
            </div>
            <p className="text-sm leading-7 text-[#404944]">
              Pusat Pelayanan Digital & Informasi Resmi Pemerintah Desa
              Pringgodani.
            </p>
          </div>
          <div>
            <h5 className="mb-4 font-bold text-[#003527]">Navigasi</h5>
            <ul className="space-y-2 text-sm text-[#404944]">
              <li>
                <a className="underline hover:text-[#003527]" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="font-bold text-[#003527] underline" href="#">
                  Napak Tilas
                </a>
              </li>
              <li>
                <a className="underline hover:text-[#003527]" href="#">
                  Potensi Desa
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 font-bold text-[#003527]">Tautan Penting</h5>
            <ul className="space-y-2 text-sm text-[#404944]">
              <li>
                <a className="underline hover:text-[#003527]" href="#">
                  Admin Login
                </a>
              </li>
              <li>
                <a className="underline hover:text-[#003527]" href="#">
                  Kontak Kami
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 font-bold text-[#003527]">Kontak</h5>
            <p className="text-sm leading-7 text-[#404944]">
              Jl. Raya Pringgodani No. 1, Purwodadi, Indonesia
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
