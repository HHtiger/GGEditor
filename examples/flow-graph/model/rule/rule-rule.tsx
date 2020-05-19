import Item from '@/components/ItemPanel/Item';
import { RegisterNode } from '@/components/Register';
import { setAnchorPointsState } from '@/shape/common/anchor';
import React from 'react';

import commonStyles from '../../index.less';
import { labeCfg, RuleNode, styleCfg } from '../type';
import styles from './index.less';

export const RuleRule = {
  Item: (
    <Item
      className={commonStyles.item}
      model={{
        type: RuleNode.RULE_RULE,
        size: [50, 50],
        label: '规则',
        center: 'topLeft',
        style: {
          fill: '#d3adf7',
          stroke: '#391085',
          ...styleCfg,
        },
        ...labeCfg,
      }}
    >
      <div className={styles.ruleRule} draggable={false}>
        规则
      </div>
    </Item>
  ),
  RegisterNode: (
    <RegisterNode
      name={RuleNode.RULE_RULE}
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
