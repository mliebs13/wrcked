import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../../_app";
import AdminLayout from "@src/layouts/AdminLayout";

const Notifications: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(false);

  return (
    <main className="w-full min-h-[calc(100vh-95px)] bg-lightGray flex items-start">
      <div className="w-full flex flex-col items-center px-10 py-12 2xl:px-20">
        <h2 className="font-bold text-lg text-center mb-6">Notifications</h2>
        <div className="w-full">
          <form></form>
        </div>
      </div>
    </main>
  );
};

Notifications.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Notifications;
