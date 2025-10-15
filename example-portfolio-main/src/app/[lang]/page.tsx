import Image from "next/image";
import { getDictionary } from "../i18n/dictionaries";
import { Lang, languages } from "../i18n/config";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="font-sans flex justify-center">
      <LanguageSwitcher currentLang={lang} />
      <main className="grid grid-cols-12 container mt-20 gap-10">
        <span className="flex items-center justify-center  col-span-3 sm:col-span-4 lg:col-span-3 row-span-2 bg-white rounded-2xl overflow-hidden">
          <Image src="/avatar.jpg" alt="avatar" width={300} height={300} />
        </span>

        <p className="p-5 mb:text-2xl lg:text-3xl text-base text-white col-span-9 rounded-2xl bg-foreground ">
          {dict.intro}
        </p>

        <ul className="flex items-center col-span-9 gap-4 p-5  rounded-2xl bg-foreground sm:gap-4">
          <li className="text-white mb:text-2xl lg:text-3xl text-base sm:gap-4  -ml-2 font-bold border-r ">
            {dict.sections.interests.title}
          </li>
          {dict.sections.interests.items.map((item) => (
            <li
              key={item}
              className="flex items-center bg-background rounded-lg text-white text-sm px-4 py-2 -ml-2 sm:ml-0 lg:ml-25"
            >
              {item}
            </li>
          ))}
        </ul>

        <article className="col-span-6 rounded-2xl bg-foreground p-10">
          <section className="flex items-center justify-between border-b border-b-grey pb-10">
            <header className="flex flex-col ">
              <h3 className="mb:text-2xl lg:text-3xl text-base font-bold sm:px-5  text-white">
                {dict.sections.experience.freelance.title}
              </h3>
              <p className="text-grey text-sm">
                {dict.sections.experience.freelance.role}
              </p>
            </header>
            <span className="bg-background rounded-lg text-white text-sm p-4">
              {dict.sections.experience.freelance.period}
            </span>
          </section>
          <ul className="list-disc list-inside text-white text-sm mt-6">
            {dict.sections.experience.freelance.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>

        <article className="col-span-6 rounded-2xl bg-foreground p-10">
          <section className="flex items-center justify-between border-b border-b-grey pb-10">
            <header className="flex flex-col">
              <h3 className="mb:text-2xl lg:text-3xl text-base  font-bold text-white">
                {dict.sections.experience.meetzed.title}
              </h3>
              <p className="text-grey text-sm">
                {dict.sections.experience.meetzed.role}
              </p>
            </header>
            <span className="bg-background rounded-lg text-white text-sm p-4">
              {dict.sections.experience.meetzed.period}
            </span>
          </section>
          <ul className="list-disc list-inside text-white text-sm mt-6">
            {dict.sections.experience.meetzed.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>

        <ul className="flex gap-4 items-center col-span-6 rounded-2xl bg-foreground p-10">
          <li className="text-white text-xl font-bold border-r pr-4">
            {dict.sections.designTools}
          </li>
          <li className="flex items-center bg-[#360300] rounded-lg font-bold text-[#da9f4c] text-xl px-4 py-2">
            Ai
          </li>
          <li className="flex items-center bg-[#0b172a] rounded-lg font-bold text-[#74aaf2] text-xl px-4 py-2">
            Ps
          </li>
          <li className="flex items-center bg-[#59051e] rounded-lg font-bold text-[#d84b6f] text-xl px-4 py-2">
            Id
          </li>
          <li className="flex items-center bg-[#480d30] rounded-lg font-bold text-[#de6ff0] text-xl px-4 py-2">
            Xd
          </li>
        </ul>

        <section className="flex flex-col gap-4 items-center col-span-6 row-span-3 rounded-2xl bg-foreground p-10">
          <article className="flex items-center justify-between w-full border-b border-b-grey pb-8">
            <span className="flex flex-col">
              <h2 className="text-white mb:text-2xl lg:text-3xl text-base font-bold">
                {dict.sections.education.highSchool.title}
              </h2>
              <p className="text-grey text-lg">
                {dict.sections.education.highSchool.field}
              </p>
              <p className="text-grey text-sm">
                {dict.sections.education.highSchool.location}
              </p>
            </span>
            <span className="bg-background rounded-lg text-white text-sm p-4">
              {dict.sections.education.highSchool.period}
            </span>
          </article>

          <article className="flex items-center justify-between w-full border-b border-b-grey pb-8 ">
            <span className="flex flex-col">
              <h2 className="text-white mb:text-2xl lg:text-3xl text-base font-bold">
                {dict.sections.education.diploma.title}
              </h2>
              <p className="text-grey text-lg sm:text-base">
                {dict.sections.education.diploma.field}
              </p>
              <p className="text-grey text-sm">
                {dict.sections.education.diploma.location}
              </p>
            </span>
            <span className="bg-background rounded-lg text-white text-sm p-4">
              {dict.sections.education.diploma.period}
            </span>
          </article>

          <article className="flex items-center justify-between w-full">
            <span className="flex flex-col">
              <h2 className="text-white mb:text-2xl lg:text-3xl text-base font-bold">
                {dict.sections.education.graduation.title}
              </h2>
              <p className="text-grey text-lg">
                {dict.sections.education.graduation.field}
              </p>
              <p className="text-grey text-sm">
                {dict.sections.education.graduation.location}
              </p>
            </span>
            <span className="bg-background rounded-lg text-white text-sm p-4">
              {dict.sections.education.graduation.period}
            </span>
          </article>
        </section>

        <ul className="flex gap-2  items-center col-span-6 rounded-2xl bg-foreground p-10 justify-center sm:justify-start">
          <li className="text-white font-bold border-r pr-4 text-sm sm:text-base md:text-lg lg:text-2xl">
            {dict.sections.editingTools}
          </li>
          <li className="flex items-center bg-[#000155] rounded-lg font-bold text-[#a0a0f9] px-4 py-2 text-sm sm:text-base">
            Ae
          </li>
          <li className="flex items-center bg-[#02035e] rounded-lg font-bold text-[#9997f9] px-4 py-2  text-sm sm:text-base">
            Pr
          </li>
        </ul>

        <ul className="flex gap-4 items-center   col-span-6 rounded-2xl bg-foreground p-10 justify-center sm:justify-start">
          <li className="text-white sm:text-base text-sm md:text-xl lg:text-2xl font-bold border-r pr-4">
            {dict.sections.languages}
          </li>
          <li className="lg:text-4xl sm:text-2xl">🇧🇴</li>
          <li className="lg:text-4xl sm:text-2xl">🇬🇧</li>
          <li className="lg:text-4xl sm:text-2xl">🇺🇸</li>
        </ul>
      </main>
    </div>
  )