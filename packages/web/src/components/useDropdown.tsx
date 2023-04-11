import React, { useMemo, useState } from "react";

type Dropdown = [
  string,
  React.FC,
  React.Dispatch<React.SetStateAction<string>>
];

const useDropdown = (
  label: string,
  defaultState: string | undefined,
  options: string[]
): Dropdown => {
  const [state, setState] = useState<string>(defaultState || "");
  const memoizedDropdown: Dropdown = useMemo(() => {
    const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
    const Dropdown: React.FC = () => (
      <label htmlFor={id} className="dropdown_label">
        <span>{label}:</span>
        <select
          id={id}
          className="select_main"
          value={state}
          onChange={(e) => setState(e.target.value)}
          onBlur={(e) => setState(e.target.value)}
          disabled={!options || options.length === 0}
        >
          {options
            ? options.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))
            : null}
        </select>
      </label>
    );

    return [state, Dropdown, setState];
  }, [label, options, state]);
  return memoizedDropdown;
};

export default useDropdown;
