import React, { useEffect } from "react"
//Scroll Observer
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
//Styled Components
import { Container } from "../../styles/globalStyles"
import { Content, HomeContentSection } from "../../styles/homeStyles"

const HomeContent = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeContentSection
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <Container>
        <Content>

          I have more than 4 years of Web Design and Development experience.
          Constantly looking for new features and improvements.
          Happy for New Projects, Challenges and Collaborations

        </Content>
      </Container>
    </HomeContentSection>
  )
}

export default HomeContent
