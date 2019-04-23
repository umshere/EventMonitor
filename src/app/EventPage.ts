

export class SubHeader {
    Title: string;
    Links: Link[]
}

export class Link {
    Title: string;
    Url: string;
    ImageURL: string;
}

export class EventPage {
    MainTitle: string;
    SubHeader: SubHeader
}

