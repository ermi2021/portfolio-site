import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
const IconLogo = () => (
  <StaticImage
              className="img"
              src="../../images/icon.png"
              width='50'
              height='50'
              quality={100}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="logo"
            />
);

export default IconLogo;
