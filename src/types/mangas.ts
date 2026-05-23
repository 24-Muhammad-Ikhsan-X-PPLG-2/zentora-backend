export interface Mangas {
  result: string;
  response: string;
  data: Daum[];
}

export interface Daum {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationship[];
}

export interface Attributes {
  title: Title;
  altTitles: AltTitle[];
  description: Description;
  isLocked: boolean;
  links: Links;
  officialLinks: any;
  originalLanguage: string;
  lastVolume: string;
  lastChapter: string;
  publicationDemographic: any;
  status: string;
  year: number;
  contentRating: string;
  tags: Tag[];
  state: string;
  chapterNumbersResetOnNewVolume: boolean;
  createdAt: string;
  updatedAt: string;
  version: number;
  availableTranslatedLanguages: string[];
  latestUploadedChapter: string;
}

export interface Title {
  "ko-ro": string;
}

export interface AltTitle {
  ko?: string;
  en?: string;
  "ko-ro"?: string;
  "ja-ro"?: string;
  ru?: string;
  ja?: string;
  zh?: string;
  "zh-hk"?: string;
  la?: string;
  tr?: string;
  "pt-br"?: string;
  ro?: string;
  uk?: string;
  fa?: string;
  hi?: string;
  ne?: string;
  id?: string;
  ka?: string;
  ar?: string;
  bn?: string;
  he?: string;
  hu?: string;
  ta?: string;
  vi?: string;
}

export interface Description {
  de: string;
  en: string;
  fr: string;
  id: string;
  it: string;
  ja: string;
  ka: string;
  ko: string;
  pl: string;
  ru: string;
  th: string;
  zh: string;
  "es-la": string;
  "pt-br": string;
  "zh-hk": string;
}

export interface Links {
  al: string;
  ap: string;
  kt: string;
  mu: string;
  mal: string;
  raw: string;
}

export interface Tag {
  id: string;
  type: string;
  attributes: Attributes2;
  relationships: any[];
}

export interface Attributes2 {
  name: Name;
  description: Description2;
  group: string;
  version: number;
}

export interface Name {
  en: string;
}

export interface Description2 {}

export interface Relationship {
  id: string;
  type: string;
  attributes?: Attributes3;
  related?: string;
}

export interface Attributes3 {
  fileName: string;
  description: string;
  volume: string;
  locale: string;
  createdAt: string;
  updatedAt: string;
  version: number;
}
