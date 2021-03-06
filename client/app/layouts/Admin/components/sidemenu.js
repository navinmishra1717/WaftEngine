// https://material.io/tools/icons
import React from 'react';

import {
  FaChartPie,
  FaRegFile,
  FaFileAlt,
  FaAlignLeft,
  FaLink,
  FaImages,
  FaPhotoVideo,
  FaPencilAlt,
  FaThLarge,
  FaRss,
  FaQuestionCircle,
  FaQuestion,
  FaArchive,
  FaShieldAlt,
  FaSitemap,
  FaUserShield,
  FaBoxOpen,
  FaBoxes,
  FaPuzzlePiece,
  FaCog,
  FaCogs,
  FaEnvelope,
  FaChartBar,
  FaAddressCard,
  FaMailBulk,
  FaExclamationTriangle,
  FaCommentDots,
} from 'react-icons/fa';

const menu = [
  {
    key: '1',
    name: 'Dashboard',
    icon: <FaChartPie />,
    link: '/admin/dashboard',
  },
  {
    key: '2',
    name: 'Content',
    icon: <FaFileAlt />,
    menu: [
      {
        key: '2.1',
        name: 'Section',
        link: '/admin/content-manage',
        icon: <FaAlignLeft />,
      },
      {
        key: '2.2',
        name: 'Page',
        icon: <FaRegFile />,
        link: '/admin/page-manage',
      },
      {
        key: '2.7',
        name: 'Menu',
        icon: <FaLink />,
        link: '/admin/menu-manage',
      },
      {
        key: '2.3',
        name: 'Media',
        icon: <FaImages />,
        link: '/admin/media-manage',
      },
      {
        key: '2.4',
        name: 'Slider',
        icon: <FaPhotoVideo />,
        link: '/admin/slider-manage',
      },
      {
        key: '2.5',
        name: 'Blog',
        icon: <FaRss />,
        menu: [
          {
            key: '2.5.1',
            name: 'Blog',
            link: '/admin/blog-manage',
            icon: <FaPencilAlt />,
          },
          {
            key: '2.5.2',
            name: 'Category',
            icon: <FaThLarge />,
            link: '/admin/blog-cat-manage',
          },
        ],
      },
      {
        key: '2.2',
        name: 'FAQ',
        icon: <FaQuestionCircle />,
        menu: [
          {
            key: '2.2.1',
            name: 'Faq',
            icon: <FaQuestion />,
            link: '/admin/faq-manage',
          },
          {
            key: '2.2.2',
            name: 'Category',
            icon: <FaArchive />,
            link: '/admin/faq-cat-manage',
          },
        ],
      },
    ],
  },
  {
    key: '3',
    name: 'Access',
    icon: <FaShieldAlt />,
    menu: [
      {
        key: '3.1',
        name: 'Users',
        icon: <FaUserShield />,
        link: '/admin/user-manage',
      },
      {
        key: '3.2',
        name: 'Roles',
        icon: <FaSitemap />,
        link: '/admin/role-manage',
      },
    ],
  },
  {
    key: '6',
    name: 'Modules',
    icon: <FaPuzzlePiece />,
    menu: [
      {
        key: '6.3',
        name: 'Modules',
        icon: <FaBoxOpen />,
        link: '/admin/module-manage',
      },
      {
        key: '6.4',
        name: 'Module Group',
        icon: <FaBoxes />,
        link: '/admin/sub-modules',
      },
    ],
  },
  {
    key: '4',
    name: 'Settings',
    icon: <FaCogs />,
    menu: [
      {
        key: '4.1',
        name: 'Email Template',
        icon: <FaEnvelope />,
        link: '/admin/template-manage',
      },
      {
        key: '4.2',
        name: 'General Settings',
        icon: <FaCog />,
        link: '/admin/settings',
      },
    ],
  },
  {
    key: '5',
    name: 'Reports',
    icon: <FaChartBar />,
    menu: [
      {
        key: '5.1',
        name: 'Contacts',
        icon: <FaAddressCard />,
        link: '/admin/contact-manage',
      },
      {
        key: '5.2',
        name: 'Subscribes',
        icon: <FaMailBulk />,
        link: '/admin/subscribe-manage',
      },
      {
        key: '5.4',
        name: 'Errors',
        icon: <FaExclamationTriangle />,
        link: '/admin/errors',
      },
      {
        key: '5.5',
        name: 'Comment',
        icon: <FaCommentDots />,
        link: '/admin/blog-comment-manage',
      },
    ],
  },
];
export default menu;
