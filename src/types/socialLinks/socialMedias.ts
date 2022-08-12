export enum socialMediasTypeEnum {
  Twitter = "Twitter",
  Instagram = "Instagram",
  Facebook = "Facebook",
  Telegram = "Telegram",
  LinkdIn = "LinkdIn",
  Website = "Website",
}

export interface socialMediaDataForm {
  id?: string;
  type: { key: string; type: string | socialMediasTypeEnum };
  urlLink: string;
}
export interface LinksData {
  id?: string;
  type?: string;
  url?: string;
}
