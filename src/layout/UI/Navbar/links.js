// Libraries
import React from 'react';

// Components
import Button from '@material-ui/core/Button';

// Icons
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/GroupWork';
import ContactIcon from '@material-ui/icons/Mail';
import DesignIcon from '@material-ui/icons/DeveloperBoard';
import DevelopIcon from '@material-ui/icons/DeveloperMode';
import DeliverIcon from '@material-ui/icons/HowToReg';
import MaintainIcon from '@material-ui/icons/Sync';
import NewEnterprisesIcon from '@material-ui/icons/Business';
import ExistingAppsIcons from '@material-ui/icons/Apps';
import MarketingIcon from '@material-ui/icons/DataUsage';
import TechConsultingIcon from '@material-ui/icons/PhoneIphone';

/**
 * `renderNavLinks` recursively renders the navbar's links.
 * If the item is an Array it will call itself.
 * If it's not an array, it will evaluate if the item is a button, or a list,
 * then render the respective component.
 */
const renderNavLinks = (links = []) => links.map((link, index) => {
  if (Array.isArray(link)) {
    return (
      <React.Fragment key={index}>
        {renderNavLinks(link)}
      </React.Fragment>
    );
  }
  const { type } = link;
  switch(type) {
    case 'list': {
      // Placeholder before implementing dropdown
      const { key, color, header } = link;
      return header && (
        <Button
          key={key}
          color={color}
        >
          {header}
        </Button>
      );
    }
    case 'button': {
      const { key, color, title } = link;
      return (
        <Button
          key={key}
          color={color}
        >
          {title}
        </Button>
      );
    }
    default:
      return null;
  }
});

const getShouldRenderDrawerIcon = (links = []) => links.find(link => {
  if (Array.isArray(link)) {
    return link.find(({ mobileOnly }) => mobileOnly);
  }
  const { mobileOnly } = link;
  return mobileOnly;
});

const links = [
  [
    {
      key: 'about_us',
      type: 'button',
      color: 'inherit',
      title: 'About us',
      caption: 'Meaning of DENMA, and our values',
      icon: <InfoIcon />,
    },
    {
      key: 'about_our_work',
      type: 'button',
      color: 'inherit',
      title: 'About our work',
      caption: 'An overview of how we work alongside our clients',
      icon: <WorkIcon />,
    },
    {
      key: 'contact_us',
      type: 'button',
      color: 'inherit',
      title: 'Contact us',
      caption: 'How to get in touch',
      icon: <ContactIcon />,
    }
  ],
  {
    key: 'drawer_headers',
    type: 'list',
    header: null,
    color: 'inherit',
    children: [
      { icon: <InfoIcon />, title: 'About us', caption: 'Meaning of DENMA, and our values' },
      { icon: <WorkIcon />, title: 'About our work', caption: 'An overview of how we work alongside our clients' },
      { icon: <ContactIcon />, title: 'Contact', caption: 'How to get in touch' },
    ],
    mobileOnly: true,
  },
  {
    key: 'how_we_work',
    type: 'list',
    header: 'How we work',
    color: 'inherit',
    children: [
      { icon: <DesignIcon />, title: 'Design', caption: 'Design caption' },
      { icon: <DevelopIcon />, title: 'Develop', caption: 'Develop caption' },
      { icon: <DeliverIcon />, title: 'Deliver', caption: 'Deliver caption' },
      { icon: <MaintainIcon />, title: 'Maintain', caption: 'Maintain caption' },
    ],
  },
  {
    key: 'how_we_help',
    type: 'list',
    header: 'How we help',
    color: 'inherit',
    children: [
      { icon: <NewEnterprisesIcon />, title: 'New Enterprises', caption: 'New Enterprises caption' },
      { icon: <ExistingAppsIcons />, title: 'Existing Applications', caption: 'Existing Applications caption' },
      { icon: <MarketingIcon />, title: 'Marketing Strategies and Analytics', caption: 'Marketing Strategies and Analytics caption' },
      { icon: <TechConsultingIcon />, title: 'Tech Consulting', caption: 'Tech Consulting caption' },
    ],
  },
];

export {
  links,
  getShouldRenderDrawerIcon,
  renderNavLinks,
};