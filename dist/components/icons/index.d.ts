import { IconProps } from './types';
import { AnnouncementIcon } from './announcement-icon';
import { ChurchIcon } from './church-icon';
import { ClassIcon } from './class-icon';
import { EventIcon } from './event-icon';
import { GiftIcon } from './gift-icon';
import { HomeIcon } from './home-icon';
import { MinistryIcon } from './ministry-icon';
import { PodcastIcon } from './podcast-icon';
import { SeriesIcon } from './series-icon';
import { SermonIcon } from './sermon-icon';
import { SubscriptionIcon } from './subscription-icon';
export type IconName = "announcement" | "church" | "class" | "event" | "gift" | "home" | "ministry" | "podcast" | "series" | "sermon" | "subscription";
export declare function Icon({ name, ...props }: IconProps & {
    name: IconName;
}): import("react/jsx-runtime").JSX.Element;
export { AnnouncementIcon, ChurchIcon, EventIcon, ClassIcon, GiftIcon, HomeIcon, MinistryIcon, PodcastIcon, SeriesIcon, SermonIcon, SubscriptionIcon, };
//# sourceMappingURL=index.d.ts.map