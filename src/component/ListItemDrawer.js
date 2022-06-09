import { memo } from "react";
import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { useTranslation } from "react-i18next";

const RenderIcon = (props) => {
  const { text } = props;
  if (text === "dashboard") {
    return <DashboardOutlinedIcon />;
  } else if (text === "user") {
    return <GroupOutlinedIcon />;
  } else if (text === "project") {
    return <FolderOpenIcon />;
  } else if (text === "about") {
    return <InfoOutlinedIcon />;
  } else if (text === "trash") {
    return <DeleteOutlinedIcon />;
  } else {
    return <FilterNoneIcon />;
  }
};

const ListItemDrawer = (props) => {
  const { t } = useTranslation();
  const { item, index, clickChange } = props;
  const clickNavigate = () => clickChange(item.path);
  return (
    <>
      {console.log("ListItemDrawer render", index)}
      <ListItem disablePadding sx={{ display: "block" }}>
        <ListItemButton
          onClick={clickNavigate}
          sx={{
            minHeight: 48,
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: 3,
              justifyContent: "center",
            }}
          >
            <RenderIcon text={item.text} />
          </ListItemIcon>
          <ListItemText primary={t(item.text)} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

ListItemDrawer.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  clickChange: PropTypes.func,
};
export default memo(ListItemDrawer);
