import React from 'react';
import { useRecoilValue } from 'recoil';
import Bridge from './Bridge';
import { rows, cols } from '../../states';


export const GlassBridge = () => {

  return (
    <Bridge rows={useRecoilValue(rows)} cols={useRecoilValue(cols)}></Bridge>
  )
}
