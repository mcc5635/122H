
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
            <Nav className="mr-auto align-items-center d-flex" navbar data-testid="navbar-items">
              <NavItem className="d-flex align-items-center">
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
                    enableBackground="new 0 0 256 256" // `enable-background` converted to `enableBackground`
                    xmlSpace="preserve" // CamelCase for JSX
                  >
                    <path fill="#24292F" opacity="1.000000" stroke="none" d="
                    M149.000000,257.000000 
                    C99.333336,257.000000 50.166672,257.000000 1.000007,257.000000 
                    C1.000004,171.666672 1.000004,86.333351 1.000002,1.000018 
                    C86.333321,1.000012 171.666641,1.000012 257.000000,1.000006 
                    C257.000000,86.333313 257.000000,171.666626 257.000000,256.999969 
                    C221.166672,257.000000 185.333328,257.000000 149.000000,257.000000 
                    M107.684486,158.576614 
                    C108.728195,159.388016 109.740776,160.848572 110.820900,160.900360 
                    C115.967522,161.147125 121.132492,161.011017 126.290939,161.011032 
                    C134.720352,161.011078 143.149765,161.011032 151.508865,161.011032 
                    C151.508865,158.341736 151.508865,156.290634 151.508865,153.793625 
                    C140.474548,153.793625 129.773895,153.793625 118.126389,153.793625 
                    C122.129501,149.454346 125.540085,145.891953 128.799500,142.196243 
                    C135.582642,134.505112 143.530594,127.679428 147.251678,117.680038 
                    C150.887131,107.910706 147.472855,98.231247 138.681854,94.549828 
                    C131.474655,91.531654 124.060921,91.605377 116.937996,95.041519 
                    C109.551529,98.604782 106.846718,105.038811 106.199753,112.979980 
                    C109.328209,112.979980 112.033577,112.979980 114.704132,112.979980 
                    C114.990341,111.345673 115.113724,110.016983 115.462921,108.750557 
                    C117.428093,101.623619 124.401588,98.006828 132.069687,100.088615 
                    C138.261200,101.769539 141.987732,109.125313 139.337982,115.808891 
                    C137.781342,119.735237 135.342880,123.494087 132.597305,126.731438 
                    C125.504089,135.095184 117.931770,143.051285 110.763924,151.354202 
                    C109.266335,153.088943 108.685661,155.615265 107.684486,158.576614 
                    M200.014740,103.853386 
                    C195.745605,92.750092 183.057251,90.935539 173.337692,93.535202 
                    C163.804886,96.084915 158.268753,104.068283 159.345367,113.005768 
                    C161.925781,113.005768 164.506195,113.005768 167.030685,113.005768 
                    C167.403778,111.238297 167.627304,109.754143 168.034775,108.322342 
                    C169.830688,102.011833 175.466537,98.841354 182.992355,99.852119 
                    C188.726364,100.622231 193.065521,105.146263 192.232117,111.391502 
                    C191.630371,115.900520 189.658035,120.782181 186.831772,124.330635 
                    C179.486267,133.553085 171.460739,142.250763 163.430603,150.901657 
                    C160.716705,153.825363 159.156937,156.643875 160.322372,160.724884 
                    C174.846039,160.724884 189.408279,160.724884 203.866028,160.724884 
                    C203.866028,158.365906 203.866028,156.299347 203.866028,153.854767 
                    C192.840393,153.854767 182.122498,153.854767 170.638031,153.854767 
                    C172.236084,152.053787 173.295013,150.859100 174.355347,149.665634 
                    C181.203064,141.958038 188.356873,134.496048 194.800674,126.464409 
                    C199.806610,120.224968 202.840302,113.010811 200.014740,103.853386 
                    M59.847931,101.421730 
                    C55.275520,103.276207 57.909050,106.755699 57.491825,109.980301 
                    C63.523594,107.878082 69.015259,105.964096 75.115257,103.838097 
                    C75.115257,123.425568 75.115257,142.142746 75.115257,160.845688 
                    C77.989937,160.845688 80.455322,160.845688 82.904160,160.845688 
                    C82.904160,138.180908 82.904160,115.677567 82.904160,92.767372 
                    C75.137154,95.680206 67.857109,98.410423 59.847931,101.421730 
                    z"/>
                    <path fill="#FAFAFA" opacity="1.000000" stroke="none" d="
                    M107.683472,158.176697 
                    C108.685661,155.615265 109.266335,153.088943 110.763924,151.354202 
                    C117.931770,143.051285 125.504089,135.095184 132.597305,126.731438 
                    C135.342880,123.494087 137.781342,119.735237 139.337982,115.808891 
                    C141.987732,109.125313 138.261200,101.769539 132.069687,100.088615 
                    C124.401588,98.006828 117.428093,101.623619 115.462921,108.750557 
                    C115.113724,110.016983 114.990341,111.345673 114.704132,112.979980 
                    C112.033577,112.979980 109.328209,112.979980 106.199753,112.979980 
                    C106.846718,105.038811 109.551529,98.604782 116.937996,95.041519 
                    C124.060921,91.605377 131.474655,91.531654 138.681854,94.549828 
                    C147.472855,98.231247 150.887131,107.910706 147.251678,117.680038 
                    C143.530594,127.679428 135.582642,134.505112 128.799500,142.196243 
                    C125.540085,145.891953 122.129501,149.454346 118.126389,153.793625 
                    C129.773895,153.793625 140.474548,153.793625 151.508865,153.793625 
                    C151.508865,156.290634 151.508865,158.341736 151.508865,161.011032 
                    C143.149765,161.011032 134.720352,161.011078 126.290939,161.011032 
                    C121.132492,161.011017 115.967522,161.147125 110.820900,160.900360 
                    C109.740776,160.848572 108.728195,159.388016 107.683472,158.176697 
                    z"/>
                    <path fill="#FAFAFB" opacity="1.000000" stroke="none" d="
                    M200.119385,104.248184 
                    C202.840302,113.010811 199.806610,120.224968 194.800674,126.464409 
                    C188.356873,134.496048 181.203064,141.958038 174.355347,149.665634 
                    C173.295013,150.859100 172.236084,152.053787 170.638031,153.854767 
                    C182.122498,153.854767 192.840393,153.854767 203.866028,153.854767 
                    C203.866028,156.299347 203.866028,158.365906 203.866028,160.724884 
                    C189.408279,160.724884 174.846039,160.724884 160.322372,160.724884 
                    C159.156937,156.643875 160.716705,153.825363 163.430603,150.901657 
                    C171.460739,142.250763 179.486267,133.553085 186.831772,124.330635 
                    C189.658035,120.782181 191.630371,115.900520 192.232117,111.391502 
                    C193.065521,105.146263 188.726364,100.622231 182.992355,99.852119 
                    C175.466537,98.841354 169.830688,102.011833 168.034775,108.322342 
                    C167.627304,109.754143 167.403778,111.238297 167.030685,113.005768 
                    C164.506195,113.005768 161.925781,113.005768 159.342255,113.002739 
                    C158.268753,104.068283 163.804886,96.084915 173.337692,93.535202 
                    C183.057251,90.935539 195.745605,92.750092 200.119385,104.248184 
                    z"/>
                    <path fill="#FDFDFD" opacity="1.000000" stroke="none" d="
                    M60.212502,101.281181 
                    C67.857109,98.410423 75.137154,95.680206 82.904160,92.767372 
                    C82.904160,115.677567 82.904160,138.180908 82.904160,160.845688 
                    C80.455322,160.845688 77.989937,160.845688 75.115257,160.845688 
                    C75.115257,142.142746 75.115257,123.425568 75.115257,103.838097 
                    C69.015259,105.964096 63.523594,107.878082 57.491825,109.980301 
                    C57.909050,106.755699 55.275520,103.276207 60.212502,101.281181 
                    z"/>
                  </svg>
                </PageLink>
                <PageLink href="/" className="nav-link ml-2" testId="navbar-home">
                  122 Health
                </PageLink>
              </NavItem>
              {user && (
                <>
                  <NavItem className="ml-3">
                    <PageLink href="/csr" className="nav-link" testId="navbar-csr">
                      Health Plan
                    </PageLink>
                  </NavItem>
                  <NavItem className="ml-3">
                    <PageLink href="/asr" className="nav-link" testId="navbar-external">
                      Analysis
                    </PageLink>
                  </NavItem>
                  <NavItem className="ml-3">
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