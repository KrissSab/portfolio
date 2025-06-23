import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import styles from '../src/App.module.css'

export const App = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className={styles.fluidContainer}>
            <div className={styles.portfolioContainer}>
                <section className={styles.bioContainer}>
                    <img className={styles.photo} src="/photo.png" alt="photo" />
                    <article>
                        <h1>krissab
                            {theme === 'light' ?
                                <img className={styles.themeImg} onClick={toggleTheme} src="/sun.png" alt="sun" /> :
                                <img className={styles.themeImg} onClick={toggleTheme} src="/moon.png" alt="moon" />
                            }
                        </h1>
                        <h2 className={styles.myPosition}>Backend Engineer</h2>
                        <a href="https://t.me/im_kristian">@im_kristian</a>
                    </article>
                </section>
                <section>
                    <label className={styles.blockName}>About</label>
                    <p className={styles.blockDetails}>
                        Hey there! I'm Kristian, and I'm a Backend Engineer with more than  two years of commercial
                        experience – always pushing for high-quality, reliable solutions. I really enjoy
                        the whole process of bringing dynamic and innovative products to life, from the
                        very first idea all the way to launch. My main goal is always to build solid
                        foundations on the server-side that ultimately make the user experience smoother and continually better.
                    </p>
                </section>
                <section>
                    <label className={styles.blockName}>Tech Stack</label>
                    <p className={styles.blockDetails}>
                        NodeJS • NestJS • ExpressJS • Solidity • GoLang • SQL | NoSQL • Docker • RestAPI • Websockets • GraphQL
                    </p>
                </section>
                <section>
                    <label className={styles.blockName}>Work Experience</label>
                    <p className={styles.year}>2024 - present</p>
                    <div className={styles.jobContainer}>
                        <span className={styles.jobName}>
                            Backend Engineer - <a className={styles.petName} href="https://www.linkedin.com/company/appexoft/">Appexoft ↗</a>
                        </span>
                        <p className={styles.jobDetails}>
                            Working as outstaff at office, developing a new
                            feature for the existing project, creating a new
                            microservice, and implementing a new feature for
                            the existing one.
                        </p>
                        <span className={styles.jobTechnologies}>
                            Node JS • Express JS • Nest JS • SQL | NoSQL • Problem Solving
                        </span>
                    </div>
                    <p className={styles.year}>2024</p>
                    <div className={styles.jobContainer}>
                        <span className={styles.jobName}>
                            Full Stack Engineer - Freelance
                        </span>
                        <p className={styles.jobDetails}>
                            Collaborated with various customers, undertaking tasks such as designing and creating landing pages, e-commerce websites, bug fixing, and optimization.
                        </p>
                        <span className={styles.jobTechnologies}>
                            ReactJS • NodeJS • NestJS • VanilaJS • UI
                        </span>
                    </div>
                    <p className={styles.year}>2023 - 2024</p>
                    <div className={styles.jobContainer}>
                        <span className={styles.jobName}>
                            Junior Full Stack - SkyEl
                        </span>
                        <p className={styles.jobDetails}>
                            Developer in a team of 6 members, developed and updated
                            e-store for the Poland market for 5 months.
                            Mostly worked on the front end side. Unfortunately,
                            the company was closed for some reason and we were "fired"</p>
                        <span className={styles.jobTechnologies}>
                            ReactJS • Redux • NodeJS • Tailwind
                        </span>
                    </div>
                </section>
                <section>
                    <label className={styles.blockName}>Pet Projects</label>
                    <p className={styles.year}>2024 - present</p>
                    <div className={styles.petContainer}>
                        <p className={styles.petName}>Full Stack Engineer - Sea Sensors Tracking                         <div className={styles.groupContainer}>
                            <a className={styles.petName} href="https://github.com/KrissSab/frontend-seasensors">
                                FrontEnd  ↗
                            </a>
                            <a className={styles.petName} href="https://github.com/KrissSab/backend-seasensors">
                                BackEnd  ↗
                            </a>
                        </div></p>
                        <p className={styles.petDetails}>
                            The application gives the ability to create or load data
                            from Redis (if it already was created) about sea sensors.
                            Sensors data visualization and the possibility to manage the thruster
                            speed of each sensor, sensors data updates every second.
                        </p>
                        <span className={styles.petTechnologies}>
                            ReactJS • Tailwind • Shadcn/ui • NestJS • Redis • Websockets • RestAPI • Docker
                        </span>
                    </div>
                    <div className={styles.petContainer}>
                        <span className={styles.petName} >
                            Full Stack Engineer - <a className={styles.petName} href="https://github.com/danylomusiiaka/HelpHub">HelpHub ↗</a>
                        </span>
                        <p className={styles.petDetails}>
                            My third Hackathon, where my team developed a fully
                            functional platform "HelpHub" which was intended
                            to help victims. Here you can reg as a victim or
                            as a volunteer. If you were a victim you
                            could join volunteer events, and if you are a
                            volunteer you can create events. Took 5th place</p>
                        <span className={styles.petTechnologies}>
                            ReactJS • NodeJS • Modular CSS
                        </span>
                        <span className={styles.petName}>
                            Backend Engineer - <a className={styles.petName} href="https://github.com/LNU-FECT-Student-Government/Kaizen">Kaizen ↗</a>
                        </span>
                        <p className={styles.petDetails}>
                            My fourth Hackathon, where we took 3rd place by creating an application
                            where you can search for question related to studying some technologies or subjects,
                            also implemented Gemini AI assistant. StackOverflow like application.</p>
                        <span className={styles.petTechnologies}>
                            NodeJS • NestJS • MongoDB • Gemini AI • Git
                        </span>
                    </div>
                    <p className={styles.year}>2023 - 2024</p>
                    <div className={styles.petContainer}>
                        <span className={styles.petName}>
                            Frontend Engineer - <a className={styles.petName} href="https://github.com/KrissSab/hlpme-front">HlpMe ↗</a>
                        </span>
                        <p className={styles.petDetails}>
                            My second Hackathon, where we took 3rd place by creating an application
                            where you can share your geolocation and ask for help,
                            it was possible to do so using a website and telegram bot</p>
                        <span className={styles.petTechnologies}>
                            ReactJS • GoogleMaps API • Modular CSS • Vercel
                        </span>
                    </div>
                </section>
                <section className={styles.linksContainer}>
                    <label className={styles.blockName}>Links</label>
                    <div className={styles.linkContainer}>
                        <p className={styles.linkName}>GitHub</p>
                        <a className={styles.link} href="https://github.com/KrissSab">KrissSab ↗</a>
                    </div>
                    <div className={styles.linkContainer}>
                        <p className={styles.linkName}>Twitter</p>
                        <a className={styles.link} href="https://x.com/im_kri5tian">@im_kri5tian ↗</a>
                    </div>
                    <div className={styles.linkContainer}>
                        <p className={styles.linkName}>Telegram</p>
                        <a className={styles.link} href="https://t.me/im_kristian">@im_kristian ↗</a>
                    </div>
                    <div className={styles.linkContainer}>
                        <p className={styles.linkName}>Email</p>
                        <a className={styles.link} href="mailto::kristian.sabadosh1@gmail.com">kristian.sabadosh1@gmail.com ↗</a>
                    </div>
                </section>
            </div>

        </div>
    )
}
