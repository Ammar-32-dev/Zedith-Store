import Image from 'next/image';
import { useCartStore } from '@/lib/store';
import { XMarkIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

export default function Cart() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCartStore();

  const handleCheckout = async () => {
    // Simple checkout process
    toast.success('Order placed successfully! This is a demo without payment processing.');
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
            <div className="relative w-20 h-20">
              <Image
                src={item.image_url}
                alt={item.name}
                fill
                className="object-cover rounded"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-500">${item.price.toFixed(2)}</p>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <MinusIcon className="w-4 h-4" />
              </button>
              
              <span className="w-8 text-center">{item.quantity}</span>
              
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <PlusIcon className="w-4 h-4" />
              </button>
            </div>
            
            <button
              onClick={() => removeItem(item.id)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <XMarkIcon className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-6 space-y-4">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        
        <button
          onClick={handleCheckout}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Place Order (Demo)
        </button>
        
        <button
          onClick={clearCart}
          className="w-full text-gray-500 underline"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
} 