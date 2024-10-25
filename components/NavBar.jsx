
'use  client';

import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0/client';



import PageLink from './PageLink';
import AnchorLink from './AnchorLink';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container" data-testid="navbar">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarToggler onClick={toggle} data-testid="navbar-toggle" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar data-testid="navbar-items">
              <NavItem>
                <PageLink href="https://122longevity.com" className="nav-link" testId="navbar-home">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 256 256"
                    enable-background="new 0 0 256 256"
                    xmlSpace="preserve" // JSX uses camelCase, so replace `xml:space` with `xmlSpace`
                  >
                    <path fill="#24292F" opacity="1.000000" stroke="none" d="M149.000000,257.000000 C99.333336,257.000000 50.166672,257.000000 1.000007,257.000000 C1.000004,171.666672 1.000004,86.333351 1.000002,1.000018 C86.333321,1.000012 171.666641,1.000012 257.000000,1.000006 C257.000000,86.333313 257.000000,171.666626 257.000000,256.999969 C221.166672,257.000000 185.333328,257.000000 149.000000,257.000000" />
                    <path fill="#FAFAFA" opacity="1.000000" stroke="none" d="M107.683472,158.176697 C108.685661,155.615265 109.266335,153.088943 110.763924,151.354202 C117.931770,143.051285 125.504089,135.095184 132.597305,126.731438 C135.342880,123.494087 137.781342,119.735237 139.337982,115.808891 C141.987732,109.125313 138.261200,101.769539 132.069687,100.088615 C124.401588,98.006828 117.428093,101.623619 115.462921,108.750557 C115.113724,110.016983 114.990341,111.345673 114.704132,112.979980 C112.033577,112.979980 109.328209,112.979980 106.199753,112.979980 C106.846718,105.038811 109.551529,98.604782 116.937996,95.041519 C124.060921,91.605377 131.474655,91.531654 138.681854,94.549828 C147.472855,98.231247 150.887131,107.910706 147.251678,117.680038 C143.530594,127.679428 135.582642,134.505112 128.799500,142.196243 C125.540085,145.891953 122.129501,149.454346 118.126389,153.793625 C129.773895,153.793625 140.474548,153.793625 151.508865,153.793625 C151.508865,156.290634 151.508865,158.341736 151.508865,161.011032 C143.149765,161.011032 134.720352,161.011078 126.290939,161.011032 C121.132492,161.011017 115.967522,161.147125 110.820900,160.900360 C109.740776,160.848572 108.728195,159.388016 107.683472,158.176697" />
                  </svg>
                </PageLink>
                <PageLink href="/" className="nav-link" testId="navbar-home">
                  122 Health
                </PageLink>
              </NavItem>



              {user && (
                <>
                  <NavItem>
                    <PageLink href="/csr" className="nav-link" testId="navbar-csr">
                      Health Plan
                    </PageLink>
                  </NavItem>
                  <NavItem>
                    <PageLink href="/asr" className="nav-link" testId="navbar-external">
                      Analysis
                    </PageLink>
                  </NavItem>
                  <NavItem>
                    <PageLink href="/bbb" className="nav-link" testId="navbar-external">
                      Biomarkers
                    </PageLink>
                  </NavItem>
                </>
              )}
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isLoading && !user && (
                <NavItem id="qsLoginBtn">
                  <AnchorLink
                    href="/api/auth/login"
                    className="btn btn-primary btn-margin"
                    tabIndex={0}
                    testId="navbar-login-desktop">
                    Log in
                  </AnchorLink>
                </NavItem>
              )}
              {user && (
                <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                      height="50"
                      decode="async"
                      data-testid="navbar-picture-desktop"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header data-testid="navbar-user-desktop">
                      {user.name}
                    </DropdownItem>
                    <DropdownItem className="dropdown-profile" tag="span">
                      <PageLink href="/profile" icon="user" testId="navbar-profile-desktop">
                        Profile
                      </PageLink>
                    </DropdownItem>
                    <DropdownItem id="qsLogoutBtn">
                      <AnchorLink href="/api/auth/logout" icon="power-off" testId="navbar-logout-desktop">
                        Log out
                      </AnchorLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isLoading && !user && (
              <Nav className="d-md-none" navbar>
                <AnchorLink
                  href="/api/auth/login"
                  className="btn btn-primary btn-block"
                  tabIndex={0}
                  testId="navbar-login-mobile">
                  Log in
                </AnchorLink>
              </Nav>
            )}
            {user && (
              <Nav
                id="nav-mobile"
                className="d-md-none justify-content-between"
                navbar
                data-testid="navbar-menu-mobile">
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                      height="50"
                      decode="async"
                      data-testid="navbar-picture-mobile"
                    />
                    <h6 className="d-inline-block" data-testid="navbar-user-mobile">
                      {user.name}
                    </h6>
                  </span>
                </NavItem>
                <NavItem>
                  <PageLink href="/profile" icon="user" testId="navbar-profile-mobile">
                    Profile
                  </PageLink>
                </NavItem>
                <NavItem id="qsLogoutBtn">
                  <AnchorLink
                    href="/api/auth/logout"
                    className="btn btn-link p-0"
                    icon="power-off"
                    testId="navbar-logout-mobile">
                    Log out
                  </AnchorLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;