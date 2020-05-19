import React from 'react';

import commonStyles from '../../index.less';
import { ControlNode, labeCfg, styleCfg } from '../type';
import styles from './index.less';
import Item from '@/components/ItemPanel/Item';
import { RegisterNode } from '@/components/Register';
import { setAnchorPointsState } from '@/shape/common/anchor';

export const ControlEnd = {
  Item: (
    <Item
      className={commonStyles.item}
      model={{
        ...styleCfg,
        ...labeCfg,
        type: ControlNode.FLOW_END,
        size: 50,
        label: '结束',
        center: 'topLeft',
        style: {
          fill: '#d9d9d9',
          stroke: '#595959',
          ...styleCfg,
        },
        ...labeCfg,
      }}
    >
      <div className={styles.controlEnd} draggable={false}>
        结束
      </div>
    </Item>
  ),
  RegisterNode: (
    <RegisterNode
      name={ControlNode.FLOW_END}
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
