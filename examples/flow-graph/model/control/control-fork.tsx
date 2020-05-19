import Item from '@/components/ItemPanel/Item';
import { RegisterNode } from '@/components/Register';
import { setAnchorPointsState } from '@/shape/common/anchor';
import React from 'react';

import commonStyles from '../../index.less';
import { ControlNode, labeCfg, styleCfg } from '../type';
import styles from './index.less';

export const ControlFork = {
  Item: (
    <Item
      className={commonStyles.item}
      model={{
        type: ControlNode.FLOW_FORK,
        size: 50,
        label: 'fork',
        center: 'topLeft',
        style: {
          fill: '#87e8de',
          stroke: '#006d75',
          ...styleCfg,
        },
        ...labeCfg,
      }}
    >
      <div className={styles.controlFork} draggable={false}>
        fork
      </div>
    </Item>
  ),
  RegisterNode: (
    <RegisterNode
      name={ControlNode.FLOW_FORK}
      config={{
        setState(name, value, item) {
          setAnchorPointsState.call(
            this,
            name,
            value,
            item,
            (item, anchorPoint) => {
              const { width, height } = item.getKeyShape().getBBox();
              const [x, y] = anchorPoint;
              return {
                x: width * x - width / 2,
                y: height * y - height / 2,
              };
            },
            (item, anchorPoint) => {
              const { width, height } = item.getKeyShape().getBBox();
              const [x, y] = anchorPoint;
              return {
                x: width * x - width / 2,
                y: height * y - height / 2,
              };
            },
          );
        },
        getAnchorPoints() {
          return [
            [0.5, 0],
            [0.5, 1],
            [0, 0.5],
            [1, 0.5],
          ];
        },
      }}
      extend="circle"
    />
  ),
};
