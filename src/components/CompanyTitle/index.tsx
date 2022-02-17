import React from 'react';
import {Typography} from '@mui/material';
import {CompanyNameProps} from './index.types';
import Item from './index.styles';

function CompanyName(props: CompanyNameProps) {
  const {name} = props;

  return (
    <Item elevation={3}>
      <Typography variant="h6">{name}</Typography>
    </Item>
  );
}

export default CompanyName;
