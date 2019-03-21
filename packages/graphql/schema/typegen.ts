/**
 * This file was automatically generated by Nexus 0.11.5
 * Do not make changes to this file directly
 */

import * as ctx from "../utils/getContext"


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CharacterWhereInput: { // input type
    comics?: string[] | null; // [ID!]
    events?: string[] | null; // [ID!]
    id?: number | null; // Int
    modifiedSince?: string | null; // String
    name?: string | null; // String
    nameStartsWith?: string | null; // String
    series?: string[] | null; // [ID!]
    stories?: string[] | null; // [ID!]
  }
  ComicWhereInput: { // input type
    characters?: string[] | null; // [ID!]
    collaborators?: string[] | null; // [ID!]
    creators?: string[] | null; // [ID!]
    dateDescriptor?: NexusGenEnums['DateDescriptor'] | null; // DateDescriptor
    dateRange?: number | null; // Int
    diamondCode?: string | null; // String
    digitalId?: number | null; // Int
    ean?: string | null; // String
    events?: string[] | null; // [ID!]
    format?: NexusGenEnums['ComicFormat'] | null; // ComicFormat
    formatType?: NexusGenEnums['ComicFormatType'] | null; // ComicFormatType
    hasDigitalIssue?: boolean | null; // Boolean
    isbn?: string | null; // String
    issn?: string | null; // String
    modifiedSince?: any | null; // DateTime
    noVariants?: boolean | null; // Boolean
    series?: string[] | null; // [ID!]
    sharedAppearances?: string[] | null; // [ID!]
    stories?: string[] | null; // [ID!]
    upc?: string | null; // String
  }
  CreatorWhereInput: { // input type
    comics?: string[] | null; // [ID!]
    events?: string[] | null; // [ID!]
    firstName?: string | null; // String
    firstNameStartsWith?: string | null; // String
    lastName?: string | null; // String
    lastNameStartsWith?: string | null; // String
    middleName?: string | null; // String
    middleNameStartsWith?: string | null; // String
    modifiedSince?: any | null; // DateTime
    nameStartsWith?: string | null; // String
    series?: string[] | null; // [ID!]
    stories?: string[] | null; // [ID!]
    suffix?: string | null; // String
  }
  EventsWhereInput: { // input type
    characters?: string[] | null; // [ID!]
    comics?: string[] | null; // [ID!]
    creators?: string[] | null; // [ID!]
    modifiedSince?: any | null; // DateTime
    name?: string | null; // String
    nameStartsWith?: string | null; // String
    series?: string[] | null; // [ID!]
  }
  SeriesWhereInput: { // input type
    characters?: string[] | null; // [ID!]
    comics?: string[] | null; // [ID!]
    contains?: NexusGenEnums['ComicFormat'] | null; // ComicFormat
    creators?: string[] | null; // [ID!]
    events?: string[] | null; // [ID!]
    modifiedSince?: any | null; // DateTime
    seriesType?: NexusGenEnums['SeriesType'] | null; // SeriesType
    startYear?: number | null; // Int
    stories?: string[] | null; // [ID!]
    title?: string | null; // String
    titleStartsWith?: string | null; // String
  }
  StoriesWhereInput: { // input type
    characters?: string[] | null; // [ID!]
    comics?: string[] | null; // [ID!]
    creators?: string[] | null; // [ID!]
    events?: string[] | null; // [ID!]
    modifiedSince?: any | null; // DateTime
    series?: string[] | null; // [ID!]
  }
}

export interface NexusGenEnums {
  CharacterOrderBy: "modified_asc" | "modified_desc" | "name_asc" | "name_desc"
  ComicFormat: "comic" | "digest" | "digital_comic" | "graphic_novel" | "hardcover" | "infinite_comic" | "magazine" | "trade_paperback"
  ComicFormatType: "collection" | "comic"
  ComicOrderBy: "focDate_asc" | "focDate_desc" | "issueNumber_asc" | "issueNumber_desc" | "modified_asc" | "modified_desc" | "onSaleDate_asc" | "onSaleDate_desc" | "title_asc" | "title_desc"
  CreatorOrderBy: "firstName_asc" | "firstName_desc" | "lastName_asc" | "lastName_desc" | "middleName_asc" | "middleName_desc" | "modified_asc" | "modified_desc" | "suffix_asc" | "suffix_desc"
  DateDescriptor: "lastWeek" | "nextWeek" | "thisMonth" | "thisWeek"
  EventsOrderBy: "modified_asc" | "modified_desc" | "name_asc" | "name_desc" | "startDate_asc" | "startDate_desc"
  SeriesOrderBy: "modified_asc" | "modified_desc" | "startYear_asc" | "startYear_desc" | "title_asc" | "title_desc"
  SeriesType: "collection" | "limited" | "one_shot" | "ongoing"
  StoriesOrderBy: "id_asc" | "id_desc" | "modified_asc" | "modified_desc"
}

export interface NexusGenRootTypes {
  Character: { // root type
    description?: string | null; // String
    events?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    id?: string | null; // ID
    modified?: string | null; // String
    name?: string | null; // String
    resourceURI?: string | null; // String
    series?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    stories?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    thumbnail?: string | null; // String
    urls?: NexusGenRootTypes['MarvelUrl'][] | null; // [MarvelUrl!]
  }
  Comic: { // root type
    characters?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    collectedIssues?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    collections?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    creators?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    dates?: NexusGenRootTypes['ComicDate'][] | null; // [ComicDate!]
    description?: string | null; // String
    diamondCode?: string | null; // String
    digitalId?: number | null; // Int
    ean?: string | null; // String
    events?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    format?: string | null; // String
    id?: string | null; // ID
    images?: NexusGenRootTypes['ComicImage'][] | null; // [ComicImage!]
    isbn?: string | null; // String
    issn?: string | null; // String
    issueNumber?: number | null; // Int
    modified?: string | null; // String
    prices?: NexusGenRootTypes['ComicPrice'][] | null; // [ComicPrice!]
    resourceURI?: string | null; // String
    series?: NexusGenRootTypes['Summary'] | null; // Summary
    stories?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    textObjects?: NexusGenRootTypes['TextObject'][] | null; // [TextObject!]
    thumbnail?: string | null; // String
    title?: string | null; // String
    upc?: string | null; // String
    urls?: NexusGenRootTypes['MarvelUrl'][] | null; // [MarvelUrl!]
    variantDescription?: string | null; // String
    variants?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
  }
  ComicDate: { // root type
    date?: string | null; // String
    type?: string | null; // String
  }
  ComicImage: { // root type
    extension?: string | null; // String
    path?: string | null; // String
  }
  ComicPrice: { // root type
    price?: number | null; // Int
    type?: string | null; // String
  }
  Creator: { // root type
    comics?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    events?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    firstName?: string | null; // String
    fullName?: string | null; // String
    id?: string | null; // ID
    lastName?: string | null; // String
    middleName?: string | null; // String
    modified?: string | null; // String
    resourceURI?: string | null; // String
    series?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    stories?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    suffix?: string | null; // String
    thumbnail?: string | null; // String
    urls?: NexusGenRootTypes['MarvelUrl'][] | null; // [MarvelUrl!]
  }
  Event: { // root type
    characters?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    comics?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    creators?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    description?: string | null; // String
    end?: string | null; // String
    id?: string | null; // ID
    modified?: string | null; // String
    next?: NexusGenRootTypes['Summary'] | null; // Summary
    previous?: NexusGenRootTypes['Summary'] | null; // Summary
    resourceURI?: string | null; // String
    series?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    start?: string | null; // String
    stories?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    thumbnail?: string | null; // String
    title?: string | null; // String
    urls?: NexusGenRootTypes['MarvelUrl'][] | null; // [MarvelUrl!]
  }
  MarvelUrl: { // root type
    type?: string | null; // String
    url?: string | null; // String
  }
  Query: {};
  Series: { // root type
    characters?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    comics?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    creators?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    description?: string | null; // String
    endYear?: number | null; // Int
    events?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    id?: string | null; // ID
    modified?: string | null; // String
    next?: NexusGenRootTypes['Summary'] | null; // Summary
    previous?: NexusGenRootTypes['Summary'] | null; // Summary
    rating?: string | null; // String
    resourceURI?: string | null; // String
    startYear?: number | null; // Int
    stories?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    thumbnail?: string | null; // String
    title?: string | null; // String
    urls?: NexusGenRootTypes['MarvelUrl'][] | null; // [MarvelUrl!]
  }
  Story: { // root type
    characters?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    comics?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    creators?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    description?: string | null; // String
    events?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    id?: string | null; // ID
    modified?: string | null; // String
    originalIssue?: NexusGenRootTypes['Summary'] | null; // Summary
    resourceURI?: string | null; // String
    series?: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    thumbnail?: string | null; // String
    title?: string | null; // String
    type?: string | null; // String
  }
  Summary: { // root type
    name?: string | null; // String
    resourceURI?: string | null; // String
    role?: string | null; // String
    type?: string | null; // String
  }
  TextObject: { // root type
    language?: string | null; // String
    text?: string | null; // String
    type?: string | null; // String
  }
  MarvelNode: NexusGenRootTypes['Character'] | NexusGenRootTypes['Comic'] | NexusGenRootTypes['Creator'] | NexusGenRootTypes['Event'] | NexusGenRootTypes['Series'] | NexusGenRootTypes['Story'];
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  CharacterWhereInput: NexusGenInputs['CharacterWhereInput'];
  ComicWhereInput: NexusGenInputs['ComicWhereInput'];
  CreatorWhereInput: NexusGenInputs['CreatorWhereInput'];
  EventsWhereInput: NexusGenInputs['EventsWhereInput'];
  SeriesWhereInput: NexusGenInputs['SeriesWhereInput'];
  StoriesWhereInput: NexusGenInputs['StoriesWhereInput'];
  CharacterOrderBy: NexusGenEnums['CharacterOrderBy'];
  ComicFormat: NexusGenEnums['ComicFormat'];
  ComicFormatType: NexusGenEnums['ComicFormatType'];
  ComicOrderBy: NexusGenEnums['ComicOrderBy'];
  CreatorOrderBy: NexusGenEnums['CreatorOrderBy'];
  DateDescriptor: NexusGenEnums['DateDescriptor'];
  EventsOrderBy: NexusGenEnums['EventsOrderBy'];
  SeriesOrderBy: NexusGenEnums['SeriesOrderBy'];
  SeriesType: NexusGenEnums['SeriesType'];
  StoriesOrderBy: NexusGenEnums['StoriesOrderBy'];
}

