import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
    *[_type == 'blog' && slug.current == '${slug}']{
      "currentSlug": slug.current,
      title,
      content,
      titleImage   
    }[0]`;
  const data = await client.fetch(query);
  return data;
}

// Fix: Updated function to conform to Next.js expectations
export default async function BlogArticle({ params }: { params: { slug: string } }) {
  const data: fullBlog = await getData(params.slug);

  if (!data) {
    return (
      <div className="text-center">
        <h1>Blog Not Found</h1>
      </div>
    );
  }

  return (
    <div className="my-8 flex flex-col items-center">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Bakhtawar - Blog
        </span>
        <span className="block mt-2 text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>
      <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt="titleImage"
        className="rounded-lg mt-8 border"
        priority
      />
      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}

// Required to define dynamic routes
export async function generateStaticParams() {
  const query = `*[_type == 'blog']{ "slug": slug.current }`;
  const blogs = await client.fetch(query);
  return blogs.map((blog: { slug: string }) => ({ slug: blog.slug }));
}
