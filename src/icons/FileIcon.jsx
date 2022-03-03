import * as React from "react";

const FileIcon = (props) => (
  <svg
    width={140}
    height={159}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M140 146.769c0 3.244-1.341 6.355-3.728 8.649-2.387 2.293-5.624 3.582-8.999 3.582H12.727c-3.375 0-6.612-1.289-9-3.582C1.342 153.124 0 150.013 0 146.769V12.231c0-3.244 1.34-6.355 3.728-8.649C6.115 1.29 9.352 0 12.728 0h63.636L140 61.154v85.615Z"
      fill="#888"
    />
    <path
      d="M26 60h36M26 95h89M26 130h89"
      stroke="#fff"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FileIcon;
