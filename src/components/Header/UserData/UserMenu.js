import React from 'react';

import Avatar from './Avatar';
import userImage from '../../../user-image.jpg';

const UserMenu = imageUrl => (
  <div>
    <Avatar imageUrl={userImage} alt="Bob Ross" />
    <span className="UserName">Bob Ross</span>
  </div>
);
export default UserMenu;
