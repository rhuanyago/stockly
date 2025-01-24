import { ComboboxOption } from "../_components/ui/combobox";
import { getProducts } from "../_data-access/product/get-products";
import CreateSaleButton from "./_componentes/create-sale-button";

const SalesPage = async () => {
  const products = await getProducts();
  const productOptions: ComboboxOption[] = products.map((product) => ({
    value: product.id,
    label: product.name,
  }));

  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8 shadow">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de Vendas
          </span>
          <h2 className="text-xl font-bold">Vendas</h2>
        </div>
        <CreateSaleButton products={products} productOptions={productOptions} />
      </div>
    </div>
  );
};

export default SalesPage;
