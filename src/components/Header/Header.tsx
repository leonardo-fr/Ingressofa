import React from "react";
import {
  AppBar as MuiAppBar,
  Box,
  Divider,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { MenuItem } from '@mui/material';
//import { AccountOptions } from "components/AccountOptions";
import CompanyWhiteLogo from "_assets/img/CompanyWhiteLogo.svg";
import { sxStyles } from "./header.style";
import { ReactComponent as MenuAvatar } from "_assets/icons/MenuAvatar.svg";
interface AppBarProps {
  name?: string;
  companyName?: string;
}
export const Header: React.FC<AppBarProps> = ({ name, companyName }) => {
  const firstName = name?.split(" ", 1);
  return (
    <MuiAppBar
      component="header"
      position="relative"
      elevation={0}
    >
      <Toolbar>
        <Grid
          container
          spacing={1}
          alignItems="center"
        >
        <Grid item>
          <Box
            component="img"
            alt="Logo Ingresso Facil"
            src={"Logo INgresso Facil"}
          />
        </Grid>
          <Grid item>
            <Box
              component="img"
              alt="Logo Ingresso Facil"
              src={"Logo INgresso Facil"}
            />
          </Grid>
          <Grid item >
            <Divider orientation="vertical" />
          </Grid>
          <Grid item>
            <Typography>{name}</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="right"
          spacing={1}
        >
          <Grid item>
            <MenuItem />
          </Grid>
          <Grid item>
            <Typography >
              Olá, {'Juarez'}
            </Typography>
          </Grid>
          <Grid item >
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
};
