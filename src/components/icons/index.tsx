import type { JSX } from "react";
import type { IconProps } from "./types";

import { AnnouncementIcon } from "./announcement-icon";
import { ChurchIcon } from "./church-icon";
import { ClassIcon } from "./class-icon";
import { EventIcon } from "./event-icon";
import { GiftIcon } from "./gift-icon";
import { HomeIcon } from "./home-icon";
import { MinistryIcon } from "./ministry-icon";
import { PodcastIcon } from "./podcast-icon";
import { SeriesIcon } from "./series-icon";
import { SermonIcon } from "./sermon-icon";
import { SubscriptionIcon } from "./subscription-icon";

export type IconName =
  | "announcement"
  | "church"
  | "class"
  | "event"
  | "gift"
  | "home"
  | "ministry"
  | "podcast"
  | "series"
  | "sermon"
  | "subscription";

const iconMap: Record<IconName, (props: IconProps) => JSX.Element> = {
  announcement: AnnouncementIcon,
  church: ChurchIcon,
  class: ClassIcon,
  event: EventIcon,
  gift: GiftIcon,
  home: HomeIcon,
  ministry: MinistryIcon,
  podcast: PodcastIcon,
  series: SeriesIcon,
  sermon: SermonIcon,
  subscription: SubscriptionIcon,
};

export function Icon({ name, ...props }: IconProps & { name: IconName }) {
  const Component = iconMap[name];
  return <Component {...props} />;
}

export {
  AnnouncementIcon,
  ChurchIcon,
  EventIcon,
  ClassIcon,
  GiftIcon,
  HomeIcon,
  MinistryIcon,
  PodcastIcon,
  SeriesIcon,
  SermonIcon,
  SubscriptionIcon,
};
