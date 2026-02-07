import { IconProps } from './types';
import { AnnouncementIcon } from './announcement-icon';
import { ChurchIcon } from './church-icon';
import { ClassIcon } from './class-icon';
import { CrownIcon } from './crown-icon';
import { EventIcon } from './event-icon';
import { GiftIcon } from './gift-icon';
import { HomeIcon } from './home-icon';
import { LockClosedIcon } from './lock-closed-icon';
import { LockOpenIcon } from './lock-open-icon';
import { MinistryIcon } from './ministry-icon';
import { PodcastIcon } from './podcast-icon';
import { SeriesIcon } from './series-icon';
import { SermonIcon } from './sermon-icon';
import { SubscriptionIcon } from './subscription-icon';
import { VideoIcon } from './video-icon';
export type IconName = "announcement" | "church" | "class" | "crown" | "event" | "gift" | "home" | "lock-closed" | "lock-open" | "ministry" | "podcast" | "series" | "sermon" | "subscription" | "video";
export declare function Icon({ name, ...props }: IconProps & {
    name: IconName;
}): import("react/jsx-runtime").JSX.Element;
export { AnnouncementIcon, ChurchIcon, ClassIcon, CrownIcon, EventIcon, GiftIcon, HomeIcon, LockClosedIcon, LockOpenIcon, MinistryIcon, PodcastIcon, SeriesIcon, SermonIcon, SubscriptionIcon, VideoIcon, };
//# sourceMappingURL=index.d.ts.map