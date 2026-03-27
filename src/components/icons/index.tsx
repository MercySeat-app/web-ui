import type { JSX } from "react";
import type { IconProps } from "./types";

import { AnalyticsIcon } from "./analytics-icon";
import { AnnouncementIcon } from "./announcement-icon";
import { ChurchIcon } from "./church-icon";
import { ClassIcon } from "./class-icon";
import { CrownIcon } from "./crown-icon";
import { EventIcon } from "./event-icon";
import { GiftIcon } from "./gift-icon";
import { HomeIcon } from "./home-icon";
import { ListIcon } from "./list-icon";
import { LockClosedIcon } from "./lock-closed-icon";
import { LockOpenIcon } from "./lock-open-icon";
import { MinistryIcon } from "./ministry-icon";
import { PodcastIcon } from "./podcast-icon";
import { SeriesIcon } from "./series-icon";
import { SermonIcon } from "./sermon-icon";
import { SubscriptionIcon } from "./subscription-icon";
import { VideoIcon } from "./video-icon";

export type IconName =
  | "analytics"
  | "announcement"
  | "church"
  | "class"
  | "crown"
  | "event"
  | "gift"
  | "home"
  | "list"
  | "lock-closed"
  | "lock-open"
  | "ministry"
  | "podcast"
  | "series"
  | "sermon"
  | "subscription"
  | "video";

const iconMap: Record<IconName, (props: IconProps) => JSX.Element> = {
  analytics: AnalyticsIcon,
  announcement: AnnouncementIcon,
  church: ChurchIcon,
  class: ClassIcon,
  crown: CrownIcon,
  event: EventIcon,
  gift: GiftIcon,
  home: HomeIcon,
  list: ListIcon,
  "lock-closed": LockClosedIcon,
  "lock-open": LockOpenIcon,
  ministry: MinistryIcon,
  podcast: PodcastIcon,
  series: SeriesIcon,
  sermon: SermonIcon,
  subscription: SubscriptionIcon,
  video: VideoIcon,
};

export function Icon({ name, ...props }: IconProps & { name: IconName }) {
  const Component = iconMap[name];
  return <Component {...props} />;
}

export {
  AnalyticsIcon,
  AnnouncementIcon,
  ChurchIcon,
  ClassIcon,
  CrownIcon,
  EventIcon,
  GiftIcon,
  HomeIcon,
  ListIcon,
  LockClosedIcon,
  LockOpenIcon,
  MinistryIcon,
  PodcastIcon,
  SeriesIcon,
  SermonIcon,
  SubscriptionIcon,
  VideoIcon,
};
