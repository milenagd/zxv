import React from 'react';
import * as icons from 'app/icons/socialMedia';
import styles from './SocialMedia.css';

export default class SocialMedia extends React.Component {
  render() {
    const socialMedias = [
      {
        description: 'twitter icon',
        icon: icons.twitter,
        url: 'https://twitter.com/ZeDelivery',
      },
      {
        description: 'facebook icon',
        icon: icons.facebook,
        url: 'https://web.facebook.com/zedeliverydebebidas?_rdc=1&_rdr',
      },
      {
        description: 'instagram icon',
        icon: icons.instagram,
        url: 'https://www.instagram.com/zedelivery/?hl=pt',
      },
    ];
    return (
      <div className={styles.wrapper}>
        { socialMedias.map(item =>
          (
            <a
              href={item.url}
              target="_blank"
              key={item.description}
            >
              <img
                src={item.icon}
                alt={item.description}
              />
            </a>
          )
        )}
      </div>
    );
  }
}
