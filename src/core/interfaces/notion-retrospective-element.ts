export interface NotionTypeSelect {
  name: string | null;
}

export interface NotionRetrospectiveElement {
  id: string;
  Name: {
    id: string;
    title: [{
      plain_text: string
    }]
  },
  "Attendance options": { multi_select: NotionTypeSelect[] }
  Phase: { multi_select: NotionTypeSelect[] }
  Link: { rich_text: [{ href: string |null}] };
  Theme: {
    select: NotionTypeSelect;
  }
}
