import React, { Fragment, useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CardMedia,
  Collapse,
} from "@mui/material";
import styled from "@emotion/styled";
import { Images, Svgs } from "../../../assets/images/index";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "../../../../Navigation";
import useBreadCrumb from "../../../hooks/useBreadCrumb";
import { ExpandLess, ExpandMore, ImageSearch } from "@mui/icons-material";
import Colors from "../../../assets/styles";

const drawerWidth = 270;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
  ...theme.mixins.toolbar,
}));

export default function SideNav({ status, toggleStatus }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setName } = useBreadCrumb();
  const [expand, setExpand] = useState({});
  console.log("🚀 ~ SideNav ~ expand:", expand);

  const handleToggleSubMenu = (name) => {
    setExpand((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          transition: "all .3s ease-in-out",
          width: status === false ? drawerWidth : 50,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            transition: "all .3s ease-in-out",
            width: status === false ? drawerWidth : 0,
            boxSizing: "border-box",
            background: Colors.backgroundColor,
            borderRight: "1px solid rgb(193 192 192 / 13%)",
            margin: "16px 11px",
            borderRadius: "10px",
            height: "96vh",
            boxShadow: " 5px 5px 10px 0 rgba(0, 0, 0, 0.1)",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <DrawerHeader>
          <CardMedia
            component={"img"}
            src={Images.logo}
            sx={{
              width: "150px",
              objectFit: "contain",
            }}
          />
        </DrawerHeader>

        <List sx={{ pr: "19px", pl: "50px", py: 2 }}>
          {Navigation.map((item, index) => {
            const isSelected = item.path === pathname;
            return (
              <Fragment key={index}>
                <ListItem sx={{ p: 0, pb: 2 }}>
                  <ListItemButton
                    onClick={() => {
                      navigate(item.path);
                      setName(item.name);
                      handleToggleSubMenu(item.name);
                    }}
                    sx={{
                      p: "12px 16px",
                      gap: "22px",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: "32px",
                        boxShadow: "5px 5px 10px 0 rgba(0, 0, 0, 0.1)",
                        backgroundColor: isSelected
                          ? Colors.primary
                          : Colors.dashboardBgColor,
                        borderRadius: "3px",
                        padding: "7px 2px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {/* Assuming item.icon is an SVG string */}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item.icon.replace(
                            /fill="#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})"/g,
                            `fill="${isSelected ? Colors.white : Colors.black}"`
                          ),
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{
                        color: isSelected ? Colors.black : Colors.black,
                        span: {
                          fontWeight: isSelected ? 600 : 400,
                          fontSize: "14px !important",
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Fragment>
            );
          })}
        </List>
        <List sx={{ pr: "19px", pl: "50px", py: 2 }}>

        <ListItem sx={{ p: 0, pb: 2 }}>
          <ListItemButton
            onClick={() => {}}
            sx={{
              p: "12px 16px",
              gap: "22px",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "32px",
                boxShadow: "5px 5px 10px 0 rgba(0, 0, 0, 0.1)",
                borderRadius: "3px",
                padding: "7px 2px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Assuming item.icon is an SVG string */}
              <span
               dangerouslySetInnerHTML={{__html:Svgs["signout"]}} 
              />
            </ListItemIcon>
            <ListItemText
              primary={"Sign Out"}
              sx={{
                span: {
                  fontSize: "14px !important",
                },
              }}
            />
          </ListItemButton>
        </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
