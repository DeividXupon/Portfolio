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

  @media (max-width: 1199px) {
    width: ${space.container.xcontainer_md};
  }

  @media (max-width: 992px) {
    width: ${space.container.xcontainer_sm};
  }

  @media (max-width: 767px) {
    width: ${space.container.xcontainer_xs};
  }

  @media (max-width: 480px) {
    box-sizing: border-box;
    width: 300px;
  }
`
export const BoxMain = styled.div`
  display: flex;
  justify-content: center;

  .contat {
    width: 45%;
    border-right: 2px solid;
    overflow: hidden;

    .faleCom {
      height: 25%;
      > h3 {
        font-size: ${(p) => p.theme.typography.variants.fontSize.lg_md};
        font-weight: 400;
        padding: ${space.x2} ${space.x4} 0px ${space.x4};
      }
      > p {
        padding: ${space.x1} ${space.x4};
        font-size: ${(p) => p.theme.typography.variants.fontSize.sm};
      }
      > ul {
        display: flex;
        border-bottom: 2px solid;
        padding: ${space.x1} ${space.x8};
        justify-content: space-between;
        box-sizing: border-box;
        font-size: ${(p) => p.theme.typography.variants.fontSize.sm};
        > li {
          list-style: circle;
        }
      }
    }
  }
  > hr {
    border: 1px solid;
    margin: 0;
  }

  @media (max-width: 1199px) {
    .contat {
      width: 55%;
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;

    .contat {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .contat {
      .faleCom {
        > ul {
          flex-direction: column;
        }
      }
    }
  }
`
export const Locat = styled.div`
  height: 30%;
  border-bottom: 2px solid;
  > h4 {
    padding: 0px ${space.x4};
    font-size: ${(p) => p.theme.typography.variants.fontSize.lg_md};
    color: ${(p) => (p.theme.title === 'dark' ? '#fff' : '#000')};
    font-weight: 400;
    width: 100px;
  }

  .grid-locDados {
    padding: 2px ${space.x4} 10px ${space.x4};
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

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

  @media (max-width: 767px) {
    > h4 {
      display: none;
    }
  }
`

export const Map = styled.div`
  overflow: hidden;
  border-radius: 0px 0px 0px ${space['x2.5']};
  height: 45%;
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

  @media (max-width: 1199px) {
    width: 45%;
    padding: ${space.x4};

    > h3 {
      font-size: ${(p) => p.theme.typography.variants.fontSize.lg_md};
      text-align: center;
      font-weight: 400;
    }

    .mainInfo {
      flex-direction: column;
      gap: ${space.x4};
      margin: ${space.x4} 0px;

      > input {
        box-sizing: border-box;
        width: 100%;
      }
    }
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`
