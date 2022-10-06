type Link = {
  url: string,
  label: string,
  active: boolean
}

export default interface PaginationInfoInterface {
  current_page: number,
  next_url: string | null,
  prev_url: string | null,
  links: Link[]
}
