import React, { useEffect } from "react"
//Scroll Observer
import { useInView } from "react-intersection-observer"
import {
  // motion,
  useAnimation } from "framer-motion"
//Styled Components
import { Container } from "../../styles/globalStyles"
import { Content, SubPageContentSection, Works, ImgWrap, WorksDescription } from "../../styles/subpageStyles"

const listOfWorks = [
  {
    id: 0,
    title: "PiraluxAuto",
    path: "http://piralux.dack.dk/",
    image: "image1.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 1,
    title: "KotoBook",
    path: "http://test.kotobook.dk/",
    image: "image1.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 2,
    title: "Carhart Wip",
    path: "https://www.carhartt-wip.dk/",
    image: "image1.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 3,
    title: "MotorPoint",
    path: "https://motorpoint.dk/",
    image: "image1.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 4,
    title: "WebExpress",
    path: "https://webexpress.dk/",
    image: "image1.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
]


const WorksContent = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px"
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
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
        },
        hidden: { opacity: 0, y: 72 }
      }}
    >
      <Container>
        <Content>


          Constantly looking for new features and improvements.
          Happy for New Projects, Challenges and Collaborations


        </Content>

        <Works>
          <ul>
            {listOfWorks.map(work => (

              <li key={work.id}>
                <ImgWrap>
                  <img src={require(`../../assets/images/${work.image}`)} alt={work.title}/>
                </ImgWrap>

                <WorksDescription>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </WorksDescription>
              </li>

            ))}
          </ul>


        </Works>
      </Container>
    </SubPageContentSection>
  )
}

export default WorksContent
