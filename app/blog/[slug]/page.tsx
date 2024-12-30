import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 30;

async function getData(slug: string) {
    const query = `
        *[_type == 'blog' && slug.current == $slug]{
            "currentSlug": slug.current,
            title,
            content,
            titleImage,   
        }[0]
    `;
    try {
        const data = await client.fetch(query, { slug });
        if (!data) {
            throw new Error(`No blog found for slug: ${slug}`);
        }
        return data;
    } catch (error) {
        console.error('Error fetching blog data:', error);
        return null;
    }
}

export default async function BlogArticle({ params }: { params: { slug: string } }) {
    const data: fullBlog | null = await getData(params.slug);

    if (!data) {
        return <div>Blog not found</div>; // Handle missing data
    }

    return (
        <div className="my-8 flex flex-col items-center">
            <h1>
                <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">Bakhtawar - Blog</span>
                <span className="block mt-2 text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
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
