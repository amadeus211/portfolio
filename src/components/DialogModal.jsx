import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";

import UK from "../images/united-kingdom.png";
import Ukraine from "../images/ukraine.png";

const languages = ["Ukrainian", "English"];

const icons = {
  Ukrainian: Ukraine,
  English: UK,
};

const links = {
  Ukrainian:
    "https://drive.google.com/file/d/1phabjgJBl_Sa4TZ4bi0MmuUxTLt4rZVR/view?usp=sharing",
  English:
    "https://drive.google.com/file/d/1tmdt-exuxwSk3uSNlyRiOdaM5aBjEf7H/view?usp=sharing",
};

export default function DialogModal({ open, close }) {
  const handleListItemClick = (value, e) => {
    console.log(value);
    close();
    e.preventDefault();
    window.open(links[value], "_blank");
  };

  return (
    <Dialog onClose={close} open={open}>
      <DialogTitle>Choose CV language</DialogTitle>
      <List sx={{ padding: 2 }}>
        {languages.map((lang) => (
          <ListItem disableGutters key={lang}>
            <ListItemButton onClick={(e) => handleListItemClick(lang, e)}>
              <ListItemText primary={lang} />
              <img src={icons[lang]} className="h-6 w-6" alt="" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
