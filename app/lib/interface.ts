import type { TypedObject } from "@sanity/types";

export interface simpleBlogCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: string; 
}

export interface fullBlog {
    currentSlug: string,
    title: string;
    content: TypedObject | never; // Ensure 'content' type matches with what you receive from Sanity
    titleImage: string;
}
