import fs from "node:fs";
import path from "node:path";

export interface Author {
  slug: string;
  name: string;
  role: string;
  /** Square photo under /public. Falls back to initials if the file is missing. */
  photo: string;
  bio: string[];
  focus: string[];
}

// Bio states only what the role is and how he works. Do not add credentials,
// riding history or qualifications until they are confirmed by the site owner.
export const AUTHORS: Author[] = [
  {
    slug: "henry-clement",
    name: "Henry Clement",
    role: "Editor, Adult Tricycles Pro",
    photo: "/images/authors/henry-clement.webp",
    bio: [
      "Henry Clement is the editor of Adult Tricycles Pro. He writes and updates the site's buying guides on adult tricycles, electric trikes, folding and recumbent models, and the accessories that go with them.",
      "His guides are research-based: he works from manufacturer specification sheets, owner's manuals and published safety and health guidance, and he says so when a figure is not published rather than estimating it. Unless an article explicitly states otherwise, the products he covers have not been ridden or tested hands-on.",
    ],
    focus: ["Choosing a first adult tricycle", "Electric trike batteries, motors and charging", "Fit, step-through height and weight limits", "Buying for an older parent or relative"],
  },
];

export const DEFAULT_AUTHOR = AUTHORS[0];

export function getAuthor(slug: string) {
  return AUTHORS.find((a) => a.slug === slug);
}

export function hasPhoto(a: Author) {
  return fs.existsSync(path.join(process.cwd(), "public", a.photo));
}
