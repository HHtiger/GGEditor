import Item from '@/components/ItemPanel/Item';
import { RegisterNode } from '@/components/Register';
import { setAnchorPointsState } from '@/shape/common/anchor';
import React from 'react';

import commonStyles from '../../index.less';
import { labeCfg, RuleNode, StrategyNode, styleCfg } from '../type';
import styles from './index.less';

export const StrategyChild = {
  Item: (
    <Item
      className={commonStyles.item}
      model={{
        type: StrategyNode.STRATEGY_CHILD,
        size: [100, 50],
        label: '子策略',
        center: 'topLeft',
        style: {
          fill: '#ffa39e',
          stroke: '#a8071a',
          ...styleCfg,
        },
        ...labeCfg,
      }}
    >
      <div className={styles.strategy} draggable={false}>
        子策略
      </div>
    </Item>
  ),
  RegisterNode: (
    <RegisterNode
      name={StrategyNode.STRATEGY_CHILD}
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
      extend="rect"
    />
  ),
};
