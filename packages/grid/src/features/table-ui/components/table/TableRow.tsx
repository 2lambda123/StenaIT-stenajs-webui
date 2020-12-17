import { BoxProps, Row } from "@stenajs-webui/core";
import * as React from "react";
import {
  defaultTableHeadRowHeight,
  tableBorder,
} from "../../../../config/TableConfig";

interface Props extends BoxProps {}

export const TableRow: React.FC<Props> = ({
  height = defaultTableHeadRowHeight,
  ...boxProps
}) => {
  return (
    <Row
      borderTop={tableBorder}
      hoverBackground={"var(--lhds-color-ui-100)"}
      height={height}
      {...boxProps}
    />
  );
};