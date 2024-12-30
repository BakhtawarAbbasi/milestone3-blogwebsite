import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
    apiVersion: "2023-05-03",
    dataset: "production",
    projectId: "aedtb60l",
    useCdn: false, // Set to true if you want cached data
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}
