import React from 'react';

import { Input, Typography } from 'antd';
import { useField } from 'formik';
import { TextAreasAttributeI } from './types';

const { TextArea } = Input;

const TextAreas = ({
  label,
  minRows = 3,
  maxRows = 5,
  ...props
}: TextAreasAttributeI) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div>
      {label && <Typography.Title level={5}>{label}</Typography.Title>}
      <TextArea {...field} {...props} autoSize={{ minRows, maxRows }} />
      {meta.touched && meta.error ? (
        <div className="error" style={{ fontSize: '10px', color: 'red' }}>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default TextAreas;
