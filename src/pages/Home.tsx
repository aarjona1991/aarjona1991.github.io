import { 
    Navigation, 
    Hero, 
    About, 
    Skills, 
    Projects, 
    Contact, 
    Footer 
} from "./components/molecules";

const Home = () => {
    return (
        <>
            <Navigation />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export { Home };