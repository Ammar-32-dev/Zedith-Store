import Link from "next/link";

async function getProducts() {
  // Replace with your actual data fetching logic
  console.log('PRODUCT_DATA_URL:', process.env.PRODUCT_DATA_URL);
  return [];
}

export default async function ProductsPage() {
  const products = await getProducts();
  console.log('products:', products);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product: any) => (
            <div key={product.id} className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p>{product.description}</p>
              <p className="font-bold">${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
      <div className="text-center mt-8">
        <Link href="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go back home
          </button>
        </Link>
      </div>
    </div>
  );
}