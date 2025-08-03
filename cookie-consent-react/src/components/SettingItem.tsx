import React, { useContext } from 'react';
import ListItem from '@mui/material/ListItem';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { ConsentService } from '../types/ConsentTypes';
import { ConsentContext } from '../context/ConsentContext';

interface SettingItemProps {
  service: ConsentService;
}

export default function SettingItem({ service }: SettingItemProps) {
  const ctx = useContext(ConsentContext);
  if (!ctx) return null;
  const { consent, updateConsent } = ctx;

  const listStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 16px',
    borderBottom: '1px solid #e0e0e0',
  };
  return (
    <ListItem sx={listStyle}>
      <Typography>{service.label}</Typography>
      <Switch
        checked={!!consent[service.key]}
        disabled={service.required}
        onChange={e => updateConsent({ [service.key]: e.target.checked })}
      />
    </ListItem>
  );
}