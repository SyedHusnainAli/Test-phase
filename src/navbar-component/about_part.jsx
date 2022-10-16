import * as React from 'react';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import '../styles/about_style.css';

export default function BadgeMax() {
  return (
    <div className='message'>
    <Stack spacing={4} direction="row"  sx={{ color: 'action.active' }}>
      <Badge color="secondary" badgeContent={9} className={'font'}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={50}>
        <MailIcon />
      </Badge>
      <Badge color="secondary"  badgeContent={100} max={99}>
        <MailIcon />
      </Badge>
    </Stack>
    </div>
  );
}
