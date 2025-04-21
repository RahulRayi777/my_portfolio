import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Nav = styled.div`
  background: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: ${({ theme }) => theme.text_primary};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  margin-left: 10px;
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const GitHubButton = styled.a`
  border-radius: 50px;
  background: ${({ theme }) => theme.primary};
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    color: #fff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.bg};
  z-index: 999;
  padding: 1rem 2rem;
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  padding: 10px 0;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
