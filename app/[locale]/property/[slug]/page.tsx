import Container from "@/components/common/container";
import { getProperties } from "@/helpers/getProperties";

import Translation from "../../../../components/ui/property/Translation";
type Props = {
  slug?: string;
};

const Property = async ({ params }: { params: Props }) => {
  const data = await getProperties(
    `http://localhost:3000/api/property?slug=${params.slug}`
  );
  const property = data[0];

  return (
    <Container>
      <Translation property={property} />
    </Container>
  );
};

export default Property;
