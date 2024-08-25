"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  IconButton,
  Tabs,
  Tab,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function ResponsiveNavbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const toggleDrawer = (open: boolean) => (event: any) => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: "Flights", href: "/flights" },
    { label: "Hotels", href: "/hotels" },
    { label: "Packages", href: "/packages" },
    { label: "About Us", href: "/about" },
    { label: "Login", href: "/login" },
    { label: <AccountCircleIcon />, href: "/profile" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#f8f8f8",
        color: "#333",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" passHref>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
          >
            <Image
              src="/images/brand.webp"
              alt="Brand Logo"
              width={isMobile ? 150 : 300} // Smaller logo for mobile
              height={isMobile ? 30 : 50}
              style={{ marginRight: "8px" }}
            />
          </div>
        </Link>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: "#ff5722" }} // Orange theme color for mobile menu button
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  backgroundColor: "#ff5722", // Orange background for drawer
                  color: "#fff",
                },
              }}
            >
              <List sx={{ width: 250 }}>
                {menuItems.map((item, index) => (
                  <Link key={index} href={item.href} passHref>
                    <ListItem
                      button
                      onClick={() => {
                        setValue(index);
                        setDrawerOpen(false);
                      }}
                      sx={{
                        padding: "16px",
                        color: "#fff", // White text inside drawer
                        "&:hover": {
                          backgroundColor: "#e64a19", // Darker orange on hover
                        },
                      }}
                    >
                      <ListItemText primary={item.label} sx={{ fontWeight: "bold" }} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              marginLeft: "auto",
              "& .MuiTab-root": {
                minWidth: "auto",
                marginLeft: "32px",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#ff5722",
                },
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#ff5722",
                height: "3px",
              },
            }}
          >
            {menuItems.map((item, index) => (
              <Tab
                key={index}
                label={item.label}
                component={Link}
                href={item.href}
                sx={{
                  ...(value === index && {
                    color: "#ff5722",
                    fontWeight: "bold",
                  }),
                }}
              />
            ))}
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
}
