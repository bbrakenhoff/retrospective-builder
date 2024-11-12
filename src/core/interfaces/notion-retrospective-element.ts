export interface NotionTypeSelect {
  name: string | null
}

export interface NotionRetrospectiveElement {
  id: string;
  Name: {
    id: string;
    title: {
      context: { text: string; }
    }
  },
  Theme: { select: NotionTypeSelect },
  Link: {
    "href": string | null;
  },
  "Attendance opties": {
    multi_select: NotionTypeSelect[]
  },
  Phase: {
    multi_select: NotionTypeSelect[]
  }
}
