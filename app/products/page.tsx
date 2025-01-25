import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { cachedGetProducts } from "../_data-access/product/get-products";
import CreateProductButton from "./_components/create-product-button";
import Header, {
  HeaderLeft,
  HeaderTitle,
  HeaderSubtitle,
  HeaderRight,
} from "../_components/header";
1;

const ProductPage = async () => {
  const products = await cachedGetProducts();
  // const response = await fetch("http://localhost:3000/api/products");
  // const products = await response.json();

  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8 shadow">
      <Header>
        <HeaderLeft>
          <HeaderTitle>Produtos</HeaderTitle>
          <HeaderSubtitle>Gestão de Produtos</HeaderSubtitle>
        </HeaderLeft>
        <HeaderRight>
          <CreateProductButton />
        </HeaderRight>
      </Header>
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
};

export default ProductPage;
