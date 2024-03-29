import { useState } from 'react';

import { Select as AntSelect, SelectProps } from 'antd';
import jsonp from 'fetch-jsonp';
import qs from 'qs';
import styled from 'styled-components';

let timeout: ReturnType<typeof setTimeout> | null;
let currentValue: string;

const fetch = (value: string, callback: (data: any) => void) => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  const fake = () => {
    const str = qs.stringify({
      code: 'utf-8',
      q: value,
    });
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then((response: any) => response.json())
      .then((d: any) => {
        if (currentValue === value) {
          const { result } = d;
          const data = result.map((item: any) => ({
            value: item[0],
            text: item[0],
          }));
          callback(data);
        }
      });
  };
  if (value) {
    timeout = setTimeout(fake, 300);
  } else {
    callback([]);
  }
};

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (value: string, callback: (data: any) => void) => void;
}
const Select = styled(AntSelect)`
  width: 100%;
  margin: 5px 0;
  //padding: 0 10px;
`;

const SearchInput = ({ placeholder, onSearch = fetch }: SearchInputProps) => {
  const [data, setData] = useState<SelectProps['options']>([]);
  const [value, setValue] = useState<string | unknown>();

  const handleSearch = (newValue: string) => {
    onSearch(newValue, setData);
  };
  const handleChange = (newValue: string | unknown) => {
    setValue(newValue);
  };
  return (
    <Select
      showSearch
      value={value}
      placeholder={placeholder}
      style={{ width: '100%' }}
      defaultActiveFirstOption={false}
      suffixIcon={null}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
      options={(data || []).map(d => ({
        value: d.value,
        label: d.text,
      }))}
    />
  );
};

export default SearchInput;
