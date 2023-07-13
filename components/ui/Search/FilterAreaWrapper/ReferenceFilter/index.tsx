"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

type Props = {};

const ReferenceFilter = (props: Props) => {
  const router = useRouter();
  const [referenceNumber, setReferenceNumber] = useState<string>();
  const [debouncedSearchKey] = useDebounce(referenceNumber, 500);
  useEffect(() => {
    router.push(`/search?reference=${referenceNumber}`);
  }, [debouncedSearchKey]);

  return (
    <>
      <input
        type="number"
        className="w-full rounded-md border border-1 border-slate-500 text-sm text-slate-600 p-3 focus:border-slate-400 focus:ring-slate-400"
        placeholder="REF NO"
        onChange={(e) => setReferenceNumber(e.target.value)}
      />
      <hr className="h-px my-4 bg-slate-100 border-1 dark:bg-gray-700" />
    </>
  );
};

export default ReferenceFilter;
