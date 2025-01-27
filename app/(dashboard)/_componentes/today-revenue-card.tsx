import { formatCurrency } from "@/app/helpers/currency";
import { DollarSign } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { getTodayRevenue } from "@/app/_data-access/dashboard/get-today-revenue";

const TodayRevenueCard = async () => {
  const todayRevue = await getTodayRevenue();
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <DollarSign />
      </SummaryCardIcon>
      <SummaryCardTitle>Receita hoje</SummaryCardTitle>
      <SummaryCardValue>{formatCurrency(todayRevue)}</SummaryCardValue>
    </SummaryCard>
  );
};

export default TodayRevenueCard;
