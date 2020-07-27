import React from "react"
import { Container } from "../../styles/globalStyles"
import { Content, SubPageContentSection } from "../../styles/subpageStyles"


import { Introduction } from "../../styles/resumeStyle"

const ResumeContent = () => {
  return (
    <SubPageContentSection>
      <Container>
        <Introduction spaceBetween>
          <Content> <img src={require(`../../assets/images/image1.jpg`)} alt=""/>

            <h2> Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorum et fugit iste nihil non odio.
              Adipisci consequuntur cupiditate enim nihil pariatur placeat! Atque debitis hic magni placeat, quae
              voluptates!</p>
          </Content>

        </Introduction>


      </Container>

    </SubPageContentSection>

  )
}

export default ResumeContent