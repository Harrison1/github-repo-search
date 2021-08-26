export interface SVGProps {
  size?: string
  fill?: string
  stroke?: string
  strokeWidth?: string
}

export enum Sort {
  best = 'Best match',
  mostStars = 'Most stars',
  fewestStars = 'Fewest stars'
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc'
}

export enum SortCategories {
  best = 'best match',
  created = 'created',
  forks = 'forks',
  help = 'help-wanted-issues',
  stars = 'stars',
  updated = 'updated'
}

export enum Langs {
  assembly ='Assembly',
  c = 'C', 
  CSS = 'CSS',
  cpp = 'C++',
  csharp = 'C#', 
  go = 'Go',
  html = 'HTML',
  java = 'Java',
  js = 'JavaScript', 
  kotlin = 'Kotlin',
  php = 'PHP',
  python = 'Python',
  rust = 'Rust', 
  swift = 'Swift', 
  ts = 'TypeScript'
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
  ? {
    type: Key
  }
  : {
    type: Key;
    payload: M[Key]
  }
}

export interface Search {
  searchText: string
  language: string
  searchCategory: SortCategories
  order: SortOrder
  page: number
  total: number
  repos: []
}

export enum SearchActionTypes {
  UpdateSearchText = 'UPDATE_SEARCH_TEXT',
  UpdateLanguage = 'UPDATE_LANGUAGE',
  UpdateSearchCategory = 'UPDATE_SEARCH_CATEGORY',
  UpdateOrder = 'UPDATE_ORDER',
  UpdateRepos = 'UPDATE_REPOS',
  UpdatePage = 'UPDATE_PAGE',
  ResetValues = 'RESET_VALUES'
}

export interface SearchPayload {
  [SearchActionTypes.UpdateSearchText]: {
    searchText: string
  }
  [SearchActionTypes.UpdateLanguage]: {
    language: string
  }
  [SearchActionTypes.UpdateRepos]: {
    repos: [],
    total: number
  }
  [SearchActionTypes.UpdatePage]: {
    page: number
  }
}

export type SearchActions = ActionMap<SearchPayload>[keyof ActionMap<SearchPayload>]

export interface RepoCardProps {
  language: string
  name: string
  stars: number
  watchers: number
}

export interface InputTextProps {
  id: string
  placeholder: string
  value: string
  onChange: Function
  autoFocus?: boolean
  small?: boolean
}

export interface RepoStateProps {
  name: string
  stars: number
  watchers: number
  language: string
  url: string
  forks: number
}