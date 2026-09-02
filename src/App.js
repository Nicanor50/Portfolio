import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './Components/theme';

import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import DevConsole from './Components/Shared/DevConsole';
import AnimatedBackground from './Components/Shared/AnimatedBackground';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <AnimatedBackground />
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Navbar />
                    <Header />
                    <Project />
                    <Skills />
                    <About />
                    <Contact />
                    <Footer />
                </Box>

                {/* Easter egg : touche "`" ou 5 clics sur le logo */}
                <DevConsole />
            </div>
        </ThemeProvider>
    );
}

export default App;
