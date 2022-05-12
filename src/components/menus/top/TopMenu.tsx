import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import profilePic from '../../../../public/mounLogo.png';
import { IntContext } from '../../../data-components/Internationalization';
import styles from './TopMenu.module.css';

export interface ITopMenu {}

export interface MenuItem {
  label: string;
  to: string;
}

const TopMenu: React.FC<ITopMenu> = ({ menuItems }) => {
  const Intern = useContext(IntContext);
  const { language, handleLanguage } = Intern;
  const { rightMenu, menu } = language;
  const items: MenuItem[] = [
    {
      label: menu.home,
      to: '/',
    },
  ];
  return (
    <nav className={styles.parimaryHeader}>
      <div className={styles.menuContainer}>
        <div className={styles.menuItemsContainer}>
          <div className={styles.menuItemContainer}>
            <Image src={profilePic} />
          </div>
          {items.map(({ label, to }) => (
            <div className={styles.menuItemContainer} key={to}>
              <Link href={to}>
                <a>{label}</a>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.menuOptionButtonContainer}>
          <div className={styles.menuButtonContainer}>
            <div className={styles.buttonAccount}>
              <button
                onClick={() => {
                  handleLanguage && handleLanguage('en');
                }}
              >
                <a>{rightMenu.english}</a>
              </button>
            </div>
            <div className={styles.buttonAccount}>
              <button
                onClick={() => {
                  handleLanguage && handleLanguage('es');
                }}
              >
                <a>{rightMenu.spanish}</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOVILE MENU */}
      <div className={styles.menuMobileContainer}>
        <div className={styles.menuItemsContainer}>
          <div className={styles.menuItemContainer}>
            <Image src={profilePic} />
          </div>
        </div>
        <div>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button
                  className={styles.movileMenuButton}
                  variant="contained"
                  {...bindTrigger(popupState)}
                >
                  <MenuIcon color="action" />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    onClick={() => {
                      handleLanguage && handleLanguage('es');
                      popupState.close();
                    }}
                  >
                    {rightMenu.spanish}
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleLanguage && handleLanguage('en');
                      popupState.close();
                    }}
                  >
                    {rightMenu.english}
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </div>
      </div>

      {/* MOVILE MENU */}
    </nav>
  );
};

export default TopMenu;
