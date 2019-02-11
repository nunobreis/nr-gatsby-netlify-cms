import React from 'react'

import Link from '../../atoms/Link/Link'
import Navigation from '../../molecules/Navigation/Navigation'
import Menu from '../../molecules/Menu/Menu'

import { Logo, Wrapper } from './Header.styles'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
    }

    this.handleOpenMenu = this.handleOpenMenu.bind(this)
    this.handleCloseMenu = this.handleCloseMenu.bind(this)
  }

  handleOpenMenu() {
    this.setState({ isMenuOpen: true })
  }

  handleCloseMenu() {
    this.setState({ isMenuOpen: false })
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Link onClick={this.handleOpenMenu}>
            <Navigation />
          </Link>
          <Link to="/">
            <Logo>nu-no</Logo>
          </Link>
        </Wrapper>
        {this.state.isMenuOpen ? (
          <Menu handleCloseMenu={this.handleCloseMenu} />
        ) : null}
      </div>
    )
  }
}

export default Header
