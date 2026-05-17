import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2024-01-01";

export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: process.env.SANITY_API_TOKEN,
    })
  : null;

const builder = projectId ? imageUrlBuilder({ projectId, dataset }) : null;
export const urlFor = (source: Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0]) =>
  builder?.image(source);

// Blog queries
export async function getBlogCategories() {
  if (!client) return [];
  return client.fetch(
    `*[_type == "blogCategory"] | order(title asc) {
      _id, title, slug
    }`
  );
}

export async function getFeaturedPost() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc)[0] {
      title, slug, excerpt, label,
      "coverImage": coverImage.asset->url
    }`
  );
}

export async function getBlogPosts() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id, title, slug, excerpt, publishedAt, label,
      "category": category->{ _id, title, slug },
      "author": author->{ name, role },
      "coverImage": coverImage.asset->url,
      "readTime": round(length(pt::text(body)) / 5 / 180)
    }`
  );
}

export async function getBlogPost(slug: string) {
  if (!client) return null;
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id, title, slug, excerpt, publishedAt, label, body,
      "category": category->{ _id, title, slug },
      "author": author->{ name, role, image },
      "coverImage": coverImage.asset->url,
      "reportUrl": report.asset->url,
      "readTime": round(length(pt::text(body)) / 5 / 180)
    }`,
    { slug }
  );
}

export async function getRelatedPosts(slug: string, categoryId: string) {
  if (!client) return [];
  return client.fetch(
    `*[_type == "blogPost" && category._ref == $categoryId && slug.current != $slug] | order(publishedAt desc)[0...3] {
      _id, title, slug, publishedAt,
      "category": category->{ _id, title, slug },
      "author": author->{ name }
    }`,
    { slug, categoryId }
  );
}

// Customer story queries
export async function getFeaturedCaseStudy() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "caseStudy" && featured == true][0] {
      _id, title, slug, client, industry, location, summary, metrics,
      quote, quoteName, quoteRole,
      "coverImage": coverImage.asset->url
    }`
  );
}

export async function getCaseStudies() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "caseStudy"] | order(_createdAt desc) {
      _id, title, slug, client, industry, location, summary, metrics,
      "logo": logo.asset->url,
      "coverImage": coverImage.asset->url
    }`
  );
}

export async function getCaseStudy(slug: string) {
  if (!client) return null;
  return client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0] {
      _id, title, slug, client, industry, location, summary, metrics, body,
      quote, quoteName, quoteRole,
      "logo": logo.asset->url,
      "coverImage": coverImage.asset->url
    }`,
    { slug }
  );
}

// Careers queries
export async function getOpenRoles() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "openRole" && isOpen == true] | order(_createdAt asc) {
      _id, title, slug, department, location, type, level
    }`
  );
}

// Press queries
export async function getPressItems() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "pressItem"] | order(publishedAt desc) {
      _id, title, publication, publishedAt, url, excerpt
    }`
  );
}

// Integration queries
export async function getIntegrationCategories() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "integrationCategory"] | order(order asc) {
      _id, title, slug, description
    }`
  );
}

export async function getIntegrations() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "integration"] | order(order asc) {
      _id, name, tagline, status, statusLabel,
      featured, featuredTitle, featuredDescription, marketplaceSlug,
      logoText,
      "logoImage": logoImage.asset->url,
      "category": category->{ _id, title, slug }
    }`
  );
}

// Marketplace queries
export async function getPartnerCategories() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "partnerCategory"] | order(order asc) {
      _id, title, slug, description
    }`
  );
}

export async function getPartners() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "partner"] | order(order asc) {
      _id, name, status, description, url,
      featured, featuredTitle, featuredDescription,
      logoText,
      "logo": logo.asset->url,
      "category": category->{ _id, title, slug }
    }`
  );
}

export async function getAddons() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "addon"] | order(name asc) {
      _id, name, markets, tier, price, description,
      "icon": icon.asset->url
    }`
  );
}

export async function getProgrammes() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "programme"] | order(name asc) {
      _id, name, author, specialty, duration, price, description
    }`
  );
}

// Clinical evidence queries
export async function getClinicalStudies() {
  if (!client) return null;
  return client.fetch(
    `*[_type == "clinicalStudy"] | order(order asc) {
      _id, phase, title, journal, authors, sampleSize, pdfUrl, studyStatus, description
    }`
  );
}