export interface NexusGenFieldTypes {
  Character: { // field return type
    comics: NexusGenRootTypes['Comic'][] | null; // [Comic!]
    description: string | null; // String
    events: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    id: string | null; // ID
    modified: string | null; // String
    name: string | null; // String
    resourceURI: string | null; // String
    series: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    stories: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    thumbnail: string | null; // String
    urls: NexusGenRootTypes['MarvelUrl'][] | null; // [MarvelUrl!]
  }
  Comic: { // field return type
    characters: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    collectedIssues: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    collections: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    creators: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    dates: NexusGenRootTypes['ComicDate'][] | null; // [ComicDate!]
    description: string | null; // String
    diamondCode: string | null; // String
    digitalId: number | null; // Int
    ean: string | null; // String
    events: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    format: string | null; // String
    id: string | null; // ID
    images: NexusGenRootTypes['ComicImage'][] | null; // [ComicImage!]
    isbn: string | null; // String
    issn: string | null; // String
    issueNumber: number | null; // Int
    modified: string | null; // String
    prices: NexusGenRootTypes['ComicPrice'][] | null; // [ComicPrice!]
    resourceURI: string | null; // String
    series: NexusGenRootTypes['Summary'] | null; // Summary
    stories: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    textObjects: NexusGenRootTypes['TextObject'][] | null; // [TextObject!]
    thumbnail: string | null; // String
    title: string | null; // String
    upc: string | null; // String
    urls: NexusGenRootTypes['MarvelUrl'][] | null; // [MarvelUrl!]
    variantDescription: string | null; // String
    variants: NexusGenRootTypes['Summary'][] | null; // [Summary!]
  }
  ComicDate: { // field return type
    date: string | null; // String
    type: string | null; // String
  }
  ComicImage: { // field return type
    extension: string | null; // String
    path: string | null; // String
  }
  ComicPrice: { // field return type
    price: number | null; // Int
    type: string | null; // String
  }
  Creator: { // field return type
    comics: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    events: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    firstName: string | null; // String
    fullName: string | null; // String
    id: string | null; // ID
    lastName: string | null; // String
    middleName: string | null; // String
    modified: string | null; // String
    resourceURI: string | null; // String
    series: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    stories: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    suffix: string | null; // String
    thumbnail: string | null; // String
    urls: NexusGenRootTypes['MarvelUrl'][] | null; // [MarvelUrl!]
  }
  Event: { // field return type
    characters: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    comics: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    creators: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    description: string | null; // String
    end: string | null; // String
    id: string | null; // ID
    modified: string | null; // String
    next: NexusGenRootTypes['Summary'] | null; // Summary
    previous: NexusGenRootTypes['Summary'] | null; // Summary
    resourceURI: string | null; // String
    series: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    start: string | null; // String
    stories: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    thumbnail: string | null; // String
    title: string | null; // String
    urls: NexusGenRootTypes['MarvelUrl'][] | null; // [MarvelUrl!]
  }
  MarvelUrl: { // field return type
    type: string | null; // String
    url: string | null; // String
  }
  Query: { // field return type
    characters: NexusGenRootTypes['Character'][] | null; // [Character!]
    comics: NexusGenRootTypes['Comic'][] | null; // [Comic!]
    creators: NexusGenRootTypes['Creator'][] | null; // [Creator!]
    engineInfo: string | null; // String
    events: NexusGenRootTypes['Event'][] | null; // [Event!]
    getCharacter: NexusGenRootTypes['Character'] | null; // Character
    getComic: NexusGenRootTypes['Comic'] | null; // Comic
    getCreator: NexusGenRootTypes['Creator'] | null; // Creator
    getEvent: NexusGenRootTypes['Event'] | null; // Event
    getSeries: NexusGenRootTypes['Series'] | null; // Series
    getStory: NexusGenRootTypes['Story'] | null; // Story
    series: NexusGenRootTypes['Series'][] | null; // [Series!]
    stories: NexusGenRootTypes['Story'][] | null; // [Story!]
  }
  Series: { // field return type
    characters: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    comics: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    creators: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    description: string | null; // String
    endYear: number | null; // Int
    events: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    id: string | null; // ID
    modified: string | null; // String
    next: NexusGenRootTypes['Summary'] | null; // Summary
    previous: NexusGenRootTypes['Summary'] | null; // Summary
    rating: string | null; // String
    resourceURI: string | null; // String
    startYear: number | null; // Int
    stories: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    thumbnail: string | null; // String
    title: string | null; // String
    urls: NexusGenRootTypes['MarvelUrl'][] | null; // [MarvelUrl!]
  }
  Story: { // field return type
    characters: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    comics: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    creators: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    description: string | null; // String
    events: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    id: string | null; // ID
    modified: string | null; // String
    originalIssue: NexusGenRootTypes['Summary'] | null; // Summary
    resourceURI: string | null; // String
    series: NexusGenRootTypes['Summary'][] | null; // [Summary!]
    thumbnail: string | null; // String
    title: string | null; // String
    type: string | null; // String
  }
  Summary: { // field return type
    name: string | null; // String
    resourceURI: string | null; // String
    role: string | null; // String
    type: string | null; // String
  }
  TextObject: { // field return type
    language: string | null; // String
    text: string | null; // String
    type: string | null; // String
  }
  MarvelNode: { // field return type
    id: string | null; // ID
    modified: string | null; // String
    resourceURI: string | null; // String
    thumbnail: string | null; // String
  }
}

