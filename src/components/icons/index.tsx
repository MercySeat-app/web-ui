import type { JSX } from "react";
import type { IconProps } from "./types";
import { ChurchIcon } from "./church-icon";
import { GiftIcon } from "./gift-icon";
import { MinistryIcon } from "./ministry-icon";
import { SermonIcon } from "./sermon-icon";

export type IconName = "church" | "gift" | "ministry" | "sermon";

const iconMap: Record<IconName, (props: IconProps) => JSX.Element> = {
  church: ChurchIcon,
  gift: GiftIcon,
  ministry: MinistryIcon,
  sermon: SermonIcon,
};

export function Icon({ name, ...props }: IconProps & { name: IconName }) {
  const Component = iconMap[name];
  return <Component {...props} />;
}

export { ChurchIcon, GiftIcon, MinistryIcon, SermonIcon };
