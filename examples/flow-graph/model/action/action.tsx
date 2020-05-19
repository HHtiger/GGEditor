import React from 'react';

import commonStyles from '../../index.less';
import { ActionNode, labeCfg, styleCfg } from '../type';
import styles from './index.less';
import Item from '@/components/ItemPanel/Item';
import { RegisterNode } from '@/components/Register';
import { setAnchorPointsState } from '@/shape/common/anchor';

export const Action = {
  Item: (
    <Item
      className={commonStyles.item}
      model={{
        type: ActionNode.ACTION,
        size: 60,
        label: '动作',
        center: 'topLeft',
        style: {
          fill: '#ffbb96',
          stroke: '#ad2102',
          ...styleCfg,
        },
        ...labeCfg,
      }}
    >
      <div className={styles.Action} draggable={false}>
        <span title="动作">动作</span>
      </div>
    </Item>
  ),
  RegisterNode: (
    <RegisterNode
      name={ActionNode.ACTION}
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
      extend="diamond"
    />
  ),
};
