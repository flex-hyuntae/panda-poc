import { ComponentPropsWithoutRef, ReactNode } from "react"
import { css, cva, cx } from '@panda-poc/panda-css/css';
import { styled } from '@panda-poc/panda-css/jsx'

/**
 * css function 사용해서 제공
 */
const Button = ({ className, children }: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button type="button" className={cx(
      css({ bg: 'blueLight', px: '2', py: '3' }),
      className,
    )}>
      {children}
    </button>
  )
}


/**
 * Recipe 사용해서 제공
 */
const titleRecipe = cva({
  base: {
    fontWeight: 'bold',
    color: 'blueDark'
  }
})

const Title = ({ className, ...props }: ComponentPropsWithoutRef<'p'>) => {
  return (
    <p className={cx(
      titleRecipe(),
      // adding style overrides (external)
      className
      )} 
      {...props}
    />
  )
}

/**
 * Recipe 사용해서 styled component 생성해서 제공
 */
const flexRecipe = cva({
  base: {
    display: 'flex',
  },
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    align: {
      stretch: {
        alignItems: 'stretch',
      },
      center: {
        alignItems: 'center',
      },
      start: {
        alignItems: 'flex-start',
      },
      end: {
        alignItems: 'flex-end',
      },
    },
    justify: {
      stretch: {
        justifyContent: 'stretch',
      },
      center: {
        justifyContent: 'center',
      },
      start: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'stretch',
  },
});
const Flex = styled('div', flexRecipe);

/**
 * Recipe 사용해서 styled component 생성해서 제공
 */
const Paragraph = ({ ...props }: ComponentPropsWithoutRef<typeof StyledParagraph>) => {
  return <StyledParagraph {...props} />
}

const paragraphRecipe = cva({
  base: {
    color: 'grayDark'
  }
});

const StyledParagraph = styled('p', paragraphRecipe);

export { Flex, Button, Title, Paragraph }
