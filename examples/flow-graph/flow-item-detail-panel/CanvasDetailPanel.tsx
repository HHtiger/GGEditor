import { Card, Input, message, Select } from 'antd';
import React, { useContext, useState } from 'react';
import { EditorContextProps, withEditorContext } from '@/components/EditorContext';
import DetailPanel, { DetailPanelComponentProps } from '@/components/DetailPanel';

export interface CanvasPanelProps extends EditorContextProps, DetailPanelComponentProps {}

const onSubmitForm = (props: CanvasPanelProps) => async (data): Promise<void> => {};

const CanvasDetail: React.FC<CanvasPanelProps> = props => {
  return (
    <Card title={'主配置'} bordered={false}>
      sss
    </Card>
  );
};

export const CanvasPanel = DetailPanel.create<CanvasPanelProps>('canvas')(withEditorContext(CanvasDetail));
