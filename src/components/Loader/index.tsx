import React from 'react';
import {CircularProgress} from '@mui/material';
import Div from './index.styles';
import {LoaderProps} from './index.types';

function Loader(props: LoaderProps) {
  const {size = 50} = props;

  return (
    <Div {...props}>
      <CircularProgress size={size} />
    </Div>
  );
}

export default Loader;
