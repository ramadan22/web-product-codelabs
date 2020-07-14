import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.background ? props.background : '#fff')};
    color: ${props => (props.color ? props.color : '#000')};
    overflow: ${props => (props.overflow ? props.overflow : "auto")};
    padding-right: ${props => (props.paddingRight ? props.paddingRight : "0px")};
  }

  .modal-content-popup {
    opacity: 1 !important;
    margin-top: 0px !important;
  }
`

export default GlobalStyle