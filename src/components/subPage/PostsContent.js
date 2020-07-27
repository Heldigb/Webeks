import React, { useEffect } from "react"
import {Link} from "gatsby"
//Scroll Observer
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
//Styled Components
import { Container } from "../../styles/globalStyles"
import { Content, SubPageContentSection,Posts,PostsContent} from "../../styles/subpageStyles"
// import { FeaturedContent } from "../../styles/homeStyles"

const listOfPosts = [
  { id: 0, title: "About WordPress", path: "/wordpress", image: "image1.jpg", description: "asdasdasd is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
  { id: 1, title: "Gatsby", path: "/gatsby", image:"image1.jpg", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
  { id: 2, title: "Optimization", path: "/optimization", image:"image1.jpg", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
  { id: 3, title: "Check Ups", path: "/check", image: "image1.jpg", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
  { id: 4, title: "Get started", path: "/start", image: "image1.jpg", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }
]


const WorksContent = ({ onCursor }) => {
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
    <SubPageContentSection
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
        <Posts
          animate={animation}
                initial="hidden"
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
                  },
                  hidden: { opacity: 0, y: 72 },
                }}>
          <ul>
            {listOfPosts.map(work => (

              <li    onMouseEnter={() => onCursor("pointer")}
                     onMouseLeave={onCursor}
                     key={work.id}>

                  <Link to={`/blog${work.path}`}>



                <PostsContent>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </PostsContent>

                  </Link>
              </li>

            ))}
          </ul>


        </Posts>
      </Container>
    </SubPageContentSection>
  )
}

export default WorksContent
