import { json, type RequestHandler } from "@sveltejs/kit";

import english from "./words/english.json"

export const GET: RequestHandler = async ({ url }) => {
  const limit = Number(url.searchParams.get("limit") ?? 100)
  const words = english.words.slice(0, limit).sort(() => 0.5 - Math.random())
  return json(words)
}