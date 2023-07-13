import { getCities } from "@/app/api/getCities";
import IntlWrapper from "@/components/ui/Search/IntlWrapper.tsx";
import { getProperties } from "@/helpers/getProperties";
import { useLocale } from "next-intl";
type Props = {
  searchParams: any;
};
async function SearchPage({ searchParams }: Props) {
  const url = createUrl(searchParams);

  const cities = await getCities();
  const properties = await getProperties(url);
  const locale = useLocale();

  return (
    <div className="max-w-[1140px] mx-auto mt-[100px]">
      <IntlWrapper
        properties={properties}
        cities={cities}
        selectedCity={searchParams["city"]}
        type={searchParams["type"]}
        min={searchParams["min"]}
        max={searchParams["max"]}
        bedroom={searchParams["bedroom"]}
        locale={locale}
      />
    </div>
  );
}

export default SearchPage;

const createUrl = (searchParams: any) => {
  let url = "http://localhost:3000/api/property?";

  for (const param in searchParams) {
    if (searchParams.hasOwnProperty(param)) {
      url += `${param}=${searchParams[param]}&`;
    }
  }
  url = url.slice(0, -1);
  return url;
};
