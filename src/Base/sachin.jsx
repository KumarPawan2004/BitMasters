import EmailIcon from "@mui/icons-material/Email";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Stack,
  Divider,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";

import logoUrl from "../pages/Images/logo.png";
import contentPageUrl from "../pages/Images/contactus.gif";
import searchIconUrl from "../pages/Images/discover.gif";
import handshakeIconUrl from "../pages/Images/teams.gif";
import booksIconUrl from "../pages/Images/mentor.gif";

const featureCards = [
  {
    id: 1,
    title: "Discover and Connect",
    description:
      "Find and network with individuals who share your skills, interests, and project ambitions.",
    icon: searchIconUrl,
    alt: "Search",
  },
  {
    id: 2,
    title: "Build and Join Teams",
    description:
      "Form or join dynamic project teams to collaborate, innovate, and grow together.",
    icon: handshakeIconUrl,
    alt: "Handshake",
  },
  {
    id: 3,
    title: "Learn with Mentorship",
    description:
      "Get guidance from seasoned mentors to accelerate your learning and career growth.",
    icon: booksIconUrl,
    alt: "Books",
  },
];

const footerColumns = [
  {
    id: 1,
    title: "Explore",
    links: ["Discover Project", "Connect With Mentors", "Team Up & Collaborate"],
  },
  {
    id: 2,
    title: "Learn",
    links: ["Learning Hub", "Articles & Insights", "How-To-Guides", "Help Center"],
  },
  {
    id: 3,
    title: "About Us",
    links: ["Our Story", "Join Our Team", "Get In Touch"],
  },
  {
    id: 4,
    title: "Legal",
    links: ["Privacy Policy", "Terms Of Service"],
  },
];

const appTheme = createTheme({
  palette: {
    primary: { main: "#281bb9", light: "#5849ff", dark: "#1500ff" },
    secondary: { main: "#000000", light: "#00000066", dark: "#00000080" },
    background: { default: "#ffffff", paper: "#ffffff" },
    text: {
      primary: "#000000",
      secondary: "#00000080",
      disabled: "#00000066",
    },
    error: { main: "#ff0000" },
  },
  typography: {
    fontFamily: "'Poppins', Helvetica, Arial, sans-serif",
  },
});

// Properly typed with React.FC for TypeScript
import React from 'react';

const HomePage = () => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      <div className="bg-white w-full overflow-hidden">
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar className="flex flex-wrap justify-between px-4 lg:px-16">
            <div className="flex items-center">
              <img src={logoUrl} alt="Logo" className="w-24 h-24 object-contain" />
              <Typography variant="h5" className="ml-3 text-black">
                Learn Loop
              </Typography>
            </div>
            <div className="hidden md:flex gap-6 items-center">
              <Typography variant="h6">Project</Typography>
              <Typography variant="h6">Mentorship</Typography>
              <Typography variant="h6">Teams</Typography>
              <Typography variant="h6">Pricing</Typography>
            </div>
            <Stack direction="row" spacing={2} className="mt-4 md:mt-0">
              <Button variant="outlined" className="text-black border-black">
                Sign Up
              </Button>
              <Button variant="contained" color="primary">
                Log In
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>

        <div
          className="w-full flex flex-col items-center justify-center text-center px-6 py-24 bg-cover bg-center"
          style={{ backgroundImage: `url(${contentPageUrl})` }}
        >
          <h1 className="text-[2.5rem] sm:text-[4rem] lg:text-[5rem] font-bold mb-6 leading-tight">
            Loop In. Level Up. Learnloop.
          </h1>
          <p className="max-w-4xl text-lg sm:text-xl mb-8">
            Welcome to Learnloop — where curiosity meets community, and growth never stops.
            We're not just another learning platform. We're a movement for lifelong learners,
            makers, and doers who believe that education should be as dynamic as the world we live in.
          </p>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="rounded-full text-white text-2xl sm:text-3xl w-64 sm:w-72 h-20 sm:h-24"
          >
            Get Started
          </Button>
        </div>

        <Container maxWidth="xl" className="my-12">
          <Grid container spacing={4} justifyContent="center">
            {featureCards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className="h-full flex flex-col items-center">
                  <CardContent className="text-center w-full">
                    <img
                      src={card.icon}
                      alt={card.alt}
                      className="w-20 h-20 object-contain mx-auto mb-4"
                    />
                    <Typography variant="h5" className="mb-2 font-semibold">
                      {card.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <div className="bg-primary py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <Typography variant="h4" className="text-white max-w-xl text-center md:text-left">
            Explore Opportunities
            <br /> Find projects that match your goals.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="contained"
              className="bg-white text-primary font-bold text-lg h-14 sm:h-16 rounded-xl"
            >
              Create Profile
            </Button>
            <Button
              variant="contained"
              className="bg-primary-light text-white font-bold text-lg h-14 sm:h-16 rounded-xl"
            >
              Browse Projects
            </Button>
          </div>
        </div>

        <Container maxWidth="xl" className="mt-12 mb-6">
          <Grid container spacing={4} justifyContent="center">
            {footerColumns.map((column) => (
              <Grid item key={column.id} xs={6} md={3}>
                <Typography
                  variant="h6"
                  align="center"
                  color="text.secondary"
                  gutterBottom
                >
                  {column.title}
                </Typography>
                <Stack spacing={1} alignItems="center">
                  {column.links.map((link, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      align="center"
                      color="text.disabled"
                      className="cursor-pointer"
                    >
                      {link}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Divider className="my-8" />

          <div className="flex justify-center mb-4">
            <Stack direction="row" spacing={4}>
              <EmailIcon sx={{ fontSize: 36, color: "text.secondary" }} />
              <RocketLaunchIcon sx={{ fontSize: 36, color: "text.secondary" }} />
            </Stack>
          </div>

          <Typography variant="body2" align="center" color="text.secondary">
            © 2025 Learn Loop. All rights reserved.
          </Typography>
        </Container>
      </div>
    </MuiThemeProvider>
  );
};

export default HomePage;