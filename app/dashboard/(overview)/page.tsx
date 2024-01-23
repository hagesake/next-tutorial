import { Suspense } from 'react';

import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import {
  CardsSkeleton,
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
} from '@/app/ui/skeletons';

const DashboardPage = async () => {
  return (
    <>
      <main>
        <h1 className="font mb-4 font-Lusitana text-xl md:text-2xl">
          Dashboard Page
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<CardsSkeleton />}>
            <CardWrapper />
          </Suspense>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback={<RevenueChartSkeleton />}>
            <RevenueChart />
          </Suspense>

          <Suspense fallback={<LatestInvoicesSkeleton />}>
            <LatestInvoices />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default DashboardPage;
