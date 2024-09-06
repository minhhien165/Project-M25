// src/components/SidebarLeft.tsx

import Link from 'next/link';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBell, faEnvelope, faBookmark, faList, faUsers, faUser, faPlus, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const SidebarLeft: FC = () => {
  return (
    <div className="col">
      <ul className="list-group">
        <li className="list-group-item">
          <Link href="/" className="list-group-item-action d-flex align-items-center">
            <FontAwesomeIcon icon={faHome} className="h-3 me-2" /> Home
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/notifications" className="list-group-item-action d-flex align-items-center">
            <FontAwesomeIcon icon={faBell} className="h-3 me-2" /> Notifications
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/messages" className="list-group-item-action d-flex align-items-center">
            <FontAwesomeIcon icon={faEnvelope} className="h-3 me-2" /> Messages
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/bookmarks" className="list-group-item-action d-flex align-items-center">
            <FontAwesomeIcon icon={faBookmark} className="h-3 me-2" /> Bookmarks
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/lists" className="list-group-item-action d-flex align-items-center">
            <FontAwesomeIcon icon={faList} className="h-3 me-2" /> Lists
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/groups" className="list-group-item-action d-flex align-items-center">
            <FontAwesomeIcon icon={faUsers} className="h-3 me-2" /> Groups
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/subscriptions" className="list-group-item-action d-flex align-items-center">
            <FontAwesomeIcon icon={faUser} className="h-3 me-2" /> Subscriptions
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/add-card" className="list-group-item-action d-flex align-items-center">
            <FontAwesomeIcon icon={faPlus} className="h-3 me-2" /> Add Card
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/profile" className="list-group-item-action d-flex align-items-center">
            <FontAwesomeIcon icon={faUser} className="h-3 me-2" /> My Profile
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/more" className="list-group-item-action d-flex align-items-center">
            <FontAwesomeIcon icon={faEllipsisH} className="h-3 me-2" /> More
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/new-post" className="list-group-item-action d-flex align-items-center">
            <FontAwesomeIcon icon={faPlus} className="h-3 me-2" /> New Post
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/private-event" className="list-group-item-action d-flex align-items-center">
            <FontAwesomeIcon icon={faEllipsisH} className="h-3 me-2" /> Private Event
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarLeft;
