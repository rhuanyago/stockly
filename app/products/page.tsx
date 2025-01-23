import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/product/get-products";
import CreateProductButton from "./_components/create-product-button";

const ProductPage = async () => {
  const products = await getProducts();
  // const response = await fetch("http://localhost:3000/api/products");
  // const products = await response.json();

  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8 shadow">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de Produtos
          </span>
          <h2 className="text-xl font-bold">Produtos</h2>
        </div>
        <CreateProductButton />
      </div>
      <DataTable
        columns={productTableColumns}
        data={JSON.parse(JSON.stringify(products))}
        // data={products}
      />
    </div>
  );
};

export default ProductPage;
