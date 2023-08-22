import { styled } from 'styled-components'
import { space } from '../../UI/variaveis'
import { Title } from '../../UI/styles'

export const SectionContact = styled.section`
  background: ${(p) => (p.theme.title === 'dark' ? '#000' : '#fff')};
  display: flex;
  flex-direction: column;
  color: ${(p) => (p.theme.title === 'dark' ? '#fff' : '#000')};
  justify-content: center;
  padding: ${space.x28} 0px ${space.x12} 0px;
  transition: 300ms;
`

export const TitleMain = styled(Title)`
  padding: 0px;
`

export const Addres = styled.address`
  width: ${space.container.xcontainer_lg};
  border: 2px solid ${(p) => (p.theme.title === 'dark' ? '#fff' : '#000')};
  border-radius: ${space.x2};
  margin: auto;

  > hr {
    margin: 0;
    border: 1px solid;
  }
`
export const BoxMain = styled.div`
  display: flex;
  justify-content: center;

  .contat {
    width: 45%;
    border-right: 2px solid;
    > h3 {
      font-size: ${(p) => p.theme.typography.variants.fontSize.lg};
      font-weight: 400;
      padding: ${space.x2} ${space.x4} 0px ${space.x4};
    }
    > p {
      padding: ${space.x1} ${space.x4};
    }
    > ul {
      display: flex;
      border-bottom: 2px solid;
      padding: ${space.x1} ${space.x8};
      justify-content: space-between;
      box-sizing: border-box;
      font-size: ${(p) => p.theme.typography.variants.fontSize.xs};
      > li {
        list-style: circle;
      }
    }
  }
  > hr {
    border: 1px solid;
    margin: 0;
  }
`
export const Locat = styled.div`
  > h4 {
    padding: 0px ${space.x4};
    font-size: ${(p) => p.theme.typography.variants.fontSize.lg_md};
    color: ${(p) => (p.theme.title === 'dark' ? '#000' : '#fff')};
    font-weight: 300;
    background-color: ${(p) => (p.theme.title === 'dark' ? '#fff' : '#000')};
    width: 100px;
  }

  .grid-locDados {
    padding: 2px ${space.x4} 10px ${space.x4};
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    border-bottom: 2px solid;

    > div {
      > label {
        font-size: ${(p) => p.theme.typography.variants.fontSize.xs};
        text-decoration: underline;
      }
      > p {
        font-weight: 600;
      }
    }
  }
`

export const Map = styled.div`
  height: 180px;
`
export const Gmail = styled.div`
  box-sizing: border-box;
  padding: ${space.x8};
  width: 55%;

  > h3 {
    font-size: ${(p) => p.theme.typography.variants.fontSize.xl};
    font-weight: 300;
  }

  .mainInfo {
    display: flex;
    gap: 24px;
    margin: ${space.x4} 0px;

    > input {
      width: 50%;
      background: ${(p) => (p.theme.title === 'dark' ? '#000' : '#fff')};
      outline: none;
      border: 2px solid ${(p) => (p.theme.title === 'dark' ? '#fff' : '#000')};
      border-radius: ${space.x2};
      font-size: ${(p) => p.theme.typography.variants.fontSize.md};
      padding: ${space.x2};
      margin: 0px;
      color: ${(p) => (p.theme.title === 'dark' ? '#fff' : '#000')};

      &:focus {
        border: 2px solid ${(p) => p.theme.colors.primary.base};
      }
    }
  }

  .msg {
    > textarea {
      box-sizing: border-box;
      resize: none;
      width: 100%;
      height: 240px;
      background: ${(p) => (p.theme.title === 'dark' ? '#000' : '#fff')};
      border: 2px solid ${(p) => (p.theme.title === 'dark' ? '#fff' : '#000')};
      border-radius: ${space.x2};
      padding: 5px;
      margin: 0;
      color: ${(p) => (p.theme.title === 'dark' ? '#fff' : '#000')};
      font-size: 1.4em;

      &:focus {
        outline: none;
        border: 2px solid ${(p) => p.theme.colors.primary.base};
      }
    }
  }

  > form > button {
    width: 100%;
    height: 40px;
    border-radius: ${space.x2};
    background: ${(p) => (p.theme.title === 'dark' ? '#fff' : '#000')};
    color: ${(p) => (p.theme.title === 'dark' ? '#000' : '#fff')};
    font-size: ${(p) => p.theme.typography.variants.fontSize.lg_md};

    &:hover {
      background: ${(p) => p.theme.colors.primary.base};
    }
  }
`