export interface NexusGenArgTypes {
  Query: {
    characters: { // args
      limit?: number | null; // Int
      offset?: number | null; // Int
      orderBy?: NexusGenEnums['CharacterOrderBy'] | null; // CharacterOrderBy
      where?: NexusGenInputs['CharacterWhereInput'] | null; // CharacterWhereInput
    }
    comics: { // args
      limit?: number | null; // Int
      offset?: number | null; // Int
      orderBy?: NexusGenEnums['ComicOrderBy'] | null; // ComicOrderBy
      where?: NexusGenInputs['ComicWhereInput'] | null; // ComicWhereInput
    }
    creators: { // args
      limit?: number | null; // Int
      offset?: number | null; // Int
      orderBy?: NexusGenEnums['CreatorOrderBy'] | null; // CreatorOrderBy
      where?: NexusGenInputs['CreatorWhereInput'] | null; // CreatorWhereInput
    }
    events: { // args
      limit?: number | null; // Int
      offset?: number | null; // Int
      orderBy?: NexusGenEnums['EventsOrderBy'] | null; // EventsOrderBy
      where?: NexusGenInputs['EventsWhereInput'] | null; // EventsWhereInput
    }
    getCharacter: { // args
      where?: NexusGenInputs['CharacterWhereInput'] | null; // CharacterWhereInput
    }
    getComic: { // args
      where?: NexusGenInputs['ComicWhereInput'] | null; // ComicWhereInput
    }
    getCreator: { // args
      where?: NexusGenInputs['CreatorWhereInput'] | null; // CreatorWhereInput
    }
    getEvent: { // args
      where?: NexusGenInputs['EventsWhereInput'] | null; // EventsWhereInput
    }
    getSeries: { // args
      where?: NexusGenInputs['SeriesWhereInput'] | null; // SeriesWhereInput
    }
    getStory: { // args
      where?: NexusGenInputs['StoriesWhereInput'] | null; // StoriesWhereInput
    }
    series: { // args
      limit?: number | null; // Int
      offset?: number | null; // Int
      orderBy?: NexusGenEnums['SeriesOrderBy'] | null; // SeriesOrderBy
      where?: NexusGenInputs['SeriesWhereInput'] | null; // SeriesWhereInput
    }
    stories: { // args
      limit?: number | null; // Int
      offset?: number | null; // Int
      orderBy?: NexusGenEnums['StoriesOrderBy'] | null; // StoriesOrderBy
      where?: NexusGenInputs['StoriesWhereInput'] | null; // StoriesWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  MarvelNode: "Character" | "Comic" | "Creator" | "Event" | "Series" | "Story"
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Character" | "Comic" | "ComicDate" | "ComicImage" | "ComicPrice" | "Creator" | "Event" | "MarvelUrl" | "Query" | "Series" | "Story" | "Summary" | "TextObject";

export type NexusGenInputNames = "CharacterWhereInput" | "ComicWhereInput" | "CreatorWhereInput" | "EventsWhereInput" | "SeriesWhereInput" | "StoriesWhereInput";

export type NexusGenEnumNames = "CharacterOrderBy" | "ComicFormat" | "ComicFormatType" | "ComicOrderBy" | "CreatorOrderBy" | "DateDescriptor" | "EventsOrderBy" | "SeriesOrderBy" | "SeriesType" | "StoriesOrderBy";

export type NexusGenInterfaceNames = "MarvelNode";

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}