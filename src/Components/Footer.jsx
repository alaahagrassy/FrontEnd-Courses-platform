import React from "react";
import {
    Box, Stack, Grid, Container, Typography, useMediaQuery, useTheme
} from "@mui/material";
import {StyledMenuButton } from "../styled/StyledButton"
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FooterTypography } from "../styled/StyledTypogtaphy"
import { StyledFacebookIcon, StyledTwitterIcon, StyledInstgramIcon, StyledLinkedInIcon } from '../styled/styledIcon'



const FooterStyles = (theme) => {
    const defaultStyles = {};
    return {
        ...defaultStyles,
        backgroundColor: "#1C1D1F",
    };
};

const Footer = () => {
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down("md"));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box paddingTop={'30px'}>
            <Box component={"footer"} height="257px" paddingTop={'5px'}

                sx={FooterStyles(theme)}

            >
                <Container>

                    <Grid container mt={5} columnSpacing={7} color="white" marginRight={'90px'}>
                        <Grid item textAlign={"start"} md={3} hidden={mobileView}>
                            <FooterTypography>Courses Business</FooterTypography>
                            <FooterTypography>Teach in Courses</FooterTypography>
                            <FooterTypography>Get App</FooterTypography>
                            <FooterTypography>About</FooterTypography>
                            <FooterTypography>Contact US</FooterTypography>
                        </Grid>

                        <Grid item textAlign={"start"} md={3} hidden={mobileView}>
                            <FooterTypography>Careers</FooterTypography>
                            <FooterTypography>Blog</FooterTypography>
                            <FooterTypography>Help and Support</FooterTypography>
                            <FooterTypography>Affiliate</FooterTypography>
                            <FooterTypography>Investors</FooterTypography>
                        </Grid>

                        <Grid item textAlign={"start"} md={3} hidden={mobileView}>
                            <FooterTypography>Terms</FooterTypography>
                            <FooterTypography>Privacy policy</FooterTypography>
                            <FooterTypography>Cookie setting</FooterTypography>
                            <FooterTypography>Sitemap</FooterTypography>
                            <FooterTypography>Accessibility statment</FooterTypography>
                        </Grid>

                        <Grid item md={3} hidden={mobileView}>
                            <Stack
                                direction={"row"}
                                ml={3}
                                spacing={1.5}
                                justifyContent={"space-round"}
                            >

                                <StyledFacebookIcon></StyledFacebookIcon>

                                <StyledInstgramIcon></StyledInstgramIcon>

                                <StyledTwitterIcon></StyledTwitterIcon>

                                <StyledLinkedInIcon></StyledLinkedInIcon>
                            </Stack>

                            <Box mt={5}>
                                <StyledMenuButton
                                    id="demo-positioned-button"
                                    aria-controls={open ? "demo-positioned-menu" : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                    onClick={handleClick}
                                >
                                    <LanguageIcon
                                        sx={{ mr: 1, ml: 1, color: "#FFFFFF" }}
                                    ></LanguageIcon>{" "}
                                    English
                                    <ArrowDropDownIcon
                                        sx={{ ml: 2, color: "#FFFFF" }}
                                    ></ArrowDropDownIcon>
                                </StyledMenuButton>
                                <Menu
                                    id="demo-positioned-menu"
                                    aria-labelledby="demo-positioned-button"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: "center",
                                        horizontal: "left",
                                    }}
                                    transformOrigin={{
                                        vertical: "center",
                                        horizontal: "left",
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>English</MenuItem>
                                    <MenuItem onClick={handleClose}>Deutsch</MenuItem>
                                    <MenuItem onClick={handleClose}>العربيّة</MenuItem>
                                    <MenuItem onClick={handleClose}>Bahasa Indonesia</MenuItem>
                                    <MenuItem onClick={handleClose}>Português</MenuItem>
                                    <MenuItem onClick={handleClose}>简体中文</MenuItem>
                                </Menu>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item md={3} hidden={mobileView} display='flex' justifyContent={'space-between'} paddingTop={'10px'}>
                        <Box
                            component="img"
                            style={{ maxWidth: "65px" }}
                            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjcwcHgiIGhlaWdodD0iNjE3cHgiIHZpZXdCb3g9IjAgMCA2NzAgNjE3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2NCAoOTM1MzcpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPkVkdWNhdGlvbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJFZHVjYXRpb24iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1LjAwMDAwMCwgLTkwLjAwMDAwMCkiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjE5LjAyNDM5OSwyODMuMjM5MDE3IEw1MzYuMDMzNzcsMjQ0LjkyNDU0NiBDNTU3Ljk2NTU1NCwyNDIuMjczODIxIDU3Ny44OTM2MTYsMjU3LjkwNDIwOCA1ODAuNTQ0MzQxLDI3OS44MzU5OTIgQzU4MC45MTE0OCwyODIuODczNjU1IDU4MC45Mjg4NjQsMjg1Ljk0MzQxMyA1ODAuNTk2MTU0LDI4OC45ODUwMzkgTDU0NS40MDM5OTYsNjEwLjcxMDQzOSBDNTQzLjM2ODEwNCw2MjkuMzIyNDkgNTI4LjY5NDEyLDY0NC4wMzIwOTggNTEwLjA4NzA2LDY0Ni4xMTMxMTMgTDE4Ny4wODI5ODEsNjgyLjIzNzkyIEMxNjUuMTI4NDcsNjg0LjY5MzMxNSAxNDUuMzQwMzMyLDY2OC44ODYxNTggMTQyLjg4NDkzOCw2NDYuOTMxNjQ3IEMxNDIuNTMyOTc2LDY0My43ODQ2MzcgMTQyLjU1NTk1OCw2NDAuNjA2OTY1IDE0Mi45NTM0LDYzNy40NjUzNzUgTDE4My4yNjgxNjMsMzE4Ljc5NjkwNSBDMTg1LjYyNzI1OCwzMDAuMTQ5NDE0IDIwMC4zNjQwNzQsMjg1LjQ5NDM0NiAyMTkuMDI0Mzk5LDI4My4yMzkwMTcgWiIgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzAwOTdBNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYxLjMyNTk2NywgNDYzLjM4MTQ3NSkgcm90YXRlKDQ1LjAwMDAwMCkgdHJhbnNsYXRlKC0zNjEuMzI1OTY3LCAtNDYzLjM4MTQ3NSkgIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOTUuMTA4MTg3LDE1Ni43NjE0NjkgTDU2My44NzkyNjMsMTEyLjEzMzUwMyBDNTg1LjgxMDY0MSwxMDkuNDc5NDEgNjA1Ljc0MTEwMiwxMjUuMTA2NzM2IDYwOC4zOTUxOTUsMTQ3LjAzODExMyBDNjA4Ljc2MjgyNCwxNTAuMDc1OTExIDYwOC43ODA2NTksMTUzLjE0NTg2IDYwOC40NDgzNTEsMTU2LjE4NzcyNCBMNTY3LjUxMzYzNiw1MzAuODkzODAyIEM1NjUuNDgwMzM5LDU0OS41MDYwODggNTUwLjgwODQ3LDU2NC4yMTc3MTcgNTMyLjIwMTc1NSw1NjYuMzAxMzc3IEwxNTYuNTg0MDA4LDYwOC4zNjQ2NTggQzEzNC42Mjk4NDcsNjEwLjgyMzE3OCAxMTQuODM5NDU4LDU5NS4wMTg4MzkgMTEyLjM4MDkzNyw1NzMuMDY0Njc4IEMxMTIuMDI4NTU0LDU2OS45MTc5NTcgMTEyLjA1MTA1Myw1NjYuNzQwNTI0IDExMi40NDc5NjIsNTYzLjU5OTEwOSBMMTU5LjM1NzM3NiwxOTIuMzI1MTIyIEMxNjEuNzEzNDk0LDE3My42NzcxNTEgMTc2LjQ0ODEwNiwxNTkuMDE5Njc2IDE5NS4xMDgxODcsMTU2Ljc2MTQ2OSBaIiBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjMDBCQ0Q0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNjAuMDAwMDAwLCAzNjAuMDQ4OTc5KSByb3RhdGUoNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTM2MC4wMDAwMDAsIC0zNjAuMDQ4OTc5KSAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IkxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5NS4wMDAwMDAsIDE1OS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Imc5MzEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxLjUwMDAwMCwgMTA0LjAwMDAwMCkgc2NhbGUoLTEsIDEpIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC02MS41MDAwMDAsIC0xMDQuMDAwMDAwKSB0cmFuc2xhdGUoMC4wMDAwMDAsIC0wLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0icGF0aDkzMyIgcG9pbnRzPSIwIDAgMCAyMDcuOTYzNiAyNS45Mzg0MDY4IDIwNy45NjM2IDI1LjkzODQwNjggMjMuMDcyNCAxMjIuODEzNDE1IDIzLjA3MjQgMTIyLjgxMzQxNSAwIj48L3BvbHlnb24+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgaWQ9Imc5MzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxLjUwMDAwMCwgMTA0LjAwMDAwMCkgc2NhbGUoLTEsIDEpIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC02MS41MDAwMDAsIC0xMDQuMDAwMDAwKSB0cmFuc2xhdGUoMC4wMDAwMDAsIC0wLjAwMDAwMCkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyNi42NjY2NjYiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9InBhdGg5MzciIHBvaW50cz0iMCAwIDAgMjA3Ljk2MzYgMjUuOTM4NDA2OCAyMDcuOTYzNiAyNS45Mzg0MDY4IDIzLjA3MjQgMTIyLjgxMzQxNSAyMy4wNzI0IDEyMi44MTM0MTUgMCI+PC9wb2x5Z29uPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxnIGlkPSJnOTM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAuNTAwMDAwLCAxMjQuNTAwMDAwKSBzY2FsZSgtMSwgMSkgcm90YXRlKC0xODAuMDAwMDAwKSB0cmFuc2xhdGUoLTI1MC41MDAwMDAsIC0xMjQuNTAwMDAwKSB0cmFuc2xhdGUoMTc2LjAwMDAwMCwgMzUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iZzk0MS1DbGlwcGVkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgLTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imc5NDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDE1LCAwLjI2MDU5NikiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iZzk0NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43MjMxODgsIDAuNjgxODc1KSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDcwLjg3MDQ0OTUgTDAsMTc2LjQ3OTkyNiBMMjQuNjM1NzA2MiwxNzYuNDc5OTI2IEwyNC42MzU3MDYyLDcyLjQzMjcyNiBDMjQuNjM1NzA2Miw0MS44MTM1NjUyIDQxLjc4NTUyNzgsMjIuNDM5ODc3MiA3My41OTE5NTYzLDIyLjQzOTg3NzIgQzEwNS4zOTk0MjUsMjIuNDM5ODc3MiAxMjIuODYyMzI5LDQxLjgxMzU2NTIgMTIyLjg2MjMyOSw3Mi40MzI3MjYgTDEyMi44NjIzMjksMTc2LjQ3OTkyNiBMMTQ3LjQ5Njk5NSwxNzYuNDc5OTI2IEwxNDcuNDk2OTk1LDcwLjg3MDQ0OTUgQzE0Ny40OTY5OTUsMjguMzc4NDAzOSAxMjIuNTQ5MjQ2LDAuODgxNzExNzY4IDczLjU5MTk1NjMsMC44ODE3MTE3NjggQzI0LjYzNTcwNjIsMC44ODE3MTE3NjggMCwyOC42ODg5ODMzIDAsNzAuODcwNDQ5NSIgaWQ9InBhdGg5NDkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iZzk1MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43MjMxODgsIDAuNjgxODc1KSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjI2LjY2NjY2NiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCw3MC44NzA0NDk1IEwwLDE3Ni40Nzk5MjYgTDI0LjYzNTcwNjIsMTc2LjQ3OTkyNiBMMjQuNjM1NzA2Miw3Mi40MzI3MjYgQzI0LjYzNTcwNjIsNDEuODEzNTY1MiA0MS43ODU1Mjc4LDIyLjQzOTg3NzIgNzMuNTkxOTU2MywyMi40Mzk4NzcyIEMxMDUuMzk5NDI1LDIyLjQzOTg3NzIgMTIyLjg2MjMyOSw0MS44MTM1NjUyIDEyMi44NjIzMjksNzIuNDMyNzI2IEwxMjIuODYyMzI5LDE3Ni40Nzk5MjYgTDE0Ny40OTY5OTUsMTc2LjQ3OTkyNiBMMTQ3LjQ5Njk5NSw3MC44NzA0NDk1IEMxNDcuNDk2OTk1LDI4LjM3ODQwMzkgMTIyLjU0OTI0NiwwLjg4MTcxMTc2OCA3My41OTE5NTYzLDAuODgxNzExNzY4IEMyNC42MzU3MDYyLDAuODgxNzExNzY4IDAsMjguNjg4OTgzMyAwLDcwLjg3MDQ0OTUgWiIgaWQ9InBhdGg5NTMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
                        />

                        <Typography color="white" paddingTop={'20px'} fontSize='14px'>© Luxiren Theme 2021</Typography>
                    </Grid>

                </Container>
            </Box>
        </Box>
    );
};

export default Footer;