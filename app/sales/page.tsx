import { ComboboxOption } from "../_components/ui/combobox";
import { DataTable } from "../_components/ui/data-table";
import Header, {
  HeaderLeft,
  HeaderTitle,
  HeaderSubtitle,
  HeaderRight,
} from "../_components/header";
import { getProducts } from "../_data-access/product/get-products";
import { getSales } from "../_data-access/sale/get-sales";
import UpsertSaleButton from "./_componentes/create-sale-button";
import { saleTableColumns } from "./_componentes/table-columns";

const SalesPage = async () => {
  const sales = await getSales();
  const products = await getProducts();
  const productOptions: ComboboxOption[] = products.map((product) => ({
    value: product.id,
    label: product.name,
  }));
  const tableData = sales.map((sale) => ({
    ...sale,
    products,
    productOptions,
  }));

  return (
    <div className="m-8 w-full space-y-8 overflow-auto rounded-lg bg-white p-8 shadow">
      <Header>
        <HeaderLeft>
          <HeaderTitle>Vendas</HeaderTitle>
          <HeaderSubtitle>Gestão de Vendas</HeaderSubtitle>
        </HeaderLeft>
        <HeaderRight>
          <UpsertSaleButton
            products={products}
            productOptions={productOptions}
          />
        </HeaderRight>
      </Header>
      <DataTable columns={saleTableColumns} data={tableData} />
    </div>
  );
};

export default SalesPage;
