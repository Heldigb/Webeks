import React, { useState } from "react"
import { Link } from "gatsby"
//Framer Motion
import { motion, AnimatePresence } from "framer-motion"


// Styled components
import { Container, Flex } from "../styles/globalStyles"
import { Nav, NavHeader, NavList, NavFooter, CloseNav, NavVideos } from "../styles/navigationStyles"


import { FooterContent, FooterSocial } from "../styles/footerStyles"

import { Facebook, Instagram } from "../assets/svg/social-icons"


const navRoutes = [
  { id: 0, title: "READ STORY", path: "/about", video: "featured-video.mp4" },
  { id: 1, title: "WORKS", path: "/works", video: "easy.mp4" },
  { id: 2, title: "RESUME", path: "/resume", video: "make-it-zero.mp4" },
  { id: 3, title: "BLOG", path: "/blog", video: "it-takes-an-island.mp4" },
  // { id: 4, title: "CONTACT ME", path: "/contact", video: "50-beaches.mp4" }
]


const Navigation = ({ toggleMenu, setToggleMenu, onCursor = { onCursor } }) => {

  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: "featured-video.mp4",
    key: "0"

  })
  return (

    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "100%" }}
            transition={{ duration: .8, ease: [.6, .05, -.01, .9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2>Project</h2>
                  <CloseNav
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                  >
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>

              <NavList>
                <ul>
                  {navRoutes.map(route => (
                      <motion.li

                        onMouseEnter={() => onCursor("pointer")}
                        onMouseLeave={onCursor}
                        key={route.id}


                        onHoverStart={() =>
                          setRevealVideo({
                            show: true,
                            video: route.video,
                            key: route.id
                          })
                        }
                        onHoverEnd={() =>
                          setRevealVideo({
                            show: false,
                            video: route.video,
                            key: route.id
                          })
                        }
                      >
                        {/*<Link to={`/projects${route.path}`}>*/}
                        <Link to={`${route.path}`}>
                          <motion.div
                            initial={{ x: -108 }}
                            className="link"
                            whileHover={{
                              x: -40,
                              transition: {
                                duration: 0.4,
                                ease: [0.6, 0.05, -0.01, 0.9]
                              }
                            }}
                          >
                      <span className="arrow">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57"><path
                            d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                            fill="#FFF" fillRule="evenodd"></path></svg>
                      </span>
                            {route.title}
                          </motion.div>
                        </Link>
                      </motion.li>
                    )
                  )
                  }
                </ul>
              </NavList>

              <NavFooter>
                <Flex spaceBetween>
                  <FooterContent>
                    <p>info@webexpress.dk</p>
                  </FooterContent>
                  <FooterContent wider>
                    <p>+45.52.79.4567</p>
                  </FooterContent>
                  <FooterSocial>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}

                      href="https://www.instagram.com/webexpress_dk/"
                      target="_blank"
                    >
                      <Instagram/>
                    </a>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}

                      href="https://www.facebook.com/heldigb/"
                      target="_blank"
                    >
                      <Facebook/>
                    </a>
                  </FooterSocial>
                </Flex>
              </NavFooter>

              <NavVideos>
                <motion.div animate={{ width: revealVideo.show ? 0 : "100%" }} className="reveal"></motion.div>


                <motion.div className="video">
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.video
                      key={revealVideo.key}
                      src={require(`../assets/video/${revealVideo.video}`)}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{
                        opacity: 1
                      }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      loop
                      autoPlay
                    ></motion.video>
                  </AnimatePresence>
                </motion.div>

              </NavVideos>
            </Container>
          </Nav>)}
      </AnimatePresence>
    </>
  )
}


export default Navigation