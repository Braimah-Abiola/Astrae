import { client } from "@/sanity/lib/client";

export async function getPosts() {
  const query = `
      *[_type == "post"] {
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      }`;
  const data = await client.fetch(query);
  return data;
}

export async function getPost(slug: string) {
  const query = `
    *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    body,
    _id,
    tags[]->{
    _id,
    slug,
    name
    }
}`;

  const post = await client.fetch(query);
  return post;
}