import { useEffect, useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PublicIcon from "@mui/icons-material/Public";
import TelegramIcon from "@mui/icons-material/Telegram";
import { socialMediasTypeEnum } from "../types/socialLinks/socialMedias";
import React from "react";

const IconChecker = (props: { iconName: any; color: any }) => {
  const [icon, setIcon] = useState<any>();
  useEffect(() => {
    switch (props.iconName) {
      case socialMediasTypeEnum.Facebook:
        setIcon(<FacebookIcon color={props.color as any} />);
        break;
      case socialMediasTypeEnum.Twitter:
        setIcon(<TwitterIcon color={props.color as any} />);
        break;
      case socialMediasTypeEnum.Instagram:
        setIcon(<InstagramIcon color={props.color as any} />);
        break;
      case socialMediasTypeEnum.LinkdIn:
        setIcon(<LinkedInIcon color={props.color as any} />);
        break;
      case socialMediasTypeEnum.Telegram:
        setIcon(<TelegramIcon color={props.color as any} />);
        break;
      case socialMediasTypeEnum.Website:
        setIcon(<PublicIcon color={props.color as any} />);
        break;

      default:
        break;
    }
  }, [props.color, props.iconName]);
  return <div>{icon}</div>;
};

export default IconChecker;
