// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

const DropdownMenu = props => {
  const { id, header, color } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  if (!header) return null;

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const menuId = `${id}-menu`;

  return (
    <div>
      <Button
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseEnter={handleClick}
        color={color}
      >
        {header}
      </Button>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        {...props}
      >
        <MenuItem>
          <ListItemText primary="Sent mail" />
        </MenuItem>
        <MenuItem>
          <ListItemText primary="Drafts" />
        </MenuItem>
        <MenuItem>
          <ListItemText primary="Inbox" />
        </MenuItem>
      </Menu>
    </div>
  );
};

DropdownMenu.propTypes = {
  id: PropTypes.string.isRequired,
  header: PropTypes.node.isRequired,
  color: PropTypes.string,
};

DropdownMenu.defaultProps = {
  color: undefined,
};

export default DropdownMenu;
