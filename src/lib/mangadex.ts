import { Mangas } from "@/types/mangas";
import { BASE_URL_API } from "./base_url";

const limit = 10;

const headers = {
  "User-Agent": "ZentoraMangaApp/1.0.0 (contact: ikhsan@example.com)",
  Accept: "application/json",
};

export async function getMangas(page: number = 1) {
  const offset = (page - 1) * limit;

  try {
    const res = await fetch(
      `${BASE_URL_API}/manga?limit=${limit}&offset=${offset}&includes[]=cover_art&order[followedCount]=desc`,
      {
        headers,

        // cache 1 menit
        next: {
          revalidate: 60,
        },
      },
    );

    if (!res.ok) {
      throw new Error("Failed fetch mangas");
    }

    const data: Mangas = await res.json();

    return {
      error: false,
      response: data,
    };
  } catch (e) {
    console.error(e);

    return {
      error: true,
      response: null,
    };
  }
}

export async function getManga(mangaId: string) {
  try {
    const res = await fetch(
      `${BASE_URL_API}/manga/${mangaId}?includes[]=cover_art&includes[]=author&includes[]=artist`,
      {
        headers,

        // detail manga jarang berubah
        next: {
          revalidate: 3600,
        },
      },
    );

    if (!res.ok) {
      throw new Error("Failed fetch manga");
    }

    const data = await res.json();

    return {
      error: false,
      response: data,
    };
  } catch (e) {
    console.error(e);

    return {
      error: true,
      response: null,
    };
  }
}

export function pickBestChapters(chapters: any[]) {
  const priority = ["id", "en", "ja"];

  const map = new Map();

  for (const ch of chapters) {
    const key = `${ch.attributes.chapter}`;

    if (!map.has(key)) {
      map.set(key, ch);
      continue;
    }

    const current = map.get(key);

    const currentLang = priority.indexOf(current.attributes.translatedLanguage);
    const newLang = priority.indexOf(ch.attributes.translatedLanguage);

    if (newLang < currentLang) {
      map.set(key, ch);
    }
  }

  return Array.from(map.values());
}

export async function getChapters(
  mangaId: string,
  page: number = 1,
  limit: number = 10,
) {
  const offset = (page - 1) * limit;
  try {
    const res = await fetch(
      `${BASE_URL_API}/manga/${mangaId}/feed?limit=${limit}&offset=${offset}&translatedLanguage[]=en&order[chapter]=asc`,
      {
        headers,

        // detail manga jarang berubah
        next: {
          revalidate: 3600,
        },
      },
    );

    if (!res.ok) {
      throw new Error("Failed fetch manga");
    }

    const data = await res.json();

    return {
      error: false,
      response: data,
    };
  } catch (e) {
    console.error(e);

    return {
      error: true,
      response: null,
    };
  }
}

export async function getChapter(chapterId: string) {
  try {
    const res = await fetch(`${BASE_URL_API}/at-home/server/${chapterId}`, {
      headers,

      // detail manga jarang berubah
      next: {
        revalidate: 3600,
      },
    });

    if (!res.ok) {
      throw new Error("Failed fetch manga");
    }

    const data = await res.json();

    return {
      error: false,
      response: data,
    };
  } catch (e) {
    console.error(e);

    return {
      error: true,
      response: null,
    };
  }
}

export async function search(q: string, page: number = 1, limit: number = 10) {
  const offset = (page - 1) * limit;
  try {
    const res = await fetch(
      `${BASE_URL_API}/manga?title=${encodeURIComponent(q)}&limit=${limit}&offset=${offset}&includes[]=cover_art`,
      {
        headers,

        // detail manga jarang berubah
        next: {
          revalidate: 3600,
        },
      },
    );

    if (!res.ok) {
      throw new Error("Failed fetch manga");
    }

    const data = await res.json();

    return {
      error: false,
      response: data,
    };
  } catch (e) {
    console.error(e);

    return {
      error: true,
      response: null,
    };
  }
}

export async function getCategories() {
  try {
    const res = await fetch(`${BASE_URL_API}/manga/tag`, {
      headers,

      // detail manga jarang berubah
      next: {
        revalidate: 3600,
      },
    });

    if (!res.ok) {
      throw new Error("Failed fetch manga");
    }

    const data = await res.json();

    return {
      error: false,
      response: data,
    };
  } catch (e) {
    console.error(e);

    return {
      error: true,
      response: null,
    };
  }
}
