import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import profilePic from '../../../../public/mounLogo.png';
import { IntContext } from '../../../data-components/Internationalization';
import styles from './TopMenu.module.css';

export interface ITopMenu {
  menuItems: MenuItem[];
}

export interface MenuItem {
  label: string;
  to: string;
}

const TopMenu: React.FC<ITopMenu> = ({ menuItems }) => {
  const Intern = useContext(IntContext);
  const { handleLanguage } = Intern;
  console.log({ Intern });
  return (
    <nav className={styles.parimaryHeader}>
      <div className={styles.menuContainer}>
        <div className={styles.menuItemsContainer}>
          <div className={styles.menuItemContainer}>
            <Image src={profilePic} />
          </div>
          {menuItems.map(({ label, to }) => (
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
              <Link href={'/'}>
                <a>English</a>
              </Link>
            </div>
            <div className={styles.buttonAccount}>
              <button
                onClick={() => {
                  handleLanguage && handleLanguage('en');
                }}
              >
                <a>Spanish</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
