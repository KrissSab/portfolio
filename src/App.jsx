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
                        <h2 className={styles.myPosition}>Full Stack Engineer</h2>
                        <a href="https://t.me/im_kristian">@im_kristian</a>
                    </article>
                </section>
                <section>
                    <label className={styles.blockName}>About</label>
                    <p className={styles.blockDetails}>
                        Hi, I'm Kristian, higly motivated and quality-oriented Full Stack Engineer with 1 year
                        in the industry with expirience in designing and implementing
                        scalable web applications. I love to create dynamic and innovative
                        products from scratching to publishing. Focused on creating
                        user-friendly experiences that continually
                        become better and better.
                    </p>
                </section>
                <section>
                    <label className={styles.blockName}>Work Experience</label>
                    <p className={styles.year}>2024 - present</p>
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
                        <a className={styles.petName} href="https://github.com/danylomusiiaka/HelpHub">
                            Full Stack Engineer - HelpHub  ↗
                        </a>
                        <p className={styles.petDetails}>
                            My 3 Hackathon, where my team developed a fully
                            functional platform "HelpHub" which was intended
                            to help victims. Here you can reg as a victim or
                            as a volunteer. If you were a victim you
                            could join volunteer events, and if you are a
                            volunteer you can create events. Took 5th place</p>
                        <span className={styles.petTechnologies}>
                            ReactJS • NodeJS • Modular CSS
                        </span>
                    </div>
                    <p className={styles.year}>2023 - 2024</p>
                    <div className={styles.petContainer}>
                        <a className={styles.petName} href="https://github.com/KrissSab/hlpme-front">
                            Front End Engineer - HlpMe  ↗
                        </a>
                        <p className={styles.petDetails}>
                            My 2 Hackathon, where we took 3rd place by creating an application
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
