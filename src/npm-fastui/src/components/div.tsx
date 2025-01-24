import type { FC } from 'react'
import type { Div, Page } from '../models'

import { useClassName } from '../hooks/className'

import { AnyCompList } from './index'

export const DivComp: FC<Div | Page> = (props) => (
  <div className={useClassName(props)}>
    <AnyCompList propsList={props.components} />
  </div>
)
