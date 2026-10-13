import { Breadcrumbs } from "@/components/ui";

export function StaticPage({ title, path, children }: { title: string; path: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-8">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: title, path }]} />
      <h1 className="mt-5 text-[2.3rem] font-bold sm:text-[2.75rem]">{title}</h1>
      <div className="article mt-6">{children}</div>
    </div>
  );
}
