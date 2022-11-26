import { FC, forwardRef, ReactNode } from "react";
import { Text, Tooltip } from "@chakra-ui/react";
import { formatDistanceToNowStrict, format } from "date-fns";

interface Props {
  children?: ReactNode;
}

interface ToolTipProps {
  createdAt: Date;
}

const DaysAgoTooltip: FC<ToolTipProps> = ({ createdAt }) => {
  const formatPostDate = (createdDate: Date) => {
    return format(new Date(createdDate), "MMM d, yyy H:M");
  };

  const daysDistanceFromNow = () => {
    const createdAtDate = new Date(createdAt);
    const remainder = formatDistanceToNowStrict(createdAtDate, {
      unit: "day",
    });
    const numberDates = remainder.split(" ");
    switch (numberDates[0]) {
      case "0": {
        return "Today";
      }
      default:
        return numberDates[0] + "d";
    }
  };

  return (
    <Tooltip label={formatPostDate(createdAt)}>
      <DaysAgoComponent>{daysDistanceFromNow()}</DaysAgoComponent>
    </Tooltip>
  );
};

// eslint-disable-next-line react/display-name
const DaysAgoComponent = forwardRef<HTMLParagraphElement, Props>(
  ({ children, ...rest }, ref) => (
    <Text fontSize={"md"} color={"rgba(255,255,255,0.8)"} ref={ref} {...rest}>
      {children}
    </Text>
  )
);

export default DaysAgoTooltip;
