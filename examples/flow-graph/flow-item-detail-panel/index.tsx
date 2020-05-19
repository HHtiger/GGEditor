import React from 'react';

import styles from '../index.less';
import { CanvasPanel } from './CanvasDetailPanel';

const FlowItemDetailPanel = () => (
  <div className={styles.editorFt}>
    <CanvasPanel />
  </div>
);

export default FlowItemDetailPanel;
