// import type { TypedObject } from "@sanity/types";

export interface simpleBlogCard{
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: string; 
}

export interface fullBlog {
    currentSlug: string,
    title: string;
    content: never;
    titleImage: string;
}