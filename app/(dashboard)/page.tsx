import Header, {
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";
import { SummaryCardSkeleton } from "./_componentes/summary-card";
import TotalRevenueCard from "./_componentes/total-revenue-card";
import { Suspense } from "react";
import TodayRevenueCard from "./_componentes/today-revenue-card";
import TotalSalesCard from "./_componentes/total-sales-card";
import TotalStockCard from "./_componentes/total-stock-card";
import TotalProductsCard from "./_componentes/total-products";
import Last14DaysRevenueCard from "./_componentes/last-14-days-revenue-card";
import { Skeleton } from "../_components/ui/skeleton";
import MostSoldProducts, {
  MostSoldProductSkeleton,
} from "./_componentes/most-sold-products";

const Home = async () => {
  return (
    <div className="m-8 flex w-full flex-col space-y-8 rounded-lg">
      <Header>
        <HeaderLeft>
          <HeaderTitle>Dashboard</HeaderTitle>
          <HeaderSubtitle>Visão geral dos dados</HeaderSubtitle>
        </HeaderLeft>
      </Header>
      <div className="grid grid-cols-2 gap-6">
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalRevenueCard />
        </Suspense>

        <Suspense fallback={<SummaryCardSkeleton />}>
          <TodayRevenueCard />
        </Suspense>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalSalesCard />
        </Suspense>
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalStockCard />
        </Suspense>
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalProductsCard />
        </Suspense>
      </div>

      <div className="grid min-h-0 grid-cols-[minmax(0,2.5fr),minmax(0,1fr)] gap-6">
        <Suspense
          fallback={
            <Skeleton className="flex h-full flex-col overflow-hidden rounded-xl bg-white p-6">
              <div className="space-y-2">
                <div className="h-5 w-[86.26px] rounded-md bg-gray-200" />
                <div className="h-4 w-32 rounded-md bg-gray-200" />
              </div>
            </Skeleton>
          }
        >
          <Last14DaysRevenueCard />
        </Suspense>
        <Suspense fallback={<MostSoldProductSkeleton />}>
          <MostSoldProducts />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
