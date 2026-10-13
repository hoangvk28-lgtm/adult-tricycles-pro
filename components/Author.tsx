import Image from "next/image";
import Link from "next/link";
import { type Author, hasPhoto } from "@/data/authors";

export function Avatar({ a, size }: { a: Author; size: number }) {
  if (hasPhoto(a)) {
    return <Image src={a.photo} alt={`Photo of ${a.name}`} width={size} height={size} className="shrink-0 rounded-full object-cover" style={{ width: size, height: size }} />;
  }
  const initials = a.name.split(" ").map((w) => w[0]).join("");
  return (
    <span aria-hidden="true" className="grid shrink-0 place-items-center rounded-full bg-ink font-display font-semibold text-paper" style={{ width: size, height: size, fontSize: size * 0.38 }}>
      {initials}
    </span>
  );
}

export function AuthorBox({ a }: { a: Author }) {
  return (
    <aside aria-label="About the author" className="mt-14 flex gap-5 border-y border-line-2 py-7">
      <Avatar a={a} size={88} />
      <div>
        <p className="kicker">About the author</p>
        <p className="mt-1 font-display text-[1.4rem] font-semibold">
          <Link href={`/author/${a.slug}/`} prefetch={false} className="text-ink no-underline hover:underline">{a.name}</Link>
        </p>
        <p className="text-[0.95rem] text-ink-3">{a.role}</p>
        <p className="mt-2 text-[1.0625rem] leading-relaxed text-ink-2">{a.bio[0]}</p>
      </div>
    </aside>
  );
}
