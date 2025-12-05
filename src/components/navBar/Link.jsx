import React from "react";
import { TableOfContents } from "lucide-react";
const Link = ({route}) => {
  return (
    <div>
        <li><a href={route.path}>{route.name}</a></li>
    </div>
  );
};

export default Link;
