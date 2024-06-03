import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Button, Flex, Paragraph, Title } from '@panda-poc/components'
import { css } from '@panda-poc/panda-css/css'
import { styled } from '@panda-poc/panda-css/jsx'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className={css({ bg: 'magentaLight', px: '6', py: '9' })}>
          Button Custom css
        </button>
        <Button>Button</Button>
        <StyledButton>Styled button test</StyledButton>
        <Title>Title</Title>
        <StyledTitle>
          Styled Title
        </StyledTitle>
        <Flex align="start" justify="end">
          <div>Flex1</div>
          <div>Flex2</div>
        </Flex>
        <StyledFlex>
          <div>StyledFle1</div>
          <div>StyledFle2</div>
        </StyledFlex>
      </div>
      <Paragraph>
        Paragraph
      </Paragraph>
      <StyledParagraph>
        StyledParagraph
      </StyledParagraph>
    </>
  )
}

const StyledButton = styled(Button, {
  base: {
    bg: 'greenLight',
    px: '20'
  }
})

const StyledTitle = styled(Title, {
  base: {
    color: 'yellowDark'
  }
})

const StyledFlex = styled(Flex, {
  base: {
    width: '100%',
    alignItems: 'center'
  }
});

const StyledParagraph = styled(Paragraph, {
  base: {
    color: 'goldDark'
  }
})

export default App
